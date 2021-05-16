import Joi from 'joi'

const cases = {
	'string.base': `"a" should be a type of 'text'`,
	'string.pattern.base': 'Arabic only',
	'string.empty': `Required`,
	'string.min': `must be more than "a" characters`,
	'array.base': `Required`,
	'array.empty': `Required`,
	'array.min': `must be more than 3 characters`,
	'object.base': `Required`,
	'any.required': `Required`,
	'any.only': `must match`,
}

export const validateMerge = Joi.object({
	MainID: Joi.string().required().messages(cases),
	ChildID: Joi.string().required().messages(cases),
	MergeR: Joi.string().required().messages(cases),
}).options({ stripUnknown: true, abortEarly: false })

export const validateAudiTrails = Joi.object({
	UserID: Joi.string().allow(null, ''),
	Action: Joi.array().allow(null, ''),
})
	.min(1)
	.options({ stripUnknown: true })

export const validateManageUser = Joi.object({
	Username: Joi.string(),
	isActive: Joi.boolean(),
})
// .or('Username', 'isActive')

export const validateEDAUser = Joi.object({
	Username: Joi.string().required().messages(cases),
	Email: Joi.string().required().messages(cases),
	Password: Joi.string()
		.required()
		.min(6)
		.max(10)
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
		.messages({ 'string.min': 'must be more than 6 characters' }),
	PasswordConfirmation: Joi.any()
		.equal(Joi.ref('Password'))
		.required()
		.label('Confirm password')
		.messages({ 'any.only': 'does not match' }),
	Firstname: Joi.string().min(2).max(10).required().messages(cases),
	Middlename: Joi.string().min(2).max(10).required().messages(cases),
	Lastname: Joi.string().min(2).max(10).required().messages(cases),
	NationalID: Joi.string().required().messages(cases),
	Mobile: Joi.string().required().messages(cases),
	Image: Joi.object().required().messages(cases),
	Permissions: Joi.array().required().messages(cases),
	// Permissions: Joi.array().of(Joi.string()).min(1),
}).options({ stripUnknown: true, abortEarly: false })

export const validateUserUpdate = Joi.object({
	Username: Joi.string().required().messages(cases),
	Email: Joi.string().required().messages(cases),
	Firstname: Joi.string().min(3).max(15).required().messages(cases),
	Middlename: Joi.string().min(3).max(15).required().messages(cases),
	Lastname: Joi.string().min(3).max(15).required().messages(cases),
	NationalID: Joi.string().required().messages(cases),
	isActive: Joi.boolean().required().messages(cases),

	Mobile: Joi.string().required().messages(cases),
	Permissions: Joi.array().required().messages(cases),
}).options({ stripUnknown: true, abortEarly: false })

export const validateCompanyUser = Joi.object({
	EntityID: Joi.string().required().messages(cases),
	Email: Joi.string().required().messages(cases),
	Password: Joi.string().required().messages(cases),

	Firstname: Joi.string().min().max().required().messages(cases),
	Middlename: Joi.string().min().max().required().messages(cases),
	Lastname: Joi.string().min().max().required().messages(cases),
	NationalID: Joi.string().required().messages(cases),
	Mobile: Joi.string().required().messages(cases),
	// Image: Joi.string().required().messages(cases),
}).options({ stripUnknown: true, abortEarly: false })

export const validateArea = Joi.object({
	Name: Joi.string().required().messages(cases),
	ManuProdLineTypeID: Joi.string().required().messages(cases),
	ManuProdLineAreaID: Joi.string().required().messages(cases),
}).options({ stripUnknown: true, abortEarly: false })

export const validateLine = Joi.object({
	Name: Joi.string().required().messages(cases),
	ProductionLineID: Joi.string().required().messages(cases),
	LicenseDate: Joi.string().required().messages(cases),
	isOpen: Joi.boolean().required().messages(cases),
	CloseReason: Joi.string().when('isOpen', {
		is: false,
		then: Joi.string().required().messages(cases),
	}),
	CloseDate: Joi.string().when('isOpen', {
		is: false,
		then: Joi.string().required().messages(cases),
	}),
}).options({ stripUnknown: true, abortEarly: false })

export const validateSubLine = Joi.object({
	Name: Joi.string().required().messages(cases),
	LineID: Joi.string().required().messages(cases),
	ProductionSubLineID: Joi.string().required().messages(cases),
	LicenseDate: Joi.string().required().messages(cases),
	isOpen: Joi.boolean().required().messages(cases),
	CloseReason: Joi.string().when('isOpen', {
		is: false,
		then: Joi.string().required().messages(cases),
	}),
	CloseDate: Joi.string().when('isOpen', {
		is: false,
		then: Joi.string().required().messages(cases),
	}),
}).options({ stripUnknown: true, abortEarly: false })

export const validateMachine = Joi.object({
	Machine_Name: Joi.string().required().messages(cases),
	SerialNo: Joi.string().required().messages(cases),
	Model: Joi.string().required().messages(cases),
	Origin: Joi.string().required().messages(cases),
}).options({ stripUnknown: true, abortEarly: false })

export const validateNewCompany = Joi.object({
	CompAName: Joi.string()
		.min(2)
		.max(50)
		.pattern(/^[\u0621-\u064A\u0660-\u0669 ]+$/)
		.required()
		.messages(cases),
	CompName: Joi.string().min(2).max(50).required().messages(cases),
	CommRegNo: Joi.string().min(2).max(50).required().messages(cases),
	IndusRegNo: Joi.string().min(2).max(50).required().messages(cases),
	TaxCardNo: Joi.string().min(9).max(9).required().messages(cases),
	CompStreet: Joi.string().min(2).max(50).required().messages(cases),
	CompBuilding: Joi.string().max(50).required().messages(cases),
	CompCityID: Joi.string().required().messages(cases),
	CompGovID: Joi.string().required().messages(cases),
	CompTypeID: Joi.string().required().messages(cases),
	License_type_code: Joi.string().required().messages(cases),
}).options({ stripUnknown: true, abortEarly: false })
