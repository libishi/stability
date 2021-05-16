import * as Yup from 'yup'

const Errors = {
	Required: 'Required',
	Min: 'Too Short',
	Max: 'Too Long',
}

// const Options = {
// 	strict: false,
// 	abortEarly: true,
// 	stripUnknown: true,
// 	recursive: true,
// 	// context?: object,
// }

export function checkIfFilesAreTooBig(file) {
	// console.log('file', file)
	let valid = true
	if (file) {
		const size = file.size / 1024 / 1024
		console.log('size', size)
		if (size > 2) {
			valid = false
		}
	}
	return valid
}

export function checkIfFilesAreCorrectType(file) {
	// console.log('file', file)
	let valid = true
	if (file) {
		if (
			!['application/pdf', 'image/jpeg', 'image/png'].includes(
				file.type
			)
		) {
			valid = false
		}
	}
	return valid
}

export const validateEDAUser = Yup.object().shape({
	Username: Yup.string().required(Errors.Required),
	Email: Yup.string()
		.email('Invalid email')
		.required(Errors.Required),
	Password: Yup.string().required('Password is required'),
	PasswordConfirmation: Yup.string()
		.oneOf([Yup.ref('Password'), null], 'Passwords must match')
		.required(Errors.Required),
	Firstname: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	Middlename: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	Lastname: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	NationalID: Yup.string().required(Errors.Required),
	Mobile: Yup.string().required(Errors.Required),
	Permissions: Yup.array()
		.nullable()
		.required(Errors.Required)
		.of(Yup.string())
		.min(1),
	Image: Yup.mixed()
		.required(Errors.Required)
		// .nullable()
		.test('is-correct-file', 'VALIDATION_FIELD_FILE_BIG', file =>
			checkIfFilesAreTooBig(file)
		)
		.test('is-big-file', 'VALIDATION_FIELD_FILE_WRONG_TYPE', file =>
			checkIfFilesAreCorrectType(file)
		),
	PDF: Yup.mixed()
		.required(Errors.Required)
		// .nullable()
		.test('is-correct-file', 'VALIDATION_FIELD_FILE_BIG', file =>
			checkIfFilesAreTooBig(file)
		)
		.test('is-big-file', 'VALIDATION_FIELD_FILE_WRONG_TYPE', file =>
			checkIfFilesAreCorrectType(file)
		),
})

export const validateUserUpdate = Yup.object().shape({
	Username: Yup.string().required(Errors.Required),
	Email: Yup.string()
		.email('Invalid email')
		.required(Errors.Required),
	Firstname: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	Middlename: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	Lastname: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	NationalID: Yup.string().required(Errors.Required),

	Mobile: Yup.string().required(Errors.Required),

	Permissions: Yup.array().of(Yup.string()).min(1),

	Avatar: Yup.array()
		.nullable()
		// .required('VALIDATION_FIELD_REQUIRED')
		.test(
			'is-correct-file',
			'VALIDATION_FIELD_FILE_BIG',
			checkIfFilesAreTooBig
		)
		.test(
			'is-big-file',
			'VALIDATION_FIELD_FILE_WRONG_TYPE',
			checkIfFilesAreCorrectType
		),
})

export const validateCompanyUser = Yup.object().shape({
	EntityID: Yup.string().required(Errors.Required),
	Email: Yup.string()
		.email('Invalid email')
		.required(Errors.Required),
	Password: Yup.string().required('Password is required'),
	PasswordConfirmation: Yup.string()
		.oneOf([Yup.ref('Password'), null], 'Passwords must match')
		.required(Errors.Required),
	Firstname: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	Middlename: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	Lastname: Yup.string()
		.min(2, Errors.Min)
		.max(50, Errors.Max)
		.required(Errors.Required),
	NationalID: Yup.string().required(Errors.Required),
	Mobile: Yup.string().required(Errors.Required),
	// Image: Yup.string().required(Errors.Required),
	Permissions: Yup.array().of(Yup.string()).min(1),
})

export const validateArea = Yup.object().shape({
	Name: Yup.string().required(Errors.Required),
	ManuProdLineTypeID: Yup.string().required(Errors.Required),
	ManuProdLineAreaID: Yup.string().required(Errors.Required),
})

export const validateLine = Yup.object().shape({
	Name: Yup.string().required(Errors.Required),
	ProductionLineID: Yup.string().required(Errors.Required),
	LicenseDate: Yup.string().required(Errors.Required),
	isOpen: Yup.boolean().required(Errors.Required),
	CloseReason: Yup.string().when('isOpen', {
		is: false,
		then: Yup.string().required('Must enter Close Reason'),
	}),
	CloseDate: Yup.string().when('isOpen', {
		is: false,
		then: Yup.string().required('Must enter Close Reason'),
	}),
})

export const validateSubLine = Yup.object().shape({
	Name: Yup.string().required(Errors.Required),
	LineID: Yup.string().required(Errors.Required),
	ProductionSubLineID: Yup.string().required(Errors.Required),
	LicenseDate: Yup.string().required(Errors.Required),
	isOpen: Yup.boolean().required(Errors.Required),
	CloseReason: Yup.string().when('isOpen', {
		is: false,
		then: Yup.string().required('Must enter Close Reason'),
	}),
	CloseDate: Yup.string().when('isOpen', {
		is: false,
		then: Yup.string().required('Must enter Close Reason'),
	}),
})

export const validateMachine = Yup.object().shape({
	Machine_Name: Yup.string().required(Errors.Required),
	SerialNo: Yup.string().required(Errors.Required),
	Model: Yup.string().required(Errors.Required),
	Origin: Yup.string().required(Errors.Required),
})

export const validateAudiTrails = Yup.object().shape({
	Action: Yup.string().min(6).required(Errors.Required),
	UserID: Yup.string().min(6).required(Errors.Required),
	// LogDate: Yup.string().required(Errors.Required),
})

export const validateManageUser = Yup.object()
	.shape({
		Username: Yup.string().required(Errors.Required),
		isActive: Yup.bool().nullable().required(Errors.Required),
		// LogDate: Yup.string().required(Errors.Required),
	})
	// .options({ stripUnknown: true, abortEarly: false })
	.test(
		'at-least-one-property',
		'you must provide at least one',
		value => !!(value.Username || value.isActive)
	)

export const validateNewCompany = Yup.object().shape({
	CompAName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.matches(/^[\u0621-\u064A\u0660-\u0669 ]+$/, 'Arabic only')
		.required('Required'),
	CompName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	CommRegNo: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	IndusRegNo: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	TaxCardNo: Yup.string()
		.min(9, 'Too Short!')
		.max(9, 'Too Long!')
		.required('Required'),
	CompStreet: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	CompBuilding: Yup.string()
		.max(50, 'Too Long!')
		.required('Required'),
	CompCityID: Yup.string().required('Required'),
	CompGovID: Yup.string().required('Required'),
	CompTypeID: Yup.string().required('Required'),
	License_type_code: Yup.string().required('Required'),
})
