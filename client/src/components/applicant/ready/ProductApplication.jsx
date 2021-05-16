import { useForm } from 'react-hook-form'
import { Form, Row, Divider } from 'antd'
import { CenteredButton } from '../../layouts/SharedElements'
import { AntDatePicker, AntInput, AntSelect } from '../../commons/AntField'
import { UploadFile } from '../../commons/Upload'
import { CASES_LABELS, UPLOAD_LABELS } from '../../labels'

export const ApplicationNew296 = () => {
  const formHook = useForm()

  return (
    <>
      <h2>{CASES_LABELS.new296}:</h2>
      <br />
      <Form layout="vertical" name="nest-messages">
        <Row gutter={[16, 16]}>
          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Stability Center"
          />

          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Manufacturer API"
          />

          <AntInput
            formHook={formHook}
            md={8}
            key="batchno"
            name="batchno"
            label="Batch No.(s)"
          />
        </Row>
        <Row gutter={[16, 16]}>
          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="start"
            label="Study Start Date"
          />

          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="end"
            label="Study End Date"
          />
        </Row>
        <Divider orientation="left" />
        <UploadFile name="file1" label={UPLOAD_LABELS.composition} />
        <UploadFile name="file2" label={UPLOAD_LABELS.resp} />
        <UploadFile name="file3" label={UPLOAD_LABELS.finishedProduct} />
        <UploadFile name="file4" label={UPLOAD_LABELS.refInsert} />
        <UploadFile name="file5" label={UPLOAD_LABELS.pharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.noPharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.analysis} />
        <UploadFile name="file5" label={UPLOAD_LABELS.contract} />
        <UploadFile name="file5" label={UPLOAD_LABELS.api} />
        <UploadFile name="file5" label={UPLOAD_LABELS.storage25} />
        <CenteredButton className={'centerFiftyStyle'} title="Send" />
      </Form>
    </>
  )
}

export const ApplicationNew425 = () => {
  const formHook = useForm()

  return (
    <>
      <h2>{CASES_LABELS.new425}:</h2>
      <br />
      <Form layout="vertical" name="nest-messages">
        <Row gutter={[16, 16]}>
          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Stability Center"
          />

          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Manufacturer API"
          />

          <AntInput
            formHook={formHook}
            md={8}
            key="batchno"
            name="batchno"
            label="Batch No.(s)"
          />
        </Row>
        <Row gutter={[16, 16]}>
          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="start"
            label="Study Start Date"
          />

          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="end"
            label="Study End Date"
          />
        </Row>
        <Divider orientation="left" />
        <UploadFile name="file1" label={UPLOAD_LABELS.composition} />
        <UploadFile name="file2" label={UPLOAD_LABELS.resp} />
        <UploadFile name="file3" label={UPLOAD_LABELS.finishedProduct} />
        <UploadFile name="file4" label={UPLOAD_LABELS.refInsert} />
        <UploadFile name="file5" label={UPLOAD_LABELS.pharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.noPharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.analysis} />
        <UploadFile name="file5" label={UPLOAD_LABELS.contract} />
        <UploadFile name="file5" label={UPLOAD_LABELS.api} />
        <UploadFile name="file5" label={UPLOAD_LABELS.storage25} />
        <CenteredButton className={'centerFiftyStyle'} title="Send" />
      </Form>
    </>
  )
}

export const ApplicationNew645 = () => {
  const formHook = useForm()

  return (
    <>
      <h2>{CASES_LABELS.new654}:</h2>
      <br />
      <Form layout="vertical" name="nest-messages">
        <Row gutter={[16, 16]}>
          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Stability Center"
          />

          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Manufacturer API"
          />

          <AntInput
            formHook={formHook}
            md={8}
            key="batchno"
            name="batchno"
            label="Batch No.(s)"
          />
        </Row>
        <Row gutter={[16, 16]}>
          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="start"
            label="Study Start Date"
          />

          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="end"
            label="Study End Date"
          />
        </Row>
        <Divider orientation="left" />
        <UploadFile name="file1" label={UPLOAD_LABELS.composition} />
        <UploadFile name="file2" label={UPLOAD_LABELS.resp} />
        <UploadFile name="file3" label={UPLOAD_LABELS.finishedProduct} />
        <UploadFile name="file4" label={UPLOAD_LABELS.refInsert} />
        <UploadFile name="file5" label={UPLOAD_LABELS.pharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.noPharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.analysis} />
        <UploadFile name="file5" label={UPLOAD_LABELS.contract} />
        <UploadFile name="file5" label={UPLOAD_LABELS.api} />
        <UploadFile name="file5" label={UPLOAD_LABELS.storage25} />
        <CenteredButton className={'centerFiftyStyle'} title="Send" />
      </Form>
    </>
  )
}

export const ApplicationRE296 = () => {
  const formHook = useForm()

  return (
    <>
      <h2>{CASES_LABELS.re296}:</h2>
      <br />
      <Form layout="vertical" name="nest-messages">
        <Row gutter={[16, 16]}>
          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Stability Center"
          />

          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Manufacturer API"
          />

          <AntInput
            formHook={formHook}
            md={8}
            key="batchno"
            name="batchno"
            label="Batch No.(s)"
          />
        </Row>
        <Row gutter={[16, 16]}>
          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="start"
            label="Study Start Date"
          />

          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="end"
            label="Study End Date"
          />
        </Row>
        <Divider orientation="left" />
        <UploadFile name="file1" label={UPLOAD_LABELS.composition} />
        <UploadFile name="file2" label={UPLOAD_LABELS.resp} />
        <UploadFile name="file3" label={UPLOAD_LABELS.finishedProduct} />
        <UploadFile name="file4" label={UPLOAD_LABELS.refInsert} />
        <UploadFile name="file5" label={UPLOAD_LABELS.analysis} />
        <UploadFile name="file5" label={UPLOAD_LABELS.contract} />
        <UploadFile name="file5" label={UPLOAD_LABELS.api} />
        <UploadFile name="file5" label={UPLOAD_LABELS.storage25} />
        <UploadFile name="file5" label={UPLOAD_LABELS.inspection} />
        <CenteredButton className={'centerFiftyStyle'} title="Send" />
      </Form>
    </>
  )
}

export const ApplicationRE425 = () => {
  const formHook = useForm()

  return (
    <>
      <h2>{CASES_LABELS.re425}:</h2>
      <br />
      <Form layout="vertical" name="nest-messages">
        <Row gutter={[16, 16]}>
          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Stability Center"
          />

          <AntSelect
            formHook={formHook}
            md={8}
            name="center"
            label="Manufacturer API"
          />

          <AntInput
            formHook={formHook}
            md={8}
            key="batchno"
            name="batchno"
            label="Batch No.(s)"
          />
        </Row>
        <Row gutter={[16, 16]}>
          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="start"
            label="Study Start Date"
          />

          <AntDatePicker
            formHook={formHook}
            md={8}
            style={{ width: '100%' }}
            type
            name="end"
            label="Study End Date"
          />
        </Row>
        <Divider orientation="left" />
        <UploadFile name="file1" label={UPLOAD_LABELS.composition} />
        <UploadFile name="file2" label={UPLOAD_LABELS.resp} />
        <UploadFile name="file3" label={UPLOAD_LABELS.finishedProduct} />
        <UploadFile name="file4" label={UPLOAD_LABELS.refInsert} />
        <UploadFile name="file5" label={UPLOAD_LABELS.pharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.noPharmacopia} />
        <UploadFile name="file5" label={UPLOAD_LABELS.analysis} />
        <UploadFile name="file5" label={UPLOAD_LABELS.contract} />
        <UploadFile name="file5" label={UPLOAD_LABELS.api} />
        <UploadFile name="file5" label={UPLOAD_LABELS.storage25} />
        <CenteredButton className={'centerFiftyStyle'} title="Send" />
      </Form>
    </>
  )
}
