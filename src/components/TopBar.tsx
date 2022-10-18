import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const pages: { [key: string]: string }[] = [
  { Games: "/games" },
  { Utilities: "/utility" },
  { Blog: "/blog" },
  { Company: "/company" },
];

export const TopBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="transparent" elevation={5} sx={{ backdropFilter: "blur(10px)" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src="assets/logo.png" width={20} style={{ marginRight: 10 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "block",
              fontFamily: "Source Code Pro",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            John
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={`menu_side_${Object.entries(page)[0][0]}`}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(Object.entries(page)[0][1]);
                  }}
                >
                  <Typography textAlign="center">{Object.entries(page)[0][0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={`menu_center_${Object.entries(page)[0][0]}`}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(Object.entries(page)[0][1]);
                }}
                sx={{ my: 2, color: "inherit", display: "block" }}
              >
                {Object.entries(page)[0][0]}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
            <Tooltip title="I'm tooltip">
              <Button variant="text">Text</Button>
            </Tooltip>
            <Tooltip title="I'm saying blah blah">
              <Button variant="contained" sx={{ ml: 1 }}>
                BlahBlah
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
