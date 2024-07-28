import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PurchasesList from "../PurchasesList/PurchasesList";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";

const Purchases = () => {
  const [cards, setCards] = useState([{ id: Date.now() }]); // Inicializar con una tarjeta
  const [productos, setProductos] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  console.log('selectedProducts' , selectedProducts)

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const agregarCard = () => {
    setCards([...cards, { id: Date.now() }]);
  };

  const eliminarCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
    setSelectedProducts(selectedProducts.filter(product => product.cardId !== id));
  };

  const updateSelectedProduct = (cardId, product) => {
    setSelectedProducts(prevSelectedProducts => {
      const existingProductIndex = prevSelectedProducts.findIndex(p => p.cardId === cardId);
      if (existingProductIndex !== -1) {
        const updatedProducts = [...prevSelectedProducts];
        updatedProducts[existingProductIndex] = { cardId, ...product };
        return updatedProducts;
      } else {
        return [...prevSelectedProducts, { cardId, ...product }];
      }
    });
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
              onClick={agregarCard}
            >
              Agregar producto
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cards.map((card, index) => (
              <PurchasesList
                key={card.id}
                numero={index + 1}
                productos={productos}
                onDelete={() => eliminarCard(card.id)}
                onUpdateSelectedProduct={(product) => updateSelectedProduct(card.id, product)}
              />
            ))}
          </div>

          <Box sx={{ flexGrow: 1 }} style={{ padding: "16px" }}>
            <Grid style={{ display: "flex", justifyContent: "center", gap: "22px" }}>
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
