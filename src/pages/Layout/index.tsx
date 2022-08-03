import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

import helicopter from "../../assets/helicopter.png";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack height="100vh">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <Link
                component={RouterLink}
                to="/"
                onClick={() => setAnchorEl(null)}
              >
                Главная
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                component={RouterLink}
                to="setting"
                onClick={() => setAnchorEl(null)}
              >
                Настройки
              </Link>
            </MenuItem>
          </Menu>
          <img
            src={helicopter}
            alt="Screed counter"
            height="40px"
            width="40px"
          />
          <Typography
            ml={2}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Screed counter
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ flex: "1" }}>{children}</Container>
      <Stack
        alignSelf="flex-end"
        height="56px"
        width="100%"
        sx={{ background: "#1976d2" }}
      ></Stack>
    </Stack>
  );
};

export default Layout;
