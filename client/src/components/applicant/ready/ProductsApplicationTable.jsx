import { Table } from 'antd'
import { columns, data } from './Repo'

export const ProductsApplicationTable = () => {
  return <Table columns={columns} dataSource={data} />
}
