import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import {
  Business as BusinessIcon,
  Menu as MenuIcon,
  Facebook,
  LinkedIn,
  Twitter,
  GitHub,
  YouTube,
} from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material/Select";

const MenuLink = styled(Link)(({ theme }) => ({
  fontFamily: "Roboto",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.light,
    cursor: "pointer",
  },
}));

const languages: string[] = ["English", "Korean"];

const footerMenu: Record<string, Record<string, string>[]> = {
  Products: [
    { Lorem: "/games" },
    { ipsum: "/games" },
    { dolor: "/games" },
    { sit: "/games" },
    { agsd: "/games" },
    { werq: "/games" },
  ],
  Solutions: [
    { Lorem: "/games" },
    { ipsum: "/games" },
    { dolor: "/games" },
    { sit: "/games" },
    { agsd: "/games" },
    { werq: "/games" },
  ],
  Developer: [
    { absdf: "/games" },
    { qweqtwe: "/games" },
    { fghjty: "/games" },
    { dfg: "/games" },
    { agassd: "/games" },
    { werq: "/games" },
  ],
  Resources: [
    { adtr: "/games" },
    { sdfas: "/games" },
    { xcvs: "/games" },
    { "hi hi hi hi hi hi": "/games" },
    { zxzzxv: "/games" },
    { werw: "/games" },
  ],
  Company: [
    { agw: "/games" },
    { vvvv: "/games" },
    { asdf: "/games" },
    { aah: "/games" },
    { asdfsd: "/games" },
    { eeee: "/games" },
  ],
  Support: [
    { asdfs: "/games" },
    { sdaf: "/games" },
    { sss: "/games" },
    { sit: "/games" },
    { agsd: "/games" },
    { aaaaaaa: "/games" },
  ],
};

const links: { [key: string]: string } = {
  "Terms of Service": "/games",
  "Privacy Policy": "/games",
  "Cookie Settings": "/games",
  "Sub-Processors": "/games",
};

export const Footer = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(languages[0]);
  const onChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: 10, pt: 5, pb: 10 }}>
      <Grid container spacing={2} columns={{ xs: 2, sm: 7 }}>
        <Grid item xs={2} sm={1}>
          <BusinessIcon sx={{ fontSize: 70 }} />
        </Grid>
        {Object.entries(footerMenu).map(([category, items]) => {
          return (
            <Grid item xs={1}>
              <Typography>{category}</Typography>
              <Divider sx={{ my: 1 }} />
              <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item) => {
                  return Object.entries(item).map(([key, value]) => (
                    <li style={{ wordBreak: "break-word" }}>
                      <MenuLink onClick={() => navigate(value)}>{key}</MenuLink>
                    </li>
                  ));
                })}
              </ul>
            </Grid>
          );
        })}
      </Grid>
      <Container disableGutters sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1 }}>
        <Box>
          <Typography>© 2022 Joe Brothers, Inc.</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none" }}>
            {Object.entries(links).map(([key, value]) => (
              <li>
                <MenuLink onClick={() => navigate(value)}>{key}</MenuLink>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="language-select">Language</InputLabel>
            <Select
              labelId="language-select"
              id="language-select"
              value={language}
              label="Language"
              onChange={onChangeLanguage}
            >
              {languages.map((lang) => (
                <MenuItem key={`menuitem_${lang}`} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <YouTube />
          </IconButton>
          <IconButton>
            <GitHub />
          </IconButton>
        </Box>
      </Container>
    </Container>
  );
};
