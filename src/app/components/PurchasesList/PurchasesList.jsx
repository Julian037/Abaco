import React, { useEffect } from "react";
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
// import { arrayDeProductos } from "../../../helpers/dataProducts";
import DeleteIcon from '@mui/icons-material/Delete';

const PurchasesList = ({productos}) => {
  const [cantidad, setCantidad] = useState(0);

  const listProduct = productos

  const initialProductValue = {
    id: null,
  };

  const initialValue = [{
      id: null,
      brand: null,
      size: null,
      price: null,
      description: null,
  }]

  const [selectedID, setSelectedID] = useState(initialProductValue);

  const [searchedProduct, setSearchedProduct] = useState(initialValue);
  
  const handleChange = (event) => {
    setSelectedID({
      ...selectedID,
      [event.target.name]: event.target.value,
    });
  };
  
  useEffect(() => {
    const filteredItem = listProduct.filter((item) => item.id === selectedID.id)
    setSearchedProduct(filteredItem)
  },[selectedID])


  return (
    <Card
      style={{ maxWidth: "90%", justifyContent: "center", margin: "16px" }}
      sx={{ minWidth: 275 }}
    >
      <CardContent>

        <div style={{display: 'flex', justifyContent:'space-between'}}>
        <TextField
          id="standard-basic"
          label="Código del producto"
          variant="standard"
          onChange={handleChange}
          name="id"
          value={selectedID?.id}
          style={{marginBottom: '26px'}}
        />

        <Button
        >
          <DeleteIcon />
        </Button>
        </div>


        <div style={{display: 'flex'}}>
          <Typography
            variant="h5"
            component="div"
          >
            Descripción del producto:
          </Typography>
          <Typography 
            variant="body2"
            style={{marginLeft: '10px'}}
          >
            {searchedProduct[0]?.description}
          </Typography>
        </div>
        <div style={{display: 'flex'}}>
          <Typography
            variant="h5"
            component="div"
          >
            Marca:
          </Typography>
          <Typography 
            variant="body2"
            style={{marginLeft: '10px'}}
          >
            {searchedProduct[0]?.brand}
          </Typography>
        </div>
        <div style={{display: 'flex'}}>
          <Typography
            variant="h5"
            component="div"
          >
            Unidad de medida:
          </Typography>
          <Typography 
            variant="body2"
            style={{marginLeft: '10px'}}
          >
            {searchedProduct[0]?.size}
          </Typography>
        </div>
        <div style={{display: 'flex'}}>
          <Typography
            variant="h5"
            component="div"
          >
            Precio por unidad:
          </Typography>
          <Typography 
            variant="body2"
            style={{marginLeft: '10px'}}
          >
            {searchedProduct[0]?.price}
          </Typography>
        </div>
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
