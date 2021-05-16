import { Table } from 'antd'
import { columns, data } from '../Repo'

export const NewTasks = () => {
  return (
    <Table
      title={() => 'Co-ordination Section'}
      columns={columns}
      dataSource={data}
    />
  )
}
