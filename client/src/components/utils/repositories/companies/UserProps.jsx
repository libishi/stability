export const initialStateEmployee = {
	CompanyDetID: null,
	ManufactureID: null,
	FirstName: '',
	MiddleName: '',
	SureName: '',
	NationalID: '',
	Mobile: '',
	Email: '',

	ispartener: false,
	HaveSignRight: false,
	IsCEO: false,
	LicenseNo: '',
	SyndicateNo: '',
}

export const initialStateCU = {
	EntityID: '',
	Firstname: '',
	Middlename: '',
	Lastname: '',
	NationalID: '',
	Mobile: '',
	Email: '',
	Password: '',
	isActive: false,
	Permissions: [],
	targetKeys: [],
	selectedKeys: [],
	isCompany: true,
}

export const initialStateEDAU = {
	Username: '',
	Firstname: '',
	Middlename: '',
	Lastname: '',
	NationalID: '',
	Mobile: '',
	Email: '',
	Password: '',
	isActive: false,
	Permissions: [],
	targetKeys: [],
	selectedKeys: [],
}

export const statesEDAU = {
	customerror: null,
	userexists: false,
	confirmed: false,
	result_status: 'success',
	result_title: '',
	result_subTitle: '',
}

export const EDAResultState = {
	confirmed: false,
	result_status: 'success',
	result_title: '',
	result_subTitle: '',
}
