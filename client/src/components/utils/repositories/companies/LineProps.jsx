import {
	GET_AREA_BY_MANUFACTURER,
	GET_LINE_BY_AREA,
	GET_CLOSE_REASON,
	GET_SUBLINE_BY_LINE,
	GET_PRODLINE,
	GET_PRODLINE_SUB,
	GET_PRODLINE_AREA,
	GET_PRODLINE_TYPE,
	GET_MACHINE_BY_MANUFACTURER,
} from '../../graphql/queries/ProductionLineQueries'

import {
	GET_TIMEUNITS,
	GET_PACKUNIT,
} from '../../graphql/queries/UnitsQueries'

export const LineSelectProps = {
	AreaID: {
		name: 'AreaID',
		type: true,
		gqlQuery: GET_AREA_BY_MANUFACTURER,
		gqlResolver: 'getManufacturerArea',
		va: 'AreaID',
		txt: 'Name',
		searchLabel: 'ManufactureID',
		placeholder: 'Select Manufacturer Area',
	},

	LineID: {
		name: 'LineID',
		gqlQuery: GET_LINE_BY_AREA,
		gqlResolver: 'getManufacturerLine',
		va: 'LineID',
		txt: 'Name',
		searchLabel: 'AreaID',
		placeholder: 'Select Production Line',
		ddr: true,
	},

	SubLineID: {
		name: 'SubLineID',
		type: true,
		gqlQuery: GET_SUBLINE_BY_LINE,
		gqlResolver: 'getManufacturerSubLine',
		va: 'SubLineID',
		txt: 'Name',
		searchLabel: 'LineID',
		placeholder: 'Select Production Sub-Line',
		ddr: true,
	},

	ManuProdLineTypeID: {
		label: 'Type',
		name: 'ManuProdLineTypeID',
		type: true,
		gqlQuery: GET_PRODLINE_TYPE,
		gqlResolver: 'getAllManuProdLineType',
		va: 'ManuProdLineTypeID',
		txt: 'ManuProdLineTypeName',
	},

	ManuProdLineAreaID: {
		label: 'Area',
		name: 'ManuProdLineAreaID',
		type: true,
		gqlQuery: GET_PRODLINE_AREA,
		gqlResolver: 'getAllManuProdLineArea',
		va: 'ManuProdLineAreaID',
		txt: 'ManuProdLineAreaName',
	},

	ProductionLineID: {
		label: 'Line Category',
		name: 'ProductionLineID',
		type: true,
		gqlQuery: GET_PRODLINE,
		gqlResolver: 'getAllProductionLine',
		va: 'ProductionLineID',
		txt: 'ProductionLineName',
	},

	ProductionSubLineID: {
		label: 'SubLine Category',
		name: 'ProductionSubLineID',
		type: true,
		gqlQuery: GET_PRODLINE_SUB,
		gqlResolver: 'getAllProductionSubLine',
		va: 'ProductionSubLineID',
		txt: 'ProductionSubLineName',
	},

	LicenseDate: {
		label: 'License Date',
		name: 'LicenseDate',
	},

	isOpen: {
		label: 'is Open?',
		name: 'isOpen',
		type: 'radio',
	},

	CloseDate: {
		label: 'CloseDate',
		name: 'CloseDate',
	},

	CloseReason: {
		label: 'Close Reason',
		name: 'CloseReason',
		type: true,
		gqlQuery: GET_CLOSE_REASON,
		gqlResolver: 'getAllProdLineReason',
		va: 'SysKey',
		txt: 'Description',
	},
}

export const MachineSelectProps = {
	MachineID: {
		name: 'MachineID',
		type: true,
		gqlQuery: GET_MACHINE_BY_MANUFACTURER,
		gqlResolver: 'getManufacturerMachine',
		va: 'MachineID',
		txt: 'Machine_Name',
		searchLabel: 'ManufactureID',
		placeholder: 'Select Machine',
		ddr: true,
	},

	Capacity_Packunit: {
		// name: 'Capacity_Packunit',
		// type: 'Capacity_Packunit',
		label: 'Capacity Packunit',
		gqlQuery: GET_PACKUNIT,
		gqlResolver: 'getAllPackunit',
		va: 'Sys_Key',
		txt: 'Pack_unit',
		placeholder: 'Select Pack Unit',
	},

	Time_Unit: {
		// name: 'Time_Unit',
		// type: 'Time_Unit',
		label: 'Time Unit',
		gqlQuery: GET_TIMEUNITS,
		gqlResolver: 'getAllTimeUnits',
		va: 'Sys_Key',
		txt: 'Name',
		placeholder: 'Select Time Unit',
	},
}
