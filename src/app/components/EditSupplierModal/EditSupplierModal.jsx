import React, { useEffect, useState } from 'react'
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

import useStyles from "./EditSupplierModalStyle";
import handleMessage from '../../../helpers/handleMessage';
import axios from 'axios';

const initialSupplierValue = {
  nit: null,
  name: null,
  email: null,
  address: null,
  phone: null,
};

const EditSupplierModal = ({open, setOpen, selectedID}) => {

  const classes = useStyles();

  const [newSupplier, setNewSupplier] = useState(initialSupplierValue);

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/proveedores/${selectedID}`);
        setNewSupplier(response.data)
      } catch (error) {
        console.error('Error al obtener el empleado:', error);
      }
    };

    obtenerEmpleado();
  }, [selectedID, open]);

  const handleChange = (event) => {
    setNewSupplier({
      ...newSupplier,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => setOpen(false);

  const handleEdit = async () => {
    const { nit, name, email, address, phone} = newSupplier

    try {
      const nuevoProveedor = {
        nit,
        name,
        email,
        address,
        phone,
      };
      await axios.put(`http://localhost:5000/api/proveedores/${selectedID}`, nuevoProveedor);
      handleMessage("Proveedor actualizado correctamente.", "success", enqueueSnackbar);
      setOpen(false)
      handleMessage("Proveedor actualizado correctamente.", "success", enqueueSnackbar);
    } catch (error) {
      if(error.request.status === 400 ){
        const primeraEntrada = Object.entries(error.response.data.mensaje.errors)[0];
        const primerObjeto = primeraEntrada[1];
        handleMessage(`${primerObjeto.message}`, "error", enqueueSnackbar);
      }
      console.error('Error al actualizar el empleado:', error);
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
              Registro de proveedores
            </Typography>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="NIT"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="nit"
                // value={newSupplier.nit ? newSupplier.nit : '' }
                value={newSupplier.nit}
              />
              <TextField 
                label="Nombre"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="name"
                value={newSupplier.name}
              />
            </div>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="Email"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="email"
                value={newSupplier.email}
              />
              <TextField 
                label="dirección"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="address"
                value={newSupplier.address}
              />
            </div>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <TextField 
                label="Teléfono"
                style={{  margin: '10px'}} 
                onChange={handleChange}
                name="phone"
                value={newSupplier.phone}
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
                  onClick={handleEdit}
                >
                  Editar proveedor
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
                  onClick = {() => {handleClose(); setNewSupplier(initialSupplierValue)}}
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

export default EditSupplierModal