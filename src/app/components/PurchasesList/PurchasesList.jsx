import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const PurchasesList = ({ productos, onDelete, onUpdateSelectedProduct }) => {
  const [cantidad, setCantidad] = useState(0);

  const initialProductValue = {
    codigo: '',
  };

  const initialValue = {
    codigo: '',
    brand: '',
    size: '',
    price: '',
    description: '',
  };

  const [selectedCodigo, setSelectedCodigo] = useState(initialProductValue);
  const [searchedProduct, setSearchedProduct] = useState(initialValue);

  const handleChange = (event) => {
    setSelectedCodigo({
      ...selectedCodigo,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/productos/codigo/${selectedCodigo.codigo}`);
        if (response.data && response.data !== searchedProduct) {
          setSearchedProduct(response.data);
          onUpdateSelectedProduct(response.data);
        }
      } catch (error) {
        console.error('Error al buscar el producto:', error);
        setSearchedProduct(initialValue); // Resetea el producto buscado si hay un error
      }
    };

    if (selectedCodigo.codigo) {
      fetchProduct();
    }
  }, [selectedCodigo.codigo]); // Dependencias ajustadas

  return (
    <Card
      style={{ maxWidth: "90%", justifyContent: "center", margin: "16px" }}
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            id="standard-basic"
            label="Código del producto"
            variant="standard"
            onChange={handleChange}
            name="codigo"
            value={selectedCodigo.codigo}
            style={{ marginBottom: '26px' }}
          />
          <Button onClick={onDelete}>
            <DeleteIcon />
          </Button>
        </div>

        <div style={{ display: 'flex' }}>
          <Typography variant="h5" component="div">
            Descripción del producto:
          </Typography>
          <Typography variant="body2" style={{ marginLeft: '10px' }}>
            {searchedProduct?.description}
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" component="div">
            Marca:
          </Typography>
          <Typography variant="body2" style={{ marginLeft: '10px' }}>
            {searchedProduct?.brand}
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" component="div">
            Unidad de medida:
          </Typography>
          <Typography variant="body2" style={{ marginLeft: '10px' }}>
            {searchedProduct?.size}
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" component="div">
            Precio por unidad:
          </Typography>
          <Typography variant="body2" style={{ marginLeft: '10px' }}>
            {searchedProduct?.price}
          </Typography>
        </div>
      </CardContent>

      <CardActions>
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
