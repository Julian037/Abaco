import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const Order = () => {
  const columns = [
    { field: "id", headerName: "Número", width: 90 },
    {
      field: "date",
      headerName: "Fecha",
      width: 150,
      editable: true,
    },
    {
      field: "dependence",
      headerName: "Dependencia solicita",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Estado",
      // type: "number",
      width: 110,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      date: "2023-01-01",
      dependence: "100 ",
      status: "Entrgado",
    },
    {
      id: 2,
      date: "2023-01-03",
      dependence: "200 ",
      status: "Entrgado",
    },
    {
      id: 3,
      date: "2023-01-05",
      dependence: "100 ",
      status: "Pendiente",
    },
    {
      id: 4,
      date: "2023-01-05",
      dependence: "200 ",
      status: "Procesado",
    },
    {
      id: 5,
      date: "2023-01-10",
      dependence: "200 ",
      status: "Procesado",
    },
    {
      id: 6,
      date: "2023-01-11",
      dependence: "200 ",
      status: "Entrgado",
    },
    {
      id: 7,
      date: "2023-01-11",
      dependence: "100 ",
      status: "Entrgado",
    },
    {
      id: 8,
      date: "2023-01-12",
      dependence: "100 ",
      status: "Pendiente",
    },
    {
      id: 9,
      date: "2023-01-20",
      dependence: "200 ",
      status: "Procesado",
    },
    {
      id: 10,
      date: "2023-01-22",
      dependence: "100 ",
      status: "Procesado",
    },
    {
      id: 11,
      date: "2023-01-23",
      dependence: "100 ",
      status: "Entrgado",
    },
  ];
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Pedidos
      </Typography>
      <Box
        sx={{ height: 900, width: "100%" }}
        // md={{ height: 900, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 9,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Order;
