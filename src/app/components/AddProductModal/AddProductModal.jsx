import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  Modal 
} from "@mui/material";
import { Check, Close } from '@mui/icons-material';
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import useStyles from "./AddProductModalStyle";
import handleMessage from '../../../helpers/handleMessage';
import axios from 'axios';

const AddProductModal = ({ open, setOpen }) => {
  const classes = useStyles();

  const initialProductValue = {
    codigo: '', // Nuevo campo para el código
    brand: '',
    size: '',
    price: '',
    description: '',
    proveedorNIT: '', // Campo para el NIT del proveedor
  };

  const [newProduct, setNewProduct] = useState(initialProductValue);

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => setOpen(false);

  const addNewProduct = async () => {
    try {
      const nuevoProducto = {
        codigo: newProduct.codigo, // Incluir el código
        brand: newProduct.brand,
        size: newProduct.size,
        price: newProduct.price,
        description: newProduct.description,
        proveedorNIT: newProduct.proveedorNIT, // Incluir el NIT del proveedor
      };

      await axios.post('http://localhost:5000/api/productos', nuevoProducto);

      handleMessage("Producto creado correctamente.", "success", enqueueSnackbar);
      setOpen(false);
      setNewProduct(initialProductValue);
    } catch (error) {
      console.error('Error al registrar el producto:', error);
      handleMessage("Por favor complete todos los campos", "error", enqueueSnackbar);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          style={{ maxWidth: "90%", justifyContent: "center", margin: "16px" }}
          sx={{ minWidth: 275 }}
          className={classes.cardContainer}
        >
          <CardContent>
            <Typography variant='h1'>
              Registro de producto
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TextField 
                label="Código del producto"
                style={{ margin: '10px' }} 
                onChange={handleChange}
                name="codigo"
                value={newProduct.codigo}
              />
              <TextField 
                label="Marca del producto"
                style={{ margin: '10px' }} 
                onChange={handleChange}
                name="brand"
                value={newProduct.brand}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TextField 
                label="Tamaño del producto"
                style={{ margin: '10px' }} 
                onChange={handleChange}
                name="size"
                value={newProduct.size}
              />
              <TextField 
                label="Precio del producto"
                style={{ margin: '10px' }} 
                onChange={handleChange}
                name="price"
                value={newProduct.price}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TextField 
                label="Descripción del producto"
                style={{ margin: '10px' }} 
                onChange={handleChange}
                name="description"
                value={newProduct.description}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TextField 
                label="NIT del proveedor"
                style={{ margin: '10px' }} 
                onChange={handleChange}
                name="proveedorNIT"
                value={newProduct.proveedorNIT}
              />
            </div>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                className={classes.btnHeadSol}
                variant="outlined"
                color="secondary"
                onClick={addNewProduct}
              >
                <Check className={classes.textBtnHead2}/>
                <Typography className={classes.textBtnHead2}>
                  Registrar producto
                </Typography>
              </Button>
              <Button
                className={classes.btnHeadSol}
                variant="outlined"
                color="secondary"
                onClick={() => { handleClose(); setNewProduct(initialProductValue); }}
              >
                <Close className={classes.textBtnHead2}/>
                <Typography className={classes.textBtnHead2}>
                  Cancelar registro
                </Typography>
              </Button>
          </CardActions>
        </Card>
      </Modal>
      <div>
        <SnackbarProvider />
      </div>
    </>
  )
}

export default AddProductModal;
