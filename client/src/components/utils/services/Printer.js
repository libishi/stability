export const print = table => {
	const printWindow = window.open()
	printWindow.document.write(table)
	printWindow.print()
	printWindow.close()
}

const print = (data, header) => {
	const { content } = excel(data, header)

	const style =
		'\n' +
		'body, table { \n' +
		"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; \n" +
		'font-size:12px \n' +
		'}\n' +
		'table {\n' +
		'width: 100%;\n' +
		'}\n' +
		'thead {\n' +
		'font-weight: bold;\n' +
		'}'
	return `<style>${style}</style>${content}`
}
