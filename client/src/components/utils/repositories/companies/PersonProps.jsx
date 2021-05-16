import { GET_ALL_PERSONS_TYPES } from '../../graphql/AllGQLs'

export const PersonsInputProps = {
	FirstName: { name: 'FirstName', label: 'FirstName' },
	MiddleName: { name: 'MiddleName', label: 'MiddleName' },
	SureName: { name: 'SureName', label: 'SureName' },
	PersName: { name: 'PersName', label: 'PersName' },
	EnglishName: { name: 'EnglishName', label: 'EnglishName' },
	Email: { name: 'Email', label: 'Email' },
	Mobile: { name: 'Mobile', label: 'Mobile' },
	LandLine: { name: 'LandLine', label: 'LandLine' },
	Extension: { name: 'Extension', label: 'Extension' },
	NationalID: { name: 'NationalID', label: 'NationalID' },
	LicenseNo: { name: 'LicenseNo', label: 'LicenseNo' },
	SyndicateNo: { name: 'SyndicateNo', label: 'SyndicateNo' },
}

export const PersonsDateProps = {
	FromDate: { name: 'FromDate', label: 'FromDate' },
	ToDate: { name: 'ToDate', label: 'ToDate' },
	Syndicate_enddate: {
		name: 'Syndicate_enddate',
		label: 'Syndicate_enddate',
	},
	gave_date: { name: 'gave_date', label: 'gave_date' },
}

export const PersonsSelectProps = {
	TypeID: {
		label: 'Type',
		name: 'TypeID',
		type: true,
		gqlQuery: GET_ALL_PERSONS_TYPES,
		gqlResolver: 'getAllPersonsTypes',
		va: 'PersonsTypeID',
		txt: 'PersonsTypeName',
	},
	CompanyDetID: {
		label: 'Company',
		name: 'CompanyDetID',
		// gqlQuery: GET_ALL_PERSONS_TYPES,
		// gqlResolver: 'getAllPersonsTypes',
		va: 'CompanyDetID',
		txt: 'CompName',
	},
	ManufactureID: {
		label: 'Manufacturer',
		name: 'ManufactureID',
		// gqlQuery: GET_ALL_PERSONS_TYPES,
		// gqlResolver: 'getAllPersonsTypes',
		va: 'ManufactureID',
		txt: 'EnglishName',
	},
}
