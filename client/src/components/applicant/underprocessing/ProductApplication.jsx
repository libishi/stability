import { useReducer } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'antd'
// import { ProductsApplicationTable } from './ProductsApplicationTable'
import { CenteredButton } from '../../layouts/SharedElements'
import { AntDatePicker, AntInput, AntSelect } from '../../commons/AntField'

const { Item } = Form

const initialNewMessage = {
  From: '',
  To: [],
  CC: [],
  BCC: [],
  Title: '',
  Body: '',
  fetching: false,
}

export const ProductApplication = () => {
  const formHook = useForm()
  const reducer = (state, action) => {
    return {
      ...state,
      [action.field]: action.value,
    }
  }

  const [state, dispatch] = useReducer(reducer, initialNewMessage)

  console.log('state', state)
  return (
    <>
      <h2>New Message</h2>
      <Form name="nest-messages">
        <Item>
          <AntSelect formHook={formHook} name="center" label="مركز الدراسة" />
        </Item>

        <Item>
          <AntDatePicker
            formHook={formHook}
            name="start"
            label="بداية الدراسة"
          />
        </Item>

        <Item>
          <AntDatePicker formHook={formHook} name="end" label="نهاية الدراسة" />
        </Item>

        <Item>
          <AntInput
            formHook={formHook}
            key="batchno"
            name="batchno"
            label="أرقام التشغيلات"
            value={state.Title}
            onChange={(e) => {
              dispatch({ field: 'Title', value: e.target.value })
            }}
          />
        </Item>

        <CenteredButton className={'centerFiftyStyle'} title="Send" />
      </Form>
    </>
  )
}
