import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (err) {
			console.error('err1', err)
			return initialValue
		}
	})

	const setValue = value => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (err) {
			console.error('err2', err)
		}
	}

	return [storedValue, setValue]
}
