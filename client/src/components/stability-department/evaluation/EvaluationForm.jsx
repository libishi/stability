import { useForm } from 'react-hook-form'
import { Form, Card, Row, Col, Button } from 'antd'
import { AntTextArea } from '../../commons/AntField'
import { PDF } from '../PDF'

const att = [
  { CheckListName: 'A', FileName: 'AA' },
  { CheckListName: 'A', FileName: 'AA' },
  { CheckListName: 'A', FileName: 'AA' },
]

export const EvaluationForm = () => {
  const formHook = useForm()

  return (
    <>
      <h2>Evaluation of product: xxxxxxxx </h2>
      <br />
      <div>
        <Row gutter={[16, 16]} justify="center">
          <Col span={14}>{att && <PDF attachments={att} />}</Col>

          <Col span={10}>
            <Card className="iframe-container">
              <Form layout="vertical">
                <AntTextArea
                  formHook={formHook}
                  md={20}
                  autoSize={{ minRows: 3, maxRows: 8 }}
                  name="center"
                  label="Stability Center"
                />

                <AntTextArea
                  formHook={formHook}
                  md={20}
                  autoSize={{ minRows: 3, maxRows: 8 }}
                  name="center"
                  label="Stability Center"
                />

                <AntTextArea
                  formHook={formHook}
                  md={20}
                  autoSize={{ minRows: 3, maxRows: 8 }}
                  name="center"
                  label="Stability Center"
                />

                <AntTextArea
                  formHook={formHook}
                  md={20}
                  autoSize={{ minRows: 3, maxRows: 8 }}
                  key="batchno"
                  name="batchno"
                  label="Batch No.(s)"
                />

                <Button>Save</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
