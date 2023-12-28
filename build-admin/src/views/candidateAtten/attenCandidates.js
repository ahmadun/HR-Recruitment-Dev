import React from 'react'
import { CCard, CCardBody } from '@coreui/react'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getApplicationByJobAtten } from 'src/api/ApplicationApi'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

const AttenCandidates = () => {
  const { state } = useLocation()

  const { data: yes } = useQuery('application-job-atten', async () => {
    return await getApplicationByJobAtten(state)
  })

  const data = [
    { field: 'no_test', headerName: 'NO TEST', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'position', headerName: 'POSITION', width: 200 },
    { field: 'section', headerName: 'SECTION', width: 250 },
    { field: 'next_selection', headerName: 'SELECTION STAGE', width: 250 },
    { field: 'time_selection', headerName: 'SELECTION SCHEDULE', width: 250 },
    { field: 'domisili', headerName: 'DOMISILI', width: 150 },
    { field: 'kehadiran', headerName: 'KEHADIRAN', width: 150 },
  ]

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    )
  }

  return (
    <div style={{ marginTop: '80px' }}>
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
              CANDIDATES PRESENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                rows={yes?.ya ?? []}
                columns={data}
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
              CANDIDATES ABSENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                rows={yes?.tidak ?? []}
                columns={data}
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

export default AttenCandidates
