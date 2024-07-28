// import React from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PurchasesList from "../PurchasesList/PurchasesList";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";

const Purchases = () => {
  const [cantidadCards, setCantidadCards] = useState(1);

  const initialCantidadCards = {
    brand: null,
    description: null,
    id: null,
    price: null,
    size: null,
    __v: 0,
    _id: null
  }

  // const [cantidadCards, setCantidadCards] = useState([]);

  const [productos, setProductos] = useState([]);

  console.log('esto ??' , productos)

  React.useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Compras
      </Typography>

      <CssBaseline />
      <Container>
        <Box>
          <Typography variant="h1" gutterBottom style={{ padding: "16px" }}>
            Lista de compras
          </Typography>

          <div style={{ paddingLeft: "16px" }}>
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => setCantidadCards(cantidadCards + 1)}
            >
              Agregar producto
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   margin: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {(() => {
              const components = [];
              for (let i = 0; i < cantidadCards; i++) {
                components.push(<PurchasesList key={i} numero={i + 1} productos={productos} />);
              }
              return components;
            })()}
            {/* {cantidadCards.map( (card) => {
              console.log(card) 

              return (

                <div><p>{card}</p></div>
              )
            } )} */}
          </div>

          <Box sx={{ flexGrow: 1 }} style={{ padding: "16px" }}>
            <Grid
              // container
              // spacing={2}
              // columns={16}
              style={{ display: "flex", justifyContent: "center", gap: "22px" }}
            >
              <Grid item xs={8}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Enviar
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Purchases;
