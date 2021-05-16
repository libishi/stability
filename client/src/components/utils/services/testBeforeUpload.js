export const testBeforeUpload = (file, name) => {
	// let error = {}
	// console.log('file beforeUpload', file)
	const isJpgOrPng =
		file.type === 'image/png' ||
		file.type === 'image/jpg' ||
		file.type === 'image/jpeg'

	let customerrormessage = 'Avatar should be jpg/JPEG/png'

	if (name === 'image' && !isJpgOrPng) {
		customerrormessage = 'Avatar should be jpg/JPEG/png'
		return customerrormessage
	}

	const isLt2M = file.size / 1024 / 1024 < 2

	if (!isLt2M) {
		customerrormessage = 'Avatar max size is 2MB'
		return customerrormessage
	}

	return null
}
