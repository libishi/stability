import {
	GET_CITIES,
	GET_GOVS,
	GET_MANSTYPES,
	GET_COUNTRY,
} from '../../graphql/AllGQLs'

export const ManInputProps = {
	ArabicName: { name: 'ArabicName', label: 'Arabic Name' },
	EnglishName: { name: 'EnglishName', label: 'English Name' },
	LicenseNo: { name: 'LicenseNo', label: 'License No.' },
	EnglishAdress: { name: 'EnglishAdress', label: 'EnglishAdress' },
	LocFactoryArea: { name: 'LocFactoryArea', label: 'Area' },
	LocBlock: { name: 'LocBlock', label: 'Block' },
	LocSubBlock: { name: 'LocSubBlock', label: 'Sub-Block' },
	LocTel: { name: 'LocTel', label: 'Tel' },
	LocFax: { name: 'LocFax', label: 'Fax' },
	IsPresent: { name: 'IsPresent', label: 'Is Present' },
}

export const ManDateProps = {
	LicenseYear: { name: 'LicenseYear', label: 'License Year' },
	issuingDate: { name: 'issuingDate', label: 'issuing Date' },
}

export const SelectProps = {
	TypeID: {
		label: 'Type',
		name: 'TypeID',
		gqlQuery: GET_MANSTYPES,
		gqlResolver: 'getAllManufactureTypes',
		va: 'ManufactureTypeID',
		txt: 'ManufactureTypeName',
	},
	// mergedwithcomp: {
	// 	name: 'mergedwithcomp',
	// 	label: 'merged with company',
	// 	gqlResolver: 'Companies',
	// 	va: 'CompanyDetID',
	// 	txt: 'CompName',
	// },
	CountryID: {
		name: 'CountryID',
		label: 'Country',
		type: true,
		gqlQuery: GET_COUNTRY,
		gqlResolver: 'country',
		va: 'CountryID',
		txt: 'name',
	},

	LocGovID: {
		name: 'LocGovID',
		label: 'Governate',
		type: true,
		gqlQuery: GET_GOVS,
		gqlResolver: 'government',
		va: 'GovID',
		txt: 'GovName',
	},

	LocCityID: {
		label: 'City',
		name: 'LocCityID',
		type: true,
		gqlQuery: GET_CITIES,
		gqlResolver: 'city',
		va: 'CityID',
		txt: 'CityName',
	},
}

export const initialStateManufacturer = {
	ArabicName: '',
	EnglishName: '',
	LicenseNo: '',
	EnglishAdress: '',
	LocFactoryArea: '',
	LocBlock: '',
	LocSubBlock: '',
	LocTel: '',
	LocFax: '',
	IsPresent: '',

	LicenseYear: null,
	issuingDate: null,
	GMPinspection: null,

	TypeID: null,

	CountryID: null,
	LocGovID: null,
	LocCityID: null,
}

// UserName: { name: 'UserName', label: 'UserName' },
// ValidityDate: { name: 'ValidityDate', label: 'ValidityDate' },
// UserTypeID: { name: 'UserTypeID', label: 'UserTypeID' },
// UserPassword: { name: 'UserPassword', label: 'UserPassword' },
// Validated: { name: 'Validated', label: 'Validated' },
// user_id: { name: 'user_id', label: 'user_id' },

// UserName: { name: 'UserName', label: 'UserName' },
// ValidityDate: { name: 'ValidityDate', label: 'ValidityDate' },
// GMPinspection: { name: 'GMPinspection', label: 'GMP inspection' },
// UserTypeID: { name: 'UserTypeID', label: 'UserTypeID' },
// UserPassword: { name: 'UserPassword', label: 'UserPassword' },
// Validated: { name: 'Validated', label: 'Validated' },
// user_id: { name: 'user_id', label: 'user_id' },
