import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 }, 
    { field: 'Channel', headerName: 'Channel', width: 150, renderCell: (params) => <img src={params.row.Channel} alt="Channel" style={{ width: "50px", height: '50px' }} /> },
    { field: 'OrderNo', headerName: 'Order No', width: 130 },
  { field: 'OrderNo', headerName: 'Order No', width: 130 },
  { field: 'OrderDate', headerName: 'Order Date', width: 130 },
  { field: 'City', headerName: 'City', width: 130 },
  { field: 'CustomerName', headerName: 'Customer Name', width: 130 },
  { field: 'OrderValue', headerName: 'Order Value', width: 130 },
  {
    field: 'Status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => (
      <button
        style={{
          backgroundColor: params.row.Status === 'pending' ? 'lightgreen' : 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        {params.row.Status}
      </button>
    ),
  },
  { 
    field: 'Operation',
    headerName: 'Operation',
    width: 130,
    renderCell: (params) => (
      <select
        style={{
         
          color: 'black',
          borderColor: 'black',
          borderRadius: '4px',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        <option value="Actions">Actions</option>
        <option value="Edit">Edit</option>
        <option value="Delete">Delete</option>
      </select>
    ),
  },
  
];

const rows = [
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  {id: 1, Channel: "https://tse1.mm.bing.net/th?id=OIP.Zw58wdWHpkvRPnB3YSzmZgHaJC&pid=Api&P=0&h=180", OrderNo: 234872572, OrderDate:34, City:"Lucknow",CustomerName:'Abishek', OrderValue:35545, Status:'pending',Operation:'Actions' },
  
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%',backgroundColor:'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}