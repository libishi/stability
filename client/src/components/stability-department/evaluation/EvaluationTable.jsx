import { Table } from 'antd'
import { columnsEval, dataEval } from '../Repo'

export const EvaluationTable = () => {
  return (
    <>
      <Table
        title={() => 'Evaluation Section'}
        columns={columnsEval}
        dataSource={dataEval}
      />
    </>
  )
}
