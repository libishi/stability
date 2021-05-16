export const checkNullability = obj => {
	const values = Object.keys(obj).forEach(key => {
		if (
			obj[key] === undefined ||
			obj[key] === null ||
			obj[key] === '' ||
			obj[key] === [] ||
			obj[key] === {}
		) {
			delete obj[key]
		}
	})
	return values
}

// function removeEmptyFields(data) {
// 	Object.keys(data).forEach(key => {
// 		if (data[key] === '' || data[key] == null) {
// 			delete data[key]
// 		}
// 	})
// }
