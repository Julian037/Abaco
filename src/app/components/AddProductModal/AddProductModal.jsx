import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import useStyles from "./AddProductModalStyle";

const AddProductModal = ({open, setOpen}) => {

  const classes = useStyles();



  const handleClose = () => setOpen(false);

  const [newProduct, setNewProduct] = useState({
    id: 1,
    brand: 'Colanda',
    size: '10kg',
    price: 30000,
    description: 'asdfasdf asdf asdf asd',
  });
  
  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
    // setFormState({
    //   ...formState,
    //   touched: {
    //     ...formState.touched,
    //     [event.target.name]: true,
    //   },
    // });
  };

  console.log({newProduct})

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          style={{ maxWidth: "90%", justifyContent: "center", margin: "16px" }}
          sx={{ minWidth: 275 }}
          className={classes.test}
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
                value={newProduct.brand}
              />
            </div>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="Tamaño del producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                value={newProduct.size}
              />
              <TextField 
                label="Precio del producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                value={newProduct.price}
              />
            </div>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="Descripción del producto"
                style={{  margin: '10px'}} 
                onChange={handleChange}
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
                <CheckIcon className={classes.textBtnHead2}/>
                <Typography className={classes.textBtnHead2}>
                  Solicitar servicio
                </Typography>
              </Button>
              <Button
                className={classes.btnHeadSol}
                variant="outlined"
                color="secondary"
              >
                <CloseIcon className={classes.textBtnHead2}/>
                <Typography className={classes.textBtnHead2}>
                  Cancelar registro
                </Typography>
              </Button>
          </CardActions>
        </Card>
      </Modal>
  )
}

export default AddProductModal