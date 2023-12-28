import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useLocation } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { getApplicationByJobStatus, putApplicationAll } from 'src/api/ApplicationApi'
import { getSelection } from 'src/api/SelectionApi'
import { toast } from 'react-toastify'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { getInterviewer } from 'src/api/UserApi'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

import Button from '@mui/material/Button'
import UploadIcon from '@mui/icons-material/Upload'
import Stack from '@mui/material/Stack'

const ResultCandidates = () => {
  const { state } = useLocation()

  const [visiblePass, setVisiblePass] = useState(false)
  const [selection, setSelection] = useState([])
  const [putGrade, setPutGrade] = useState('')
  const [putStatus, setPutStatus] = useState('')
  const [putNextSelection, setPutNextSelection] = useState()
  const [putTimeSelection, setPutTimeSelection] = useState('')
  const [putTimeTable, setPutTimeTable] = useState()
  const [putTahapSeleksi, setPutTahapSeleksi] = useState()
  const [putInterviewer, setPutInterviewer] = useState('')
  const [interviewer, setInterviewer] = useState([])
  const [putSection, setPutSection] = useState('')
  const [putPosition, setPutPosition] = useState('')
  const [putTime, setPutTime] = useState('')

  //get interviewer
  useQuery('interviewer', async () => {
    const data = await getInterviewer()
    setInterviewer(data)
  })

  // get Selection
  useQuery('selection', async () => {
    const data = await getSelection()
    setSelection(data)
  })

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    )
  }

  const { data: tes, refetch } = useQuery('application-job-status', async () => {
    return await getApplicationByJobStatus(state.jobs_id)
  })

  //mengupdate data
  const [selectedRows, setSelectedRows] = useState([])
  const handleSelectionChange = (params) => {
    const selectedRowsData = params.map((id) => {
      const row = tes?.lulus.find((row) => row.id === id)
      return { ...row }
    })
    setSelectedRows(selectedRowsData)
  }

  function handleSaveAll() {
    const members = selectedRows.map(({ no_test }) => ({
      id: no_test,
      grade: putGrade,
      status: putStatus,
      next_selection: putNextSelection,
      time: putTime,
      time_selection: putTimeSelection,
      timetable: putTimeTable,
      tahap_seleksi: putTahapSeleksi,
      interviewer_id: putInterviewer,
      section: putSection,
      position: putPosition,
    }))

    saveData.mutate(members)
  }

  const saveData = useMutation(putApplicationAll, {
    onSuccess: async () => {
      toast.success('Success', {
        autoClose: 1500,
      })
      await refetch()
    },
    onError: (err) => {
      toast.error(err.response.data.message, {
        autoClose: 1500,
      })
    },
  })

  const data = [
    { field: 'checkbox', headerName: '', width: 50, checkboxSelection: true },
    { field: 'no_test', headerName: 'NO TEST', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'position', headerName: 'POSITION', width: 150 },
    { field: 'section', headerName: 'SECTION', width: 200 },
    { field: 'next_selection', headerName: 'NEXT SELECTION', width: 250 },
    { field: 'time_selection', headerName: 'TIME SELECTION', width: 200 },
    { field: 'grade', headerName: 'GRADE', width: 150 },
    { field: 'status', headerName: 'STATUS', width: 150 },
  ]

  const datas = [
    { field: 'no_test', headerName: 'NO TEST', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'position', headerName: 'POSITION', width: 300 },
    { field: 'section', headerName: 'SECTION', width: 300 },
    { field: 'tahap_seleksi', headerName: 'SELECTION STAGE', width: 300 },
    { field: 'grade', headerName: 'SELECTION RESULT', width: 200 },
  ]

  return (
    <div style={{ marginTop: '80px' }}>
      <CModal
        backdrop="static"
        alignment="center"
        visible={visiblePass}
        onClose={() => setVisiblePass(false)}
      >
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>CANDIDATES PASS</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormLabel htmlFor="tahapseleksi">Selection Stage</CFormLabel>

          <CFormSelect
            id="tahapseleksi"
            value={putTahapSeleksi}
            onChange={(e) => setPutTahapSeleksi(e.target.value)}
            className="mb-3"
          >
            <option defaultValue="">Choose Selection</option>
            <option value="Tes Tahap 1">Tes Tahap 1</option>
            <option value="Wawancara">Wawancara</option>
            <option value="Medical Check Up">Medical Check Up</option>
            <option value="Induction">Induction</option>
          </CFormSelect>

          <CFormLabel htmlFor="nilaitest">Test Score</CFormLabel>
          <CFormInput
            type="number"
            id="nilaitest"
            value={putGrade}
            onChange={(e) => setPutGrade(e.target.value)}
            className="mb-3"
          />
          <CFormLabel htmlFor="status">Selection Result</CFormLabel>
          <CFormSelect
            id="status"
            value={putStatus}
            onChange={(e) => setPutStatus(e.target.value)}
            className="mb-3"
          >
            <option defaultValue="">Choose Status</option>
            <option value="Lulus">Lulus</option>
            <option value="Tidak Lulus">Tidak Lulus</option>
          </CFormSelect>
          {putStatus !== 'Tidak Lulus' && (
            <>
              {putTahapSeleksi !== 'Induction' && (
                <>
                  <CFormLabel htmlFor="tahapanselanjutnya">Next Selection</CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="tahapanselanjutnya"
                    value={putNextSelection}
                    onChange={(e) => setPutNextSelection(e.target.value)}
                    className="mb-3"
                  >
                    <option value="">-- Pilih Seleksi --</option>
                    {selection.map((selection) => (
                      <option key={selection.name} value={selection.name}>
                        {selection.name}
                      </option>
                    ))}
                  </CFormSelect>

                  {putNextSelection === 'Wawancara' && ( // Memeriksa apakah "Next Selection" dipilih sebagai "Wawancara"
                    <>
                      <CFormLabel htmlFor="interviewer">Interviewer</CFormLabel>
                      <CFormSelect
                        id="interviewer"
                        value={putInterviewer}
                        onChange={(e) => setPutInterviewer(e.target.value)}
                        className="mb-3"
                      >
                        <option value="">-- Choose Interviewer --</option>
                        {interviewer.map((interviewer) => (
                          <option key={interviewer.id} value={interviewer.id}>
                            {interviewer.name}
                          </option>
                        ))}
                      </CFormSelect>
                    </>
                  )}

                  <CFormLabel htmlFor="jadwalseleksi">Selection Schedule</CFormLabel>
                  <CFormInput
                    type="date"
                    id="jadwalseleksi"
                    value={putTimeSelection}
                    onChange={(e) => setPutTimeSelection(e.target.value)}
                    className="mb-3"
                  />

                  <CFormLabel htmlFor="waktuseleksi">Selection Time</CFormLabel>
                  <CFormInput
                    id="waktuseleksi"
                    type="time"
                    value={putTime}
                    onChange={(e) => setPutTime(e.target.value)}
                    className="mb-3"
                  ></CFormInput>

                  <CFormLabel htmlFor="timelineseleksi">Selection Timeline</CFormLabel>
                  <div className="App" id="timelineseleksi">
                    <CKEditor
                      data={putTimeTable}
                      editor={ClassicEditor}
                      onChange={(event, editor) => {
                        const data = editor.getData()
                        setPutTimeTable(data)
                      }}
                      className="mb-3"
                    />
                  </div>
                </>
              )}
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setVisiblePass(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleSaveAll()
                setVisiblePass(!visiblePass)
              }}
            >
              Save
            </Button>
          </Stack>
        </CModalFooter>
      </CModal>
      <CCard className="mb-5" id="exportL">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className="d-flex justify-content-center"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#0D4C92',
              }}
            >
              CANDIDATES PASSED DATA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <CCardBody className="d-flex justify-content-end align-items-center">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<UploadIcon />}
                    onClick={() => {
                      setPutPosition(data.position)
                      setPutSection(data.section)

                      setVisiblePass(!visiblePass)
                    }}
                  >
                    Input Result
                  </Button>
                </Stack>
              </CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                checkboxSelection
                disableRowSelectionOnClick
                rows={tes?.lulus ?? []}
                columns={data}
                pageSize={12}
                autoHeight
                onSelectionModelChange={selectedRows}
                selectionModel={selectedRows}
                onRowSelectionModelChange={handleSelectionChange}
                slots={{
                  toolbar: CustomToolbar,
                }}
              />
            </CCardBody>
          </AccordionDetails>
        </Accordion>
      </CCard>
      <CCard className="mb-5" id="exportL">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className="d-flex justify-content-center"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#0D4C92',
              }}
            >
              CANDIDATES NOT PASSED DATA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                rows={tes?.gagal ?? []}
                columns={datas}
                pageSize={12}
                autoHeight
                slots={{
                  toolbar: CustomToolbar,
                }}
              />
            </CCardBody>
          </AccordionDetails>
        </Accordion>
      </CCard>
    </div>
  )
}

export default ResultCandidates
