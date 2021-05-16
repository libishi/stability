import * as Yup from 'yup'

import {
	validateCompanyUser,
	validateEDAUser,
	validateLogin,
	validateAudiTrails,
} from './reguserform'

import {
	validateNewCompany,
	validateMerge,
	validateCreateMain,
	validateCreateManufacturer,
} from './companyform'

export const Validator = {
	validateCompanyUser,
	validateEDAUser,
	validateLogin,
	validateAudiTrails,
	validateNewCompany,
	validateMerge,
	validateCreateMain,
	validateCreateManufacturer,
}
