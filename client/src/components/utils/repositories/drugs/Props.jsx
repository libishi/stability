import {
	GET_Type_of_license,
	GET_Dosage_form,
	GET_LicenseStatus,
	GET_PriceStatus,
	GET_STRENGTHUNIT,
	GET_DrugRoutes,
	GET_DrugTypes,
	GET_MarketType,
	GET_PACKUNIT,
	GET_ITEMUNIT,
} from '../../graphql/AllGQLs'

export const BasicProps = {
	StrengthUnit_Props: {
		label: 'Strength Unit',
		name: 'Strength_unit_code',
		gqlQuery: GET_STRENGTHUNIT,
		val: 'strengthunitresult',
		va: 'Sys_Key',
		txt: 'Strength_unit',
		gqlResolver: 'getAllStrengthunit',
		delay: 0.2,
	},

	LicType_Props: {
		label: 'License Type',
		name: 'License_type_code',
		gqlQuery: GET_Type_of_license,
		val: 'DrugLicenseTyperesult',
		va: 'Sys_Key',
		txt: 'Type_of_license',
		gqlResolver: 'type_of_license',
		delay: 0.2,
	},

	LicStatus_Props: {
		label: 'License Status',
		name: 'LicenseStatus',
		gqlQuery: GET_LicenseStatus,
		val: 'LicenseStatusresult',
		va: 'Sys_Key',
		txt: 'Status',
		gqlResolver: 'licensestatus',
		delay: 0.2,
	},

	DosageForm_Props: {
		label: 'Dosage Form',
		name: 'Dosage_form_code',
		gqlQuery: GET_Dosage_form,
		val: 'doseresult',
		va: 'Sys_Key',
		txt: 'Dosage_form',
		gqlResolver: 'dosage_form',
		delay: 0.4,
	},

	PriceStatus_Props: {
		label: 'Pricing Status',
		name: 'PriceStatus_code',
		gqlQuery: GET_PriceStatus,
		val: 'priceresult',
		va: 'Sys_Key',
		txt: 'Status',
		gqlResolver: 'priceStatus',
		delay: 0.4,
	},

	DrugRoutes_Props: {
		label: 'Drug Routes',
		name: 'Route',
		gqlQuery: GET_DrugRoutes,
		val: 'drugRoutesresult',
		va: 'SysKey',
		txt: 'RouteEName',
		gqlResolver: 'drugRoutes',
		delay: 0.4,
	},

	MarketType_Props: {
		label: 'Market Type',
		name: 'MarketType',
		gqlQuery: GET_MarketType,
		val: 'MarketTyperesult',
		va: 'SysKey',
		txt: 'MarketType',
		gqlResolver: 'marketType',
		delay: 0.6,
	},

	DrugTypes_Props: {
		label: 'Drug Types',
		name: 'DrugType',
		gqlQuery: GET_DrugTypes,
		val: 'DrugTypesresult',
		va: 'Sys_Key',
		txt: 'Type',
		gqlResolver: 'drugTypes',
		delay: 0.6,
	},

	PackUnit_Props: {
		label: 'Pack Unit',
		name: 'Pack_unit',
		gqlQuery: GET_PACKUNIT,
		val: 'PackUnitresult',
		va: 'Sys_Key',
		txt: 'Pack_unit',
		gqlResolver: 'getAllPackunit',
		delay: 0.6,
	},

	ItemUnit_Props: {
		label: 'Item Unit',
		name: 'itemunit',
		gqlQuery: GET_ITEMUNIT,
		val: 'itemunitresult',
		va: 'sys_key',
		txt: 'InfoEnglish',
		gqlResolver: 'getAllItemunit',
		delay: 0.8,
	},
}

export const SecondaryProps = {
	RegUnderReg_Props: {
		label: 'Reg/UnderReg',
		name: 'RegUnderReg',
		keyValues: [
			{ value: 1, text: 'Reg' },
			{ value: 0, text: 'Under-Reg' },
		],
		delay: 0.8,
	},

	RegFlag_Props: {
		label: 'Reg Flag',
		name: 'RegFlag',
		keyValues: [
			{ value: 1, text: 'New' },
			{ value: 2, text: 'Renewal' },
		],
		delay: 0.8,
	},

	LicFlag_Props: {
		label: 'License Flag',
		name: 'LicFlag',
		keyValues: [
			{ value: 1, text: 'FINAL' },
			{ value: 2, text: 'TENTATIVE' },
		],
		delay: 1,
	},

	IsComboPack_Props: {
		label: 'Is ComboPack',
		name: 'iscombopack',
		keyValues: [
			{ value: 1, text: 'Yes' },
			{ value: 0, text: 'NO' },
		],
		delay: 1,
	},

	UnderRegType_Props: {
		label: 'Under Reg. Type',
		name: 'UnderRegType',
		keyValues: [
			{ value: 1, text: 'Subcommittee' },
			{ value: 2, text: 'MD370' },
			{ value: 3, text: 'MD296' },
			{ value: 4, text: 'MD297' },
		],
		delay: 1,
	},
}

export const DateProps = {
	Drug_registration_date_Props: {
		label: 'Drug registration Date',
		name: 'Drug_registration_date',
		delay: 1.2,
	},

	Drug_registration_expiration_date_Props: {
		label: 'Registration Expiration Date',
		name: 'Drug_registration_expiration_date',
		delay: 1.2,
	},

	Stabilitycomdate_Props: {
		label: 'Stability Commu. Date',
		name: 'Stabilitycomdate',
		delay: 1.2,
	},
}
