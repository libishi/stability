export const isAuthorized = permissions => {
	const rights = JSON.parse(localStorage.getItem('permissions'))

	const perm = []
	Object.values(rights).map(m =>
		perm.push(m.PermissionID?.Permission_Name)
	)
	console.log('perm', perm)
	// console.log('userPermissions', userPermissions)
	const bool = perm.includes(permissions)
	return bool
}
