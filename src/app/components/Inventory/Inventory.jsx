import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const Inventory = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "description",
      headerName: "descripción",
      width: 550,
      editable: true,
    },
    {
      field: "location",
      headerName: "ubicación",
      width: 150,
      editable: true,
    },
    {
      field: "amount",
      headerName: "cantidad",
      type: "number",
      width: 110,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      location: "Bodega 2",
      amount: 1,
    },
    {
      id: 2,
      description: "et dolore magna aliqua. Ut enim ad minim veniam",
      location: "Bodega 2",
      amount: 1,
    },
    {
      id: 3,
      description:
        "Purus gravida quis blandit turpis cursus in hac. Varius duis at consectetur lorem donec. Risus nec feugiat in fermentum.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 4,
      description:
        "Nulla posuere sollicitudin aliquam ultrices sagittis orci. Sit amet purus gravida quis blandit.",
      location: "Bodega 1",
      amount: 12,
    },
    {
      id: 5,
      description: "Tellus orci ac auctor augue mauris. ",
      location: "Bodega 1",
      amount: 48,
    },
    {
      id: 6,
      description: "Tempus urna et pharetra pharetra massa massa. ",
      location: "Bodega ",
      amount: 5,
    },
    {
      id: 7,
      description:
        "Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.",
      location: "Bodega 1",
      amount: 29,
    },
    {
      id: 8,
      description:
        "Eget nullam non nisi est sit amet facilisis magna etiam. Scelerisque purus semper eget duis at.",
      location: "Bodega 1",
      amount: 14,
    },
    {
      id: 9,
      description:
        "Donec et odio pellentesque diam volutpat commodo sed egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
      location: "Bodega 2",
      amount: 18,
    },
    {
      id: 10,
      description:
        "Et egestas quis ipsum suspendisse ultrices gravida dictum. Leo duis ut diam quam nulla porttitor massa id neque.",
      location: "Bodega 2",
      amount: 45,
    },
    {
      id: 11,
      description: "Turpis egestas pretium aenean pharetra.",
      location: "Bodega 1",
      amount: 27,
    },
    {
      id: 12,
      description:
        "Amet risus nullam eget felis eget nunc. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.",
      location: "Bodega 2",
      amount: 38,
    },
    {
      id: 13,
      description: "Maecenas volutpat blandit aliquam etiam erat velit.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 14,
      description: "Hac habitasse platea dictumst vestibulum rhoncus.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 15,
      description: "Urna duis convallis convallis tellus id interdum velit.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 16,
      description:
        "Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 17,
      description: "Vitae justo eget magna fermentum.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 18,
      description: "Elit duis tristique sollicitudin nibh sit amet commodo.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 19,
      description:
        "Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. ",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 20,
      description:
        "Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. ",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 21,
      description:
        "Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 22,
      description: "Volutpat est velit egestas dui id ornare arcu odio ut. ",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 23,
      description:
        "Faucibus turpis in eu mi bibendum neque egestas congue quisque.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 24,
      description: "Non sodales neque sodales ut etiam sit amet. ",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 25,
      description:
        "Magnis dis parturient montes nascetur ridiculus mus mauris vitae.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 26,
      description: "Sit amet commodo nulla facilisi nullam vehicula.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 27,
      description:
        "Sociis natoque penatibus et magnis dis parturient montes nascetur.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 28,
      description: "Felis donec et odio pellentesque diam.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 29,
      description:
        "Adipiscing at in tellus integer feugiat scelerisque varius morbi.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 30,
      description: "Justo nec ultrices dui sapien eget mi proin sed libero.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 31,
      description: "Duis convallis convallis tellus id interdum velit laoreet.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 32,
      description: "Et ultrices neque ornare aenean euismod elementum. ",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 33,
      description:
        "Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 34,
      description:
        "Nisl vel pretium lectus quam. Sed viverra tellus in hac habitasse.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 35,
      description:
        "Est ultricies integer quis auctor elit sed vulputate. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.",
      location: "Bodega 1",
      amount: 35,
    },
    {
      id: 36,
      description: "Duis tristique sollicitudin nibh sit amet commodo nulla. ",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 37,
      description: "A erat nam at lectus urna duis convallis. ",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 38,
      description: "In cursus turpis massa tincidunt dui ut ornare. ",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 39,
      description: "Nibh nisl condimentum id venenatis a condimentum vitae.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 40,
      description: "Risus nullam eget felis eget nunc lobortis mattis aliquam.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 41,
      description:
        "Maecenas accumsan lacus vel facilisis volutpat est velit egestas.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 42,
      description: "Viverra nam libero justo laoreet sit amet.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 43,
      description: "Tortor at risus viverra adipiscing at in tellus.",
      location: "Bodega 2",
      amount: 35,
    },
    {
      id: 44,
      description:
        "Consequat mauris nunc congue nisi vitae suscipit tellus mauris a.",
      location: "Bodega 2",
      amount: 35,
    },
  ];

  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Inventario
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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Inventory;
