import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const PurchasesList = () => {
  const [cantidad, setCantidad] = useState(0);

  return (
    <Card
      style={{ maxWidth: "90%", justifyContent: "center", margin: "16px" }}
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <TextField
          id="standard-basic"
          label="Código del producto"
          variant="standard"
        />

        <Typography
          style={{ margin: "10px" }}
          variant="h5"
          component="div"
          align="center"
        >
          Descripción del producto
        </Typography>

        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <Button
          onClick={() => setCantidad(cantidad - 1)}
          disabled={cantidad === 0}
        >
          <RemoveCircleOutlineIcon />
        </Button>

        {cantidad}
        <Button
          disabled={cantidad === 50}
          onClick={() => setCantidad(cantidad + 1)}
        >
          <AddCircleOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default PurchasesList;
