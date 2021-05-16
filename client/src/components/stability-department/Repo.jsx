// import { Tag, Tooltip, Button, Space } from 'antd'
// import { Tooltip } from '@ant-design/icons'

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/">{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },

  {
    title: 'Company Name',
    dataIndex: 'factory',
    key: 'factory',
  },
  {
    title: 'Employee Name',
    dataIndex: 'employee',
    key: 'employee',
  },
  // {
  //   title: 'Status',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (tags) => (
  //     <>
  //       {tags.map((tag) => {
  //         // let color = tag.length > 5 ? 'geekblue' : 'green'
  //         let color
  //         if (tag === 'Done') {
  //           color = 'green'
  //         } else if (tag === 'Error') {
  //           color = 'red'
  //         } else {
  //           color = 'blue'
  //           tag = 'Processing ...'
  //         }
  //         const text = (
  //           <span>تظهر للمستخدم في حالة الحصول على إخطار مبدئي فقط</span>
  //         )
  //         return tag ? (
  //           <Tooltip placement="topLeft" title={text}>
  //             <Tag color={color}>{tag.toUpperCase()}</Tag>
  //           </Tooltip>
  //         ) : null
  //       })}
  //     </>
  //   ),
  // },
]

export const data = [
  {
    key: '1',
    id: '1',
    name: 'ABC',
    type: 'Human Reg 296',
    factory: 'Factory 1',
    employee: 'Employee abc',
    tags: ['Done'],
  },
  {
    key: '2',
    id: '2',
    name: 'DEF',
    type: 'Human Re-Reg 296',
    factory: 'Factory 2',
    employee: 'Employee abc',
    tags: ['Done'],
  },
  {
    key: '3',
    id: '3',
    name: 'GHI',
    type: 'Human Reg 425',
    factory: 'Factory 3',
    employee: 'Employee abc',
    tags: ['Processing'],
  },

  {
    key: '4',
    id: '4',
    name: 'JKL',
    type: 'Human Re-Reg 425',
    factory: 'Factory 3',
    employee: 'Employee abc',
    tags: [''],
  },

  {
    key: '5',
    id: '5',
    name: 'MNO',
    type: 'VET Reg',
    factory: 'Factory 7',
    employee: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '6',
    id: '6',
    name: 'PQR',
    type: 'VET Re-Reg',
    factory: 'Factory 7',
    employee: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '7',
    id: '7',
    name: 'STU',
    type: 'SUPPL Reg',
    factory: 'Factory 11',
    employee: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '8',
    id: '8',
    name: 'VWX',
    type: 'SUPPL Re-Reg',
    factory: 'Factory 11',
    employee: 'Employee abc',
    tags: ['Done'],
  },
]
/////////////////////////////////////////////////////////////////
export const columnsSecond = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/">{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },

  {
    title: 'Company Name',
    dataIndex: 'factory',
    key: 'factory',
  },
  {
    title: 'First Assessor',
    dataIndex: 'employee',
    key: 'employee',
  },
  {
    title: 'Second Assessor',
    dataIndex: 'employeend',
    key: 'employeend',
  },
]

export const dataSecond = [
  {
    key: '1',
    id: '1',
    name: 'ABC',
    type: 'Human Reg 296',
    factory: 'Factory 1',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: ['Done'],
  },
  {
    key: '2',
    id: '2',
    name: 'DEF',
    type: 'Human Re-Reg 296',
    factory: 'Factory 2',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: ['Done'],
  },
  {
    key: '3',
    id: '3',
    name: 'GHI',
    type: 'Human Reg 425',
    factory: 'Factory 3',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: ['Processing'],
  },

  {
    key: '4',
    id: '4',
    name: 'JKL',
    type: 'Human Re-Reg 425',
    factory: 'Factory 3',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: [''],
  },

  {
    key: '5',
    id: '5',
    name: 'MNO',
    type: 'VET Reg',
    factory: 'Factory 7',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '6',
    id: '6',
    name: 'PQR',
    type: 'VET Re-Reg',
    factory: 'Factory 7',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '7',
    id: '7',
    name: 'STU',
    type: 'SUPPL Reg',
    factory: 'Factory 11',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '8',
    id: '8',
    name: 'VWX',
    type: 'SUPPL Re-Reg',
    factory: 'Factory 11',
    employee: 'Employee abc',
    employeend: 'Employee abc',
    tags: ['Done'],
  },
]

/////////////////////////////////////////////////////////////////
export const columnsEval = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/">{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },

  {
    title: 'Company Name',
    dataIndex: 'factory',
    key: 'factory',
  },
  {
    title: 'Consultant',
    dataIndex: 'consultant',
    key: 'consultant',
  },
]

export const dataEval = [
  {
    key: '1',
    id: '1',
    name: 'ABC',
    type: 'Human Reg 296',
    factory: 'Factory 1',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: ['Done'],
  },
  {
    key: '2',
    id: '2',
    name: 'DEF',
    type: 'Human Re-Reg 296',
    factory: 'Factory 2',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: ['Done'],
  },
  {
    key: '3',
    id: '3',
    name: 'GHI',
    type: 'Human Reg 425',
    factory: 'Factory 3',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: ['Processing'],
  },

  {
    key: '4',
    id: '4',
    name: 'JKL',
    type: 'Human Re-Reg 425',
    factory: 'Factory 3',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: [''],
  },

  {
    key: '5',
    id: '5',
    name: 'MNO',
    type: 'VET Reg',
    factory: 'Factory 7',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '6',
    id: '6',
    name: 'PQR',
    type: 'VET Re-Reg',
    factory: 'Factory 7',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '7',
    id: '7',
    name: 'STU',
    type: 'SUPPL Reg',
    factory: 'Factory 11',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: ['Done'],
  },

  {
    key: '8',
    id: '8',
    name: 'VWX',
    type: 'SUPPL Re-Reg',
    factory: 'Factory 11',
    consultant: 'Consultant abc',
    // employeend: 'Employee abc',
    tags: ['Done'],
  },
]
