import { Table } from 'antd'
import { columnsSecond, dataSecond } from '../Repo'

export const NewTasksSecond = () => {
  return (
    <Table
      title={() => 'Reception Section'}
      columns={columnsSecond}
      dataSource={dataSecond}
    />
  )
}
