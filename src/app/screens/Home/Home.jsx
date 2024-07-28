import React, { useEffect, useState } from 'react';
import { styled, useTheme } from "@mui/material/styles";
import { Collapse , Box , List} from '@mui/material';
// import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Purchases from "../../components/Purchases/Purchases";
import Supplies from "../../components/Supplies/Supplies";
import Inventory from "../../components/Inventory/Inventory";
import Order from "../../components/Order/Order";
import PurchaseHistory from "../../components/PurchaseHistory/PurchaseHistory";

import {
  ManageAccounts,
  ShoppingBasket,
  Search,
  ShoppingCart,
  Add,
  ListAlt,
  LocalShipping,
  Inventory as InventoryBox,
  Group,
  AddBusiness,
  Help,
  SupportAgent,
  HourglassEmpty,
  Logout,
  Settings,
  ExpandMore,
  ExpandLess,
  ChevronRight,
  ChevronLeft,
  Menu,
} from '@mui/icons-material';
import SuppliersHistory from '../../components/SuppliersHistory/SuppliersHistory';
import axios from 'axios';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Home = () => {

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/empleados');
      setEmpleados(response.data);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
    }
  };

  console.log('julian' , empleados)

  const iconAssigner = (text) => {
    switch (text) {
      case "Admin de usuarios":
        return <ManageAccounts />
      case "Compras":
        return <ShoppingBasket />;
      case "Historial de compras":
        return <Search />;
      case "Realizar compra":
        return <ShoppingCart />;
      case "Registro de producto":
        return <Add />;
      case "Solicitud de insumos":
        return <ListAlt />;
      case "Pedidos":
        return <LocalShipping />;
      case "Inventarios":
        return <InventoryBox />;
      case "Usuarios":
        return <Group />;
      case "Proveedores":
        return <AddBusiness />;
      case "Configuración":
        return <Settings />;  
      case "Ayuda":
        return <Help />;
      case "Contactenos":
        return <SupportAgent />;
      case "Cerrar sesión":
        return <Logout  onClick={ ()=> console}/>;
      default:
        return <HourglassEmpty />;
    }
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [componenteSeleccionado, setComponenteSeleccionado] =
    useState("Compras");

  let componenteMostrado;

  if (componenteSeleccionado === "Realizar compra") {
    componenteMostrado = <Purchases />;
  } else if (componenteSeleccionado === "Solicitud de insumos") {
    componenteMostrado = <Supplies />;
  } else if (componenteSeleccionado === "Pedidos") {
    componenteMostrado = <Order />;
  } else if (componenteSeleccionado === "inventarios") {
    componenteMostrado = <Inventory />;
  } else if (componenteSeleccionado === "Historial de compras") {
    componenteMostrado = <PurchaseHistory setComponenteSeleccionado={setComponenteSeleccionado}/>;
  } else if (componenteSeleccionado === "Proveedores") {
    componenteMostrado = <SuppliersHistory />;
  }



  const navBarItems = [
    {sectionName: 'Admin de usuarios', enable: false, sectionItems : []},
    { sectionName: 'Compras',
      enable: true,
      sectionItems : ["Historial de compras" , "Realizar compra" , "Registro de producto"] 
    },
    {sectionName: 'Solicitud de insumos', enable: false, sectionItems : [] },
    {sectionName: 'Pedidos', enable: false, sectionItems : [] },
    {sectionName: 'Inventarios', enable: false, sectionItems : [] },
    {sectionName: 'Usuarios', enable: false, sectionItems : [] },
    {sectionName: 'Proveedores', enable: false, sectionItems : [] },
  ]

  const navBarComplements = ["Configuración", "Ayuda", "Contactenos", "Cerrar sesión"]

  const [open2, setOpen2] = useState(false);
  const [position, setPosition] = useState();

  const handleClick = (nombre) => {
    if ( nombre !== position){
      setOpen2(true)
    } else {
      setOpen2(!open2);
    }
   
  };

  const probando = (visible) => {
    if (visible){
      if (open2) {
        return <ExpandLess />
      } else {
        return  <ExpandMore /> 
      }
    } else <></>
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Abaco
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRight />
            ) : (
              <ChevronLeft />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navBarItems.map(
            (item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block" }}
                onClick={ !item.enable ? () => setComponenteSeleccionado(item.sectionName) : null}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {handleClick(item.sectionName); setPosition(item.sectionName)}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {iconAssigner(item.sectionName)}
                  </ListItemIcon>
                  <ListItemText primary={item.sectionName} sx={{ opacity: open ? 1 : 0 }} />
                  {/* { ( open2 && item?.enable) ? <ExpandLess /> : <ExpandMore /> } */}
                  {probando(item.enable)}
                </ListItemButton>


  <Collapse in={item.sectionName === position && open2} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    {item.sectionItems?.map((item) => 
            <ListItemButton sx={{ pl: 4 }} onClick={ () => setComponenteSeleccionado(item) }>
            <ListItemIcon>
              {iconAssigner(item)}
              {/* <StarBorder /> */}
            </ListItemIcon>
          <ListItemText primary={item} />
          </ListItemButton>
    )}

  </List>
</Collapse>




              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {navBarComplements.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {iconAssigner(text)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {componenteMostrado}
      </Box>
    </Box>
  );
};

export default Home;
