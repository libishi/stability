export const MANU_DATASOURCE = {
	CompanyDetID: {
		query: 'CompanyDetID {CompName}',
		label: 'Company',
	},
	ManufactureID: {
		query: 'ManufactureID',
		label: 'ID',
	},
	TypeID: {
		query: 'TypeID {ManufactureTypeName}',
		label: 'Type',
	},
	CountryID: {
		query: 'CountryID {name}',
		label: 'Country',
	},
	LocGovID: {
		query: 'LocGovID {GovName}',
		label: 'Gov',
	},

	LocCityID: {
		query: 'LocCityID {CityName}',
		label: 'City',
	},
	ArabicName: { query: 'ArabicName', label: 'Arabic Name' },
	EnglishName: { query: 'EnglishName', label: 'English Name' },
	LicenseNo: { query: 'LicenseNo', label: 'License No.' },
	EnglishAdress: { query: 'EnglishAdress', label: 'EnglishAdress' },
	LocFactoryArea: { query: 'LocFactoryArea', label: 'Area' },
	LocBlock: { query: 'LocBlock', label: 'Block' },
	LocSubBlock: { query: 'LocSubBlock', label: 'Sub-Block' },
	LocTel: { query: 'LocTel', label: 'Tel' },
	LocFax: { query: 'LocFax', label: 'Fax' },
	IsPresent: { query: 'IsPresent', label: 'Is Present' },
}

export const PRODUCTION_DATASOURCE = {
	CompanyDetID: {
		query: 'CompanyDetID {CompName}',
		label: 'Company',
	},
	ManufactureID: {
		query: 'ManufactureID {EnglishName}',
		label: 'Manufacturer',
	},

	Name: { query: 'Name', label: 'Area Name' },

	isOpen: { query: 'isOpen', label: 'is Working?' },
	ManuProdLineTypeID: {
		query: 'ManuProdLineTypeID{ManuProdLineTypeName}',
		label: 'Area Type',
	},
	ManuProdLineAreaID: {
		query: 'ManuProdLineAreaID {ManuProdLineAreaName}',
		label: 'Area Category',
	},
	CloseReason: {
		query: 'CloseReason {Description}',
		label: 'Close Reason',
	},
	LicenseDate: { query: 'LicenseDate', label: 'LicenseDate' },
	CloseDate: { query: 'CloseDate', label: 'Close Date' },

	R_Lines: {
		query: 'R_Lines{Name LineID}',
		label: 'Production Lines',
	},
}

export const labels = {
	CompAName: 'Arabic Name',
	CompName: 'English Name',
	'CompTypeID{CompTypeName}': 'Company Type',
	CommRegNo: 'Comm. Reg. No.',
	CommRegIssuDate: 'Comm. Reg. Issue Date',
	CommRegExpireDate: 'Comm. Reg. Expire Date',
	TaxCardNo: 'Tax Card No.',
	TaxCardIssuDate: 'Tax Card Issue Date',
	TaxCardExpireDate: 'Tax Card Expiry Date',
	IndusRegNo: 'Indust. Reg. No.',
	IndusRegIssuDate: 'Indust. Reg. Issue Date',
	IndusRegExpireDate: 'Indust. Reg. Expiry Date',
	CompIsSameAddress: 'CompIsSameAddress',
	'CompGovID{GovName}': 'Governate',
	'CompCityID{CityName}': 'City',
	CompStreet: 'Street',
	CompBuilding: 'Building',
	CompFloor: 'Floor',
	CompAppartment: 'Appartment',
	LawNo: 'Law No.',
	LawDetails: 'Law Details',
	'License_type_code{License_Type}': 'License Type',
	License_facility: 'License Facility',
	Under_Constraction: 'Under Construction',
	isactive: 'Is Active',
	'mergedwithcomp{CompName}': 'Merged With',
	UserDelivery: 'User Delivered',
	MergReason: 'Merge Reason',
	Deactivate_Reasone: 'Deactivate Reasone',
	Deactivate_Date: 'Deactivate Date',
	IsAdmin: 'Is Admin',
	DeattivateReason: 'DeattivateReason',
	'isparent{CompName}': 'Is Parent',
	ismain: 'Is Main',
	TollCardNo: 'Toll Card No.',
	CommRegType: 'Commercial Reg. Type',
	toll_licensetype: 'Toll License Status',
	toll_licenseDate: 'Toll License Date',
}

export const TRADE_LABELS = {
	Trade_name: 'Trade Name',
	'LicenseStatus{Status}': 'License Status',
	Drug_license_number: 'License Number',
	'License_type_code{Local_Imported Type_of_license}': 'License Type',
	Drug_registration_date: 'Registration Date',
	Drug_registration_expiration_date: 'Registration Expiry Date',
	Strength_value: 'Strength Value',
	'Strength_unit_code{Strength_unit}': 'Strength Unit',
	'Dosage_form_code{Dosage_form,Dosage_form_code,Dosage_FormArabic}':
		'Dosage Form',
	'Pack_unit{Pack_unit}': 'Pack Unit',
	ApprovedPacks: 'Approved Packs',
	'Company_code{CompName}': 'Company',
	'Licensor_code{CompName}': 'Licensor',
	'PriceStatus_code{Status}': 'Price Status',
	ShelfLife: 'ShelfLife',
	IngredientsDescription: 'Ingredients Description',
	Notes: 'Notes',
	'DrugType{Type}': 'Drug Type',
	ValiDated: 'ValiDated',
	StaffKey: 'Staff Key',
	'MarketType{MarketType}': 'Market Type',
	RegFlag: 'RegFlag',
	LicFlag: 'LicFlag',
	TradeNameOld: 'TradeNameOld',
	'Route{RouteEName RouteAName}': 'Route',
	RegUnderReg: 'RegUnderReg',
	Drug_license_number_back: 'Drug_license_number_back',
	Compcodeback: 'Compcodeback',
	UnderRegType: 'UnderRegType',
	tradecodelink: 'tradecodelink',
	isupDated: 'isupDated',
	isnew: 'isnew',
	userid: 'userid',
	iscombopack: 'Is ComboPack',
	Stabilitycomdate: 'Stability com. date',
	Physicalcharac: 'Physicalcharac',
	StoreCharac: 'StoreCharac',
	expired: 'expired',
	TradeDetails: 'TradeDetails',
	NewPackUnit: 'NewPackUnit',
	islinking: 'islinking',
	BoxRequestid: 'BoxRequestid',
	ApprovNameA: 'ApprovNameA',
	inactive: 'inactive',
	cancel_reason: 'Cancel Reason',
	ProductNote: 'ProductNote',
	OldRegNo: 'OldRegNo',
	LinkingAction: 'LinkingAction',
	ShelfLifeInfo: 'ShelfLifeInfo',
	MinDecree600: 'MinDecree600',
	'ApplicantFactoryID{EnglishName}': 'ApplicantFactoryID',
}

export const PERSONS_DATASOURCE = {
	CompanyDetID: {
		query: 'CompanyDetID {CompName}',
		label: 'Company',
	},
	ManufactureID: {
		query: 'ManufactureID {EnglishName}',
		label: 'Manufacturer',
	},

	Email: { query: 'Email', label: 'Email' },
	Mobile: { query: 'Mobile', label: 'Mobile' },
	NationalID: { query: 'NationalID', label: 'National ID' },
	LicenseNo: { query: 'LicenseNo', label: 'License No.' },
	SyndicateNo: { query: 'SyndicateNo', label: 'Syndicate No.' },

	TypeID: {
		query: 'TypeID {PersonsTypeName}',
		label: 'Person Type',
	},

	HaveSignRight: {
		query: 'HaveSignRight',
		label: 'Have Sign Right?',
	},
	ispartener: { query: 'ispartener', label: 'is Partener?' },
	IsCEO: { query: 'IsCEO', label: 'Is CEO?' },
}

export const manuData = []

for (let n in MANU_DATASOURCE) {
	manuData.push({
		key: MANU_DATASOURCE[n].query,
		title: MANU_DATASOURCE[n].label,
	})
}

export const productionData = []

for (let n in PRODUCTION_DATASOURCE) {
	productionData.push({
		key: PRODUCTION_DATASOURCE[n].query,
		title: PRODUCTION_DATASOURCE[n].label,
	})
}

export const PersonTransferData = []

for (let n in PERSONS_DATASOURCE) {
	PersonTransferData.push({
		key: PERSONS_DATASOURCE[n].query,
		title: PERSONS_DATASOURCE[n].label,
	})
}

export const mockData = []

for (let n in labels) {
	mockData.push({
		key: n,
		title: labels[n],
	})
}

export const mockshaData = []

for (let n in TRADE_LABELS) {
	mockshaData.push({
		key: n,
		title: TRADE_LABELS[n],
	})
}

export const initialStateCompany = {
	loading: false,

	targetKeys: [],
	selectedKeys: [],
	alert: false,

	CompTypeID: [],
	License_type_code: [],
	CommRegType: [],
	toll_licensetype: null,
	CompGovID: [],
	CompCityID: [],

	Under_Constraction: null,
	ismain: null,
	isparent: null,
	isactive: null,
	mergedwithcomp: null,

	CommRegIssuDate: [null, null],
	CommRegExpireDate: [null, null],
	TaxCardIssuDate: [null, null],
	TaxCardExpireDate: [null, null],
	IndusRegIssuDate: [null, null],
	IndusRegExpireDate: [null, null],
	Deactivate_Date: [null, null],
	toll_licenseDate: [null, null],
}

export const initialStateTrade = {
	loading: false,

	targetKeys: [],
	selectedKeys: [],
	alert: false,

	TradeCode: null,
	RegHumanDrugLID: null,
	Drug_license_number: null,
	License_type_code: null,
	LicenseStatus: null,
	Trade_name: null,
	Strength_value: null,
	Strength_unit_code: null,
	Dosage_form_code: null,
	Pack_unit: null,
	ApprovedPacks: null,
	Company_code: null,
	Licensor_code: null,
	PriceStatus_code: null,
	ShelfLife: null,
	IngredientsDescription: null,
	Notes: null,
	DrugType: null,
	ValiDated: null,
	StaffKey: null,
	MarketType: null,
	RegFlag: null,
	LicFlag: null,
	TradeNameOld: null,
	Route: null,
	RegUnderReg: null,
	Compcodeback: null,
	UnderRegType: null,
	tradecodelink: null,
	isupDated: null,
	isnew: null,
	userid: null,
	iscombopack: null,
	Physicalcharac: null,
	StoreCharac: null,
	expired: null,
	TradeDetails: null,
	NewPackUnit: null,
	islinking: null,
	BoxRequestid: null,
	ApprovNameA: null,
	inactive: null,
	cancel_reason: null,
	ProductNote: null,
	OldRegNo: null,
	LinkingAction: null,
	ShelfLifeInfo: null,
	MinDecree600: null,
	ApplicantFactoryID: null,

	Drug_registration_date: [null, null],
	Drug_registration_expiration_date: [null, null],
	Stabilitycomdate: [null, null],
}

// const moksha = [
// 	'Drug_license_number',
// 	'License_type_code',
// 	'Drug_registration_date',
// 	'Drug_registration_expiration_date',
// 	'LicenseStatus',
// 	'Trade_name',
// 	'Strength_value',
// 	'Strength_unit_code',
// 	'Dosage_form_code',
// 	'Pack_unit',
// 	'ApprovedPacks',
// 	'Company_code',
// 	'Licensor_code',
// 	'PriceStatus_code',
// 	'ShelfLife',
// 	'IngredientsDescription',
// 	'Notes',
// 	'DrugType',
// 	'ValiDated',
// 	'StaffKey',
// 	'MarketType',
// 	'RegFlag',
// 	'LicFlag',
// 	'TradeNameOld',
// 	'Route',
// 	'RegUnderReg',
// 	'Drug_license_number_back',
// 	'Compcodeback',
// 	'UnderRegType',
// 	'tradecodelink',
// 	'isupDated',
// 	'isnew',
// 	'userid',
// 	'iscombopack',
// 	'Stabilitycomdate',
// 	'Physicalcharac',
// 	'StoreCharac',
// 	'expired',
// 	'TradeDetails',
// 	'NewPackUnit',
// 	'islinking',
// 	'BoxRequestid',
// 	'ApprovNameA',
// 	'inactive',
// 	'cancel_reason',
// 	'ProductNote',
// 	'OldRegNo',
// 	'LinkingAction',
// 	'ShelfLifeInfo',
// 	'MinDecree600',
// 	'ApplicantFactoryID',
// ]

// export const mockData = []
// for (let i = 0; i < moks.length; i++) {
// 	mockData.push({
// 		key: i,
// 		title: moks[i],
// 	})
// }
// console.log('mockData', mockData)

// export const mockshaData = []
// for (let i = 0; i < moksha.length; i++) {
// 	mockshaData.push({
// 		key: moksha[i],
// 		title: moksha[i],
// 	})
// }

//  export const moks = [
// 	'CompAName',
// 	'CompName',
// 	'CommRegNo',
// 	'CommRegIssuDate',
// 	'CommRegExpireDate',
// 	'TaxCardNo',
// 	'TaxCardIssuDate',
// 	'TaxCardExpireDate',
// 	'IndusRegNo',
// 	'IndusRegIssuDate',
// 	'IndusRegExpireDate',
// 	'CompIsSameAddress',
// 	'CompGovID',
// 	'CompCityID',
// 	'CompStreet',
// 	'CompBuilding',
// 	'CompFloor',
// 	'CompAppartment',
// 	'LawNo',
// 	'LawDetails',
// 	'License_type_code',
// 	'License_facility',
// 	'Under_Constraction',
// 	'isactive',
// 	'mergedwithcomp',
// 	'UserDelivery',
// 	'MergReason',
// 	'Deactivate_Reasone',
// 	'Deactivate_Date',
// 	'IsAdmin',
// 	'DeattivateReason',
// 	'isparent',
// 	'ismain',
// 	'TollCardNo',
// 	'CommRegType',
// 	'toll_licensetype',
// 	'toll_licenseDate',
// ]
