import * as React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Donate", "Contact"];

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Charity4L
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Charity4L
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" className="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography
          sx={{
            color: "#fff",
            p: { md: 2, xs: 1 },
            mt: { md: 7, xs: 2 },
            letterSpacing: 40,
            typography: { md: "h1", xs: "h1" },
          }}
        >
          A Summer of Hunger.
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#fff", p: 2, typography: { md: "h4", xs: "body1" } }}
        >
          When the school year ends, so do school meals. Make the difference for
          millions of children and their families this summer.
        </Typography>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" sx={{ p: 2 }}>
            Donate Now
          </Button>
        </Box>
      </Box>

      <Box sx={{ pt: 5 }}>
        <Grid
          container
          spacing={7}
          sx={{
            p: 10,
            right: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={5}>
            <img
              src="https://images.unsplash.com/photo-1588349482083-036b31c6eca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="kids"
              width="100%"
            />
            <Typography>
              More than 30 million children qualify for free or reduced-price
              lunch during the school year. When the school year ends, millions
              of children will lose their only meal of the day. Learn why summer
              hunger can be so devastating to a child, and how you can help.
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <img
              src="https://images.unsplash.com/photo-1602181047856-c07f6c5d6353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="kids"
              width="100%"
            />
            <Typography>
              Over a million children die every year due to extreme poverty. For
              only $1.26 a day you can be a change-maker by providing food and
              access to life-changing programs for a child.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          p: 5,
          right: 0,
          left: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          right="0"
          left="0"
          justifyContent="center"
          textAlign="center"
          sx={{
            color: "#000",
            typography: { md: "h1", xs: "h3" },
          }}
        >
          How You Can Help
        </Typography>
        <Box>
          <ImageList>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} subtitle={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        <Button variant="contained" sx={{ p: 1 }}>
          <Typography variant="h5"> DONATE NOW </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          p: 5,
          right: 0,
          left: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          right="0"
          left="0"
          justifyContent="center"
          textAlign="center"
          sx={{
            color: "#000",
            typography: { md: "h1", xs: "h3" },
          }}
        >
          Help Animals
        </Typography>
        <Grid container spacing={7} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1542765826-d17aa264390d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpY2slMjBkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="sick dog"
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              right="0"
              left="0"
              justifyContent="center"
              textAlign="center"
              marginTop={{ md: "100px", xs: "0px" }}
              sx={{ typography: { md: "h5", xs: "body1" } }}
            >
              Animals need your support to find new owners, for health care and
              food. lorem ipsum dolor sit amet dolorem. Animals need your
              support to find new owners, for health care and food. lorem ipsum
              dolor sit amet dolorem
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 3 }}>
        <Button variant="contained" sx={{ p: 1 }}>
          <Typography variant="h5"> DONATE NOW </Typography>
        </Button>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/474x/db/c1/3f/dbc13fee7f9524000c84a851b814a0d6.jpg",
    title: "Feeding",
  },
  {
    img: "https://i.pinimg.com/474x/32/d7/fa/32d7fa3c8582d0a0100cc36589ae4abd.jpg",
    title: "Shelter",
  },
  {
    img: "https://i.pinimg.com/474x/bd/d0/af/bdd0afdceae1e9a7d7730534dd4d006e.jpg",
    title: "Education",
  },
  {
    img: "https://i.pinimg.com/474x/a0/f0/7a/a0f07a5fe2d519761de3d2ae0ee08e30.jpg",
    title: "Water",
  },
  {
    img: "https://i.pinimg.com/474x/d4/e9/fe/d4e9fee988dc55ce6cc701390daf5a09.jpg",
    title: "Health Care",
  },
  {
    img: "https://i.pinimg.com/474x/d7/75/e7/d775e7ab0cb51216b19602313145b0c5.jpg",
    title: "Disater Response",
  },
];

export default App;
