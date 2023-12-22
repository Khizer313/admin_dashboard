import React from 'react'
import './dataTable.scss'
import { DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from '@mui/x-data-grid';
// MUI data grid search kia fr , installation sy install kia ar overview mi phly waly Table ky code ko ly lia yani nichy wala sara code


const DataTable = () => {


const columns: GridColDef[] = [
  { 
    field: 'id',
     headerName: 'ID',
      width: 90 
    },
//   avtar wali field hmny khud bnai ar renderCell sy show krwaey mgr esky bgher bi chl jti 
  {
    field:"avatar",
     headerName:"Avatar",
      width:100,
                renderCell:(params)=>{
                    return <h4>{params.row.img || "🧑‍🚒"} </h4>
                }
   },
   //   actions wali field hmny khud bnai ar div sy show kari
  {
    field:"actions",
     headerName:"Actions",
      width:100,
                renderCell:()=>{
                    return <div className="action">
                        <div className="view">View</div>
                        <div className="delete">Delete</div>
                    </div>
                }
   },
//    es status wali fileld ko bhe khud bnaya , ar type:"boolean" krky, nichy row mi status:true status:false kra yani eska data row mi mojood hy 
   {
    field:"status",
    headerName:"Status",
     width:100,
     type:"boolean"
    },

  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // nichy valueGetter function first and last name ko sath jor rha hy
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , status:true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , status:false  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 , status:true  },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , status:true },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , status:false },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , status:true  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status:true  },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status:true  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status:false  },
];






  return (
    <>
      <div className="dataTable">
      <DataGrid className='dataGrid'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // es sy search bar bn ky ajey ge jis sy item search kr skain gy , slots and slotProps 2no sy
        slots={{toolbar:GridToolbar}}
      slotProps={{
        toolbar:{
            // ab likhty hi searching shuru krdy ga
            showQuickFilter:true,
            // ab phly word sy nhi balkeh 2,3 word likhny ky bdd search shuru kry ga ar item show kry ga
            quickFilterProps:{ debounceMs: 500 },
        }

      }}


        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        // item sy upar search bar ky samny left par kuj option arahy thy unko khatam kedea nichy waly 3 attribute lga ky ar bas export wala option rehny dea
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      </div>





    </>
  )
}

export default DataTable
