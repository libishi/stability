import { Table } from 'antd'
import { columns, data } from './Repo'

export const ProcessingTable = () => {
  return <Table columns={columns} dataSource={data} />
}
