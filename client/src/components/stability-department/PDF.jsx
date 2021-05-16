import { useState } from 'react'
import { Card } from 'antd'

export const PDF = ({ attachments }) => {
  const [tabbing, setTab] = useState({
    key: 'tab1',
    filename: 'app',
  })

  const tabsLists = attachments.map((res, i) => ({
    key: `${i}`,
    tab: res?.CheckListName,
    filename: res.FileName,
  }))

  const onTabChange = (key) => {
    setTab({ filename: tabsLists[key]['filename'] })
  }

  return (
    // <Affix>
    <Card
      className="iframe-container"
      tabList={tabsLists}
      activeTabKey={tabbing.key}
      tabProps={{ type: 'card' }}
      onTabChange={(key) => {
        onTabChange(key)
      }}
    >
      <iframe
        className="iframe-style"
        title="pdf"
        src="https://www.gs1.org/sites/default/files/docs/epc/EPCIS-Standard-1.2-r-2016-09-29.pdf"
        type="application/pdf"
      />
    </Card>
    // </Affix>
  )
}
