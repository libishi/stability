import { useReducer, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'

export const useCheck = (searchVariable, gqlQuery, gqlResolver) => {
	const statesEDAU = {
		loading: false,
		customvalidation: false,
		customerrormessage: '',
	}

	const reducer = (values, action) => {
		return {
			...values,
			[action.field]: action.value,
		}
	}

	const [values, dispatch] = useReducer(reducer, statesEDAU)

	const [checker, { data }] = useLazyQuery(gqlQuery, {
		variables: {
			text: searchVariable,
		},
	})

	useEffect(() => {
		if (data && data?.[`${gqlResolver}`]) {
			dispatch({ field: 'customvalidation', value: true })
			if (gqlResolver === 'userNameExists') {
				dispatch({
					field: 'customerrormessage',
					value: 'Username already exists',
				})
			} else if (gqlResolver === 'isAlreadyMerged') {
				dispatch({
					field: 'customerrormessage',
					value: 'This company already merged',
				})
			} else {
				dispatch({
					field: 'customerrormessage',
					value: 'Email already exists',
				})
			}
		} else {
			dispatch({ field: 'customvalidation', value: false })
			dispatch({ field: 'customerrormessage', value: '' })
		}
	}, [data, gqlResolver])

	return [checker, values]
}
