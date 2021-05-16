import * as Yup from 'yup'

export const validateEDAUser = Yup.object().shape({
	Username: Yup.string().required('Required'),
	Email: Yup.string().email('Invalid email').required('Required'),
	Password: Yup.string().required('Password is required'),
	PasswordConfirmation: Yup.string()
		.oneOf([Yup.ref('Password'), null], 'Passwords must match')
		.required('Required'),
	Firstname: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	Middlename: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	Lastname: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	NationalID: Yup.string().required('Required'),
	Mobile: Yup.string().required('Required'),
	Permissions: Yup.array().of(Yup.string()).min(1),
})

export const validateCompanyUser = Yup.object().shape({
	EntityID: Yup.string().required('Required'),
	Email: Yup.string().email('Invalid email').required('Required'),
	Password: Yup.string().required('Password is required'),
	PasswordConfirmation: Yup.string()
		.oneOf([Yup.ref('Password'), null], 'Passwords must match')
		.required('Required'),
	Firstname: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	Middlename: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	Lastname: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	NationalID: Yup.string().required('Required'),
	Mobile: Yup.string().required('Required'),
	Permissions: Yup.array().of(Yup.string()).min(1),
})

export const validateLogin = Yup.object().shape({
	Username: Yup.string().required('Required'),
	Password: Yup.string().required('Required'),
})

export const validateAudiTrails = Yup.object()
	.shape({
		UserID: Yup.string(),
		LogDate: Yup.array().of(Yup.date()),
		Action: Yup.array().of(Yup.number()),
	})
	.test(
		'at-least-one-number',
		'you must Choose search criteria! (at least one field)',
		value => value.UserID || value.LogDate || value.Action
	)
