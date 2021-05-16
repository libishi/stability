export const EDAUser_Props = {
	Username: {
		md: 12,
		name: 'Username',
		label: 'Username',
		// defaultOpen: false,
		required: true,
		hasFeedback: true,
	},

	Email: {
		md: 12,
		name: 'Email',
		// type: true,
		label: 'Email',
		required: true,
		// defaultOpen: false,
		hasFeedback: true,
		autoComplete: 'new-password',
	},

	Password: {
		md: 12,
		name: 'Password',
		label: 'Password',
		required: true,
		hasFeedback: true,
		autoComplete: 'new-password',
	},

	Firstname: {
		md: 8,
		name: 'Firstname',
		// type: true,
		label: 'Firstname',
		required: true,
		hasFeedback: true,
	},

	Middlename: {
		md: 8,
		name: 'Middlename',
		// type: true,
		label: 'Middlename',
		required: true,
		hasFeedback: true,
	},

	Lastname: {
		md: 8,
		name: 'Lastname',
		// type: true,
		label: 'Lastname',
		required: true,
		hasFeedback: true,
	},

	NationalID: {
		md: 12,
		name: 'NationalID',
		type: true,
		label: 'NationalID',
		required: true,
		// defaultOpen: false,
		hasFeedback: true,
	},

	Mobile: {
		md: 8,
		name: 'Mobile',
		label: 'Mobile',
		required: true,
		hasFeedback: true,
	},
}
