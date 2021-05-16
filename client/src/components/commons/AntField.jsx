import { Col, DatePicker, Form, Input, InputNumber, Radio, Switch } from 'antd'
import { Controller } from 'react-hook-form'
import { SecondarySelect, TransferNormal } from './Selectors'
const FormItem = Form.Item
const { Password, TextArea } = Input
const { RangePicker } = DatePicker

const CreateAntField = (AntComponent) => {
  return ({
    defaultValue,
    placeholder,
    formHook,
    info,
    required,
    hasFeedback,
    customvalidation,
    customerrormessage,
    md,
    offset,
    name,
    type,
    label,
    //* Select
    selectOptionsNormal,
    onFocus,
    onBlur,
    loading,
    //* DatePicker
    allowEmpty,
    //* Dynamic Form
    field,
    fieldKey,
    ...props
  }) => {
    const { errors, control } = formHook

    const validateStatus = customvalidation || errors?.[name] ? 'error' : null
    const help = errors?.[name]
      ? errors?.[name]?.message
      : customvalidation
      ? customerrormessage
      : info

    const handleChange = (e, onChange) => {
      // console.log('e', e)
      if (type === 'num') {
        onChange(Number(e))
      } else if (e === 'true') {
        onChange(true)
      } else if (e === 'false') {
        onChange(false)
      } else if (type === 'transfer') {
        onChange(false)
      } else {
        console.log('eee', e)
        onChange(e)
      }
    }

    // const handleIntegerChange = (e, onChange) => {
    // 	onChange(e)
    // }

    // const allChanges = (e, onChange) => {
    // 	return type === 'date'
    // 		? handleIntegerChange(e, onChange)
    // 		: handleChange(e, onChange)
    // }
    console.log('type', type)

    return (
      <Col offset={offset} xs={24} md={md || 6} lg={md || 6}>
        <FormItem
          {...field}
          label={label}
          fieldKey={[field?.fieldKey, name]}
          hasFeedback={hasFeedback}
          required={required ? true : false}
          validateStatus={validateStatus}
          help={help}
          defaultValue={defaultValue}
        >
          <Controller
            name={field ? [field.name, name] : name}
            control={control}
            defaultValue={defaultValue}
            render={({ onChange, onBlur, onFocus, value }) => (
              <AntComponent
                autoComplete="new-password"
                onChange={(e) => {
                  console.log('props', props)
                  console.log('e', e)
                  console.log('value', value)
                  handleChange(e, onChange)
                }}
                // defaultValue={type === 'select' ? defaultValue : ''}
                // defaultValue={
                // 	defaultValue && type === 'select' && defaultValue
                // }
                value={type !== 'radio' ? value : null}
                checked={type === 'radio' ? value : null}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder={placeholder}
                loading={loading}
                {...props}
              />
            )}
          />
        </FormItem>
      </Col>
    )
  }
}

const AntInput = CreateAntField(Input)
const AntTextArea = CreateAntField(TextArea)

const AntSelect = CreateAntField(SecondarySelect)
const AntInputNumber = CreateAntField(InputNumber)
const AntInputPassword = CreateAntField(Password)

const AntRadio = CreateAntField(Radio.Group)
const AntSwitch = CreateAntField(Switch)

const AntRangePicker = CreateAntField(RangePicker)
const AntDatePicker = CreateAntField(DatePicker)

export {
  AntSelect,
  TransferNormal,
  AntInput,
  AntInputNumber,
  AntInputPassword,
  AntTextArea,
  AntRadio,
  AntSwitch,
  AntRangePicker,
  AntDatePicker,
}
