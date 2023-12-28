import React, { useState } from 'react'
import {
  CCardBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'

import { useQuery, useMutation } from 'react-query'
import { getUser, deleteUser } from 'src/api/UserApi'
import Stack from '@mui/material/Stack'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useEffect } from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

const UserPage = () => {
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [user, setUser] = useState([])
  const [putName, setPutName] = useState('')
  const [deleteId, setDeleteId] = useState()
  const { state } = useLocation()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  // get user
  // const {
  //   data: users,
  //   isFetching: isLoading,
  //   isError,
  //   error,
  //   refetch,
  // } = useQuery('user', async () => {
  //   return await getUser(state)
  // })

  const {
    data: users,
    isFetching: isLoading,
    isError,
    error,
    refetch,
  } = useQuery(['user', page, pageSize], async () => {
    return await getUser(page, pageSize)
  })

  const handlePageChange = (newPage) => {
    // Update the page state and refetch data
    setPage(newPage)
    refetch()
  }

  const [data, setData] = useState([])

  useEffect(() => {
    setData(users)
  }, [users])

  // delete user
  const { mutate: userDelete } = useMutation(() => deleteUser(deleteId), {
    onSuccess: async (data) => {
      const res = user.filter((x) => x.id !== data.id)
      setUser(res)

      toast.success('Data berhasil dihapus', {
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
  const handleDeleteClick = (clickedRow) => {
    setDeleteId(clickedRow.id)
    setPutName(clickedRow.user)
    setVisibleDelete(!visibleDelete)
  }
  const theme = useTheme()
  const isMdScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const columns = React.useMemo(() => [
    {
      header: 'NIK',
      width: 'auto',
      accessorKey: 'nik',
      cell: (info) => info.getValue(),
    },
    {
      header: 'Name',
      width: 'auto',
      accessorKey: 'name',
      cell: (info) => info.getValue(),
    },
    {
      header: 'Email',
      width: 'auto',
      accessorKey: 'email',
      cell: (info) => info.getValue(),
    },
    {
      header: 'Roles',
      width: 'auto',
      accessorKey: 'roles_id',
      cell: (info) => info.getValue(),
    },
    {
      header: 'Action',
      width: 'auto',
      cell: (info) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DeleteIcon
            onClick={() => handleDeleteClick(info.row.original)}
            style={{ cursor: 'pointer', color: 'red' }}
          />
        </div>
      ),
    },
  ])

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
  })

  return (
    <div>
      <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>DELETE DATA</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete user data {putName} ?</CModalBody>
        <CModalFooter>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => {
                userDelete(deleteId)
                setVisibleDelete(false)
              }}
            >
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setVisibleDelete(false)}>
              Cancel
            </Button>
          </Stack>
        </CModalFooter>
      </CModal>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              USER
            </span>
            <span
              style={{
                backgroundPositionY: '100%',
                paddingBottom: 10,
                backgroundSize: 'contain',
                color: '#0D4C92',
                fontFamily: 'Roboto',
              }}
            >
              {' '}
              DATA
            </span>
          </center>
        </b>
      </h4>
      <CCardBody style={{ marginTop: '60px' }}></CCardBody>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {table?.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell
                      sx={{
                        cursor: header.column.getCanSort() ? 'pointer' : '',
                      }}
                      onClick={header.column.getToggleSortingHandler()}
                      key={header.id}
                      width={isMdScreen ? header.column.columnDef.width : undefined}
                      align={header.column.columnDef.align}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <TableSortLabel active={true} direction={'asc'} />,
                        desc: <TableSortLabel active={true} direction={'desc'} />,
                      }[header.column.getIsSorted()] ?? null}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {data !== undefined ? (
              table?.getRowModel()?.rows?.length ? (
                table?.getRowModel().rows.map((row) => (
                  <TableRow
                    hover
                    sx={{ cursor: 'pointer' }}
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} align={cell.column.columnDef.align}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={columns?.length}>
                    No results.
                  </TableCell>
                </TableRow>
              )
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={columns?.length}>
                  {isLoading && <CircularProgress />}
                  {isError && <Typography>{error.message}</Typography>}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={users?.total_records ?? 0}
          rowsPerPage={pageSize}
          page={page - 1}
          onPageChange={(event, newPage) => handlePageChange(newPage + 1)}
          onRowsPerPageChange={(event) => {
            setPageSize(parseInt(event.target.value, 10))
            setPage(1)
          }}
        />
      </TableContainer>
    </div>
  )
}

export default UserPage
