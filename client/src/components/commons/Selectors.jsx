//? IMPORTS
import { memo } from 'react'
import { Form, Select, Input, Transfer } from 'antd'

const { Option } = Select
const { Item } = Form

//? COMPONENTS

export const SecondarySelect = memo((props) => {
  return (
    <Select
      disabled={props.disabled}
      // name={props.name}
      // label={props.label}
      mode={props.mode || 'single'}
      value={props.value}
      style={props.style}
      allowClear={true}
      onChange={props.onChange}
    >
      <Option key="x0n">Is Empty/Null</Option>
      {/* {props.keyValues.map((d) => (
        <Option key={d.value}>{d.text}</Option>
      ))} */}
    </Select>
  )
})

export const BasicInput = memo((props) => {
  const { name, label, initialValue, disabled, value, onChange } = props
  return (
    <>
      <Item name={name} label={label} initialValue={initialValue}>
        <Input
          disabled={disabled}
          value={value}
          style={{ width: '100%' }}
          onChange={onChange}
        />
      </Item>
    </>
  )
})

export const TransferNormal = (props) => {
  return (
    <Item name={props.name} rules={props.rules}>
      <Transfer
        className="center-transfe"
        listStyle={{
          width: 300,
          height: 300,
          marginTop: '20px',
        }}
        dataSource={props.dataSource}
        targetKeys={props.targetKeys}
        selectedKeys={props.selectedKeys}
        // showSearch
        onChange={props.onChange}
        onSelectChange={props.onSelectChange}
        render={(item) => item.title}
        oneWay={true}
      />
    </Item>
  )
}
