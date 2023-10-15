import React, { useState } from 'react'
import {
  TextField,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  Modal 
} from "@mui/material";
import {Check, Close} from '@mui/icons-material';
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import useStyles from "./AddProductModalStyle";
import handleMessage from '../../../helpers/handleMessage';

const AddProductModal = ({open, setOpen}) => {

  const classes = useStyles();

  const initialProductValue = {
    id: null,
    brand: null,
    size: null,
    price: null,
    description: null,
  };

  const [newProduct, setNewProduct] = useState(initialProductValue);
  
  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => setOpen(false);

  const addNewProduct = () => {
    handleMessage("Producto creado correctamente.", "success", enqueueSnackbar);
    setOpen(false)
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
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="ID producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="id"
                value={newProduct.id}
              />
              <TextField 
                label="Marca del producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="brand"
                value={newProduct.brand}
              />
            </div>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="Tamaño del producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="size"
                value={newProduct.size}
              />
              <TextField 
                label="Precio del producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="price"
                value={newProduct.price}
              />
            </div>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="Descripción del producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="description"
                value={newProduct.description}
              />
            </div>
          </CardContent>
          <CardActions style={{display: 'flex' , justifyContent: 'center'}}>
              <Button
                className={classes.btnHeadSol}
                variant="outlined"
                color="secondary"
              >
                <Check className={classes.textBtnHead2}/>
                <Typography
                  className={classes.textBtnHead2}
                  onClick={addNewProduct}
                >
                  Registrar producto
                </Typography>
              </Button>
              <Button
                className={classes.btnHeadSol}
                variant="outlined"
                color="secondary"
              >
                <Close className={classes.textBtnHead2}/>
                <Typography 
                  className={classes.textBtnHead2}
                  onClick = {() => {handleClose(); setNewProduct(initialProductValue)}}
                >
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

export default AddProductModal