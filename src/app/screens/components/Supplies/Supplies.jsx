import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const Supplies = () => {
  const columns = [
    { field: "id", headerName: "# Pedido", width: 90 },
    {
      field: "product",
      headerName: "Producto",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "amount",
      headerName: "Cantidad",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 110,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, product: 874309, amount: "10 ", date: "2023-01-01" },
    { id: 2, product: 562981, amount: "20 ", date: "2023-01-02" },
    { id: 3, product: 234567, amount: "10 ", date: "2023-01-02" },
    { id: 4, product: 789012, amount: "20 ", date: "2023-01-04" },
    { id: 5, product: 456789, amount: "10 ", date: "2023-01-04" },
    { id: 6, product: 123456, amount: "10 ", date: "2023-01-06" },
    { id: 7, product: 654321, amount: "30 ", date: "2023-01-10" },
    { id: 8, product: 901234, amount: "10 ", date: "2023-01-10" },
    { id: 9, product: 345678, amount: "10 ", date: "2023-01-15" },
    { id: 10, product: 345678, amount: "50 ", date: "2023-01-15" },
    { id: 11, product: 345678, amount: "10 ", date: "2023-01-15" },
    { id: 12, product: 345678, amount: "10 ", date: "2023-01-15" },
    { id: 13, product: 345678, amount: "40 ", date: "2023-01-20" },
    { id: 14, product: 345678, amount: "10 ", date: "2023-01-20" },
    { id: 15, product: 345678, amount: "10 ", date: "2023-01-22" },
    { id: 16, product: 345678, amount: "20 ", date: "2023-01-22" },
    { id: 17, product: 345678, amount: "10 ", date: "2023-01-23" },
    { id: 18, product: 345678, amount: "10 ", date: "2023-01-23" },
    { id: 19, product: 345678, amount: "30 ", date: "2023-01-23" },
    { id: 20, product: 345678, amount: "10 ", date: "2023-01-23" },
    { id: 21, product: 345678, amount: "10 ", date: "2023-01-23" },
  ];
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Solicitud de insumos
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
          pageSizeOptions={[500]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Supplies;
