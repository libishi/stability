import {
	GET_COMP_SEARCH,
	GET_COMPTYPES,
	GET_CITIES,
	GET_Comm_Type,
	GET_CompLicenseType,
	GET_GOVS,
	GET_Comm_Merge_Type,
} from '../../graphql/AllGQLs'

// import { GET_COMP_SEARCH } from '../../graphql/queries/CompaniesQueries'

export const CompanyDetID_Search = {
	mode: 'single',
	gqlQuery: GET_COMP_SEARCH,
	gqlResolver: 'companySearch',
	va: 'CompanyDetID',
	txt: 'CompName',
	searchLabel: 'text',
	placeholder: 'enter company name',
	required: true,
}

export const InputProps = {
	CompName: { name: 'CompName', label: 'English Name' },
	CompAName: { name: 'CompAName', label: 'Arabic Name' },
	CommRegNo: { name: 'CommRegNo', label: 'Comm. Reg. No.' },
	TaxCardNo: { name: 'TaxCardNo', label: 'Tax Card No.' },
	IndusRegNo: { name: 'IndusRegNo', label: 'Indust. Reg. No.' },
	CompStreet: { name: 'CompStreet', label: 'Street' },
	CompBuilding: { name: 'CompBuilding', label: 'Building' },
	CompFloor: { name: 'CompFloor', label: 'Floor' },
	CompAppartment: { name: 'CompAppartment', label: 'Appartment' },
	LawNo: { name: 'LawNo', label: 'Law No.' },
	LawDetails: { name: 'LawDetails', label: 'Law Details' },
	License_facility: {
		name: 'License_facility',
		label: 'License Facility',
	},
	Under_Constraction: {
		name: 'Under_Constraction',
		label: 'Under Construction',
	},
	isactive: { name: 'isactive', label: 'Is Active' },
	TollCardNo: { name: 'TollCardNo', label: 'Toll Card No.' },
}

export const MergeProps = {
	gqlQuery: GET_Comm_Merge_Type,
	gqlResolver: 'comm_merg_type',
	va: 'SysKey',
	txt: 'MergType',
	delay: 0.2,
	required: true,
}

export const BasicProps = {
	CompTypeID_Props: {
		label: 'Company Type',
		name: 'CompTypeID',
		gqlQuery: GET_COMPTYPES,
		gqlResolver: 'comptype',
		va: 'CompTypeID',
		txt: 'CompTypeName',
		delay: 0.2,
		required: true,
	},

	CommType_Props: {
		label: 'Commercial Reg. Type',
		name: 'CommRegType',
		gqlQuery: GET_Comm_Type,
		gqlResolver: 'comm_type',
		va: 'sys_key',
		txt: 'Type',
		delay: 0.2,
	},

	License_type_code_Props: {
		label: 'Company License Type',
		name: 'License_type_code',
		gqlQuery: GET_CompLicenseType,
		gqlResolver: 'complicensetype',
		va: 'sys_key',
		txt: 'License_Type',
		delay: 0.2,
		required: true,
	},

	Governate_Props: {
		label: 'Governate',
		name: 'CompGovID',
		gqlQuery: GET_GOVS,
		gqlResolver: 'government',
		va: 'GovID',
		txt: 'GovName',
		delay: 0.2,
		required: true,
	},

	City_Props: {
		label: 'City',
		name: 'CompCityID',
		gqlQuery: GET_CITIES,
		gqlResolver: 'city',
		va: 'CityID',
		txt: 'CityName',
		delay: 0.4,
		required: true,
	},
}

export const SecondaryProps = {
	toll_licensetype_Props: {
		label: 'Toll License Status',
		name: 'toll_licensetype',
		keyValues: [
			{ value: 1, text: 'License' },
			{ value: 2, text: 'Under-License' },
		],
		delay: 0.4,
	},

	isactive_Props: {
		label: 'The Account Is Active?',
		name: 'isactive',
		keyValues: [
			{ value: true, text: 'Yes' },
			{ value: false, text: 'No' },
		],
		delay: 0.4,
	},

	mergedwithcomp_Props: {
		label: 'Is Merged?',
		name: 'mergedwithcomp',
		keyValues: [
			{ value: true, text: 'Yes' },
			{ value: false, text: 'No' },
		],
		delay: 0.4,
	},

	Under_Constraction_Props: {
		label: 'Is Under Construction?',
		name: 'Under_Constraction',
		keyValues: [
			{ value: true, text: 'Yes' },
			{ value: false, text: 'No' },
		],
		delay: 0.6,
	},

	ismain_Props: {
		label: 'Is MAIN inistitution?',
		name: 'ismain',
		keyValues: [{ value: 1, text: 'Yes' }],
		delay: 0.6,
	},

	isparent_Props: {
		label: 'Is RELATED to MAIN?',
		name: 'isparent',
		keyValues: [
			{ value: true, text: 'Yes' },
			{ value: false, text: 'No' },
		],
		delay: 0.6,
	},
}

export const DateProps = {
	CommRegIssuDate_Props: {
		label: 'Comm. Reg. Issue Date',
		name: 'CommRegIssuDate',
		delay: 0.6,
	},

	CommRegExpireDate_Props: {
		label: 'Comm. Reg. Expiry Date',
		name: 'CommRegExpireDate',
		delay: 0.6,
	},

	TaxCardIssuDate_Props: {
		label: 'Tax Card Issue Date',
		name: 'TaxCardIssuDate',
		delay: 0.8,
	},

	TaxCardExpireDate_Props: {
		label: 'Tax Card Expiry Date',
		name: 'TaxCardExpireDate',
		delay: 0.8,
	},

	IndusRegIssuDate_Props: {
		label: 'Indust. Reg. Issue Date',
		name: 'IndusRegIssuDate',
		delay: 0.8,
	},

	IndusRegExpireDate_Props: {
		label: 'Indust. Reg. Expiry Date',
		name: 'IndusRegExpireDate',
		delay: 0.8,
	},

	Deactivate_Date_Props: {
		label: 'Deactivate Date',
		name: 'Deactivate_Date',
		delay: 1,
	},

	toll_licenseDate_Props: {
		label: 'Toll License Date',
		name: 'toll_licenseDate',
		delay: 1,
	},
}
