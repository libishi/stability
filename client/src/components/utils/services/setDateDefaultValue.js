// import moment from 'moment'
import dayjs from 'dayjs'

export const dateFormat = 'YYYY/MM/DD'

export const getDate = momdate => {
	const x = dayjs(momdate, dateFormat)
	return x.isValid() ? x : null
}
