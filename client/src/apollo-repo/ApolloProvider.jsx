import {
	ApolloProvider as Provider,
	ApolloClient,
	split,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { onError } from '@apollo/client/link/error'
import { getMainDefinition } from '@apollo/client/utilities'

import { createUploadLink } from 'apollo-upload-client'
// import { typeDefs } from '../components/utils/graphql/frontend/TypeDefs'
import { cache } from './Cache'

let httpLink = createUploadLink({
	uri: `http://${process.env.REACT_APP_SERVER_URL}/graphql`,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
	console.log('graphQLErrors', graphQLErrors)
	console.log('networkError', networkError?.message)
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		)

	if (networkError?.statusCode)
		console.log(`[Network error]: ${networkError}`)
})

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token')

	console.log('token', token)
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const link = errorLink.concat(authLink.concat(httpLink))

const wsLink = new WebSocketLink({
	uri: `ws://${process.env.REACT_APP_SERVER_URL}/subscriptions`,
	options: {
		reconnect: true,
		connectionParams: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	},
})

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query)
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		)
	},
	wsLink,
	link
)

const client = new ApolloClient({
	cache,
	link: splitLink,
	// typeDefs,
	connectToDevTools: true,
	queryDeduplication: true,

	defaultOptions: {
		watchQuery: {
			// fetchPolicy: 'cache-and-network', // 'cache-and-network'
			errorPolicy: 'all',
			notifyOnNetworkStatusChange: true,
		},
		query: {
			// fetchPolicy: 'cache-and-network',
			errorPolicy: 'all',
		},
		mutate: {
			errorPolicy: 'all',
		},
	},
})

export const ApolloProvider = props => {
	return <Provider client={client} {...props} />
}
