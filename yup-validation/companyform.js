import * as Yup from 'yup'

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

export const validateCreateManufacturer = Yup.object().shape({
	ArabicName: Yup.string()
		.matches(/^[\u0621-\u064A\u0660-\u0669 ]+$/, 'Arabic only')
		.required('Required'),
	EnglishName: Yup.string().required('Required'),
	LicenseNo: Yup.string().required('Required'),
	EnglishAdress: Yup.string().required('Required'),
	LocFactoryArea: Yup.string().required('Required'),
	LocBlock: Yup.string().required('Required'),
	LocSubBlock: Yup.string().required('Required'),
	LocTel: Yup.string().required('Required'),
	LocFax: Yup.string().required('Required'),
	IsPresent: Yup.string().required('Required'),

	CompanyDetID: Yup.string().required('Required'),
	TypeID: Yup.string().required('Required'),
	CountryID: Yup.string().required('Required'),
	LocGovID: Yup.string().required('Required'),
	LocCityID: Yup.string().required('Required'),
	TypeID: Yup.string().required('Required'),
})

export const validateMerge = Yup.object().shape({
	MainID: Yup.string().required('Required'),
	ChildID: Yup.string().required('Required'),
	MergeR: Yup.string().required('Required'),
})

export const validateCreateMain = Yup.object().shape({
	MainID: Yup.string().required('Required'),
	ChildID: Yup.string().required('Required'),
})
