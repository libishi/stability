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
    title: 'النوع ',
    dataIndex: 'type',
    key: 'type',
  },

  // {
  //   title: 'إسم المصنع',
  //   dataIndex: 'factory',
  //   key: 'factory',
  // },
  // {
  //   title: 'Comments for Developers',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (tags) => (
  //     <>
  //       {tags.map((tag) => {
  //         // let color = tag.length > 5 ? 'geekblue' : 'green'
  //         const text = (
  //           <span>تظهر للمستخدم في حالة الحصول على إخطار مبدئي فقط</span>
  //         )
  //         return tag === 'معجلة' ? (
  //           <Button>{tag.toUpperCase()}</Button>
  //         ) : (
  //           <Space>
  //             <Tooltip placement="topLeft" title={text}>
  //               <Button>{tag.toUpperCase()}</Button>
  //             </Tooltip>
  //           </Space>
  //         )
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
    // tags: ['معجلة', 'طويلة المدى'],
  },
  {
    key: '2',
    id: '2',
    name: 'DEF',
    type: 'Human Re-Reg 296',
    factory: 'Factory 2',
    // tags: ['طويلة المدى'],
  },
  {
    key: '3',
    id: '3',
    name: 'GHI',
    type: 'Human Reg 425',
    factory: 'Factory 3',
    // tags: ['nice', 'developer'],
  },

  {
    key: '4',
    id: '4',
    name: 'JKL',
    type: 'Human Re-Reg 425',
    factory: 'Factory 3',
    // tags: ['nice', 'developer'],
  },

  {
    key: '5',
    id: '5',
    name: 'MNO',
    type: 'VET Reg',
    factory: 'Factory 7',
    // tags: ['nice', 'developer'],
  },

  {
    key: '6',
    id: '6',
    name: 'PQR',
    type: 'VET Re-Reg',
    factory: 'Factory 7',
    // tags: ['nice', 'developer'],
  },

  {
    key: '7',
    id: '7',
    name: 'STU',
    type: 'SUPPL Reg',
    factory: 'Factory 11',
    // tags: ['nice', 'developer'],
  },

  {
    key: '8',
    id: '8',
    name: 'VWX',
    type: 'SUPPL Re-Reg',
    factory: 'Factory 11',
    // tags: ['nice', 'developer'],
  },

  // {
  //   key: '9',
  //   name: 'YZA',
  //   type: '',
  //  Variation',
  //   factory: 'Factory 11',
  // (tags: ['nice', 'developer']),
  // },
]
