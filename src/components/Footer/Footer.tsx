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

const footerMenu: Record<string, Record<string, () => void>[]> = {
  Solutions: [
    { Marketplaces: () => console.log("tmp") },
    { "On-demand": () => console.log("tmp") },
    { Digital: () => console.log("tmp") },
    { "Live Streaming": () => console.log("tmp") },
    { "Financial services": () => console.log("tmp") },
  ],
  Resources: [{ Customers: () => console.log("tmp") }, { "Security & Compliance": () => console.log("tmp") }],
  Games: [
    { Minesweeper: () => console.log("tmp") },
    { Pinball: () => console.log("tmp") },
    { "Spider Solitaire": () => console.log("tmp") },
    { Ranking: () => console.log("tmp") },
    { Community: () => console.log("tmp") },
  ],
  Developer: [
    { "Developer Portal": () => console.log("tmp") },
    { Documentation: () => console.log("tmp") },
    { Demos: () => console.log("tmp") },
    { Tutorials: () => console.log("tmp") },
    { FAQ: () => console.log("tmp") },
  ],
  Company: [
    { About: () => console.log("tmp") },
    { Careers: () => console.log("tmp") },
    { Blog: () => console.log("tmp") },
    { Events: () => console.log("tmp") },
    { "Contact Us": () => console.log("tmp") },
  ],
  Support: [{ "Help Center": () => console.log("tmp") }, { "Support Policy": () => console.log("tmp") }],
};

const links: { [key: string]: string } = {
  "Terms of Service": "/games",
  "Privacy Policy": "/privacy-policy",
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
            <Grid key={`menu_footer_${category}`} item xs={1}>
              <Typography>{category}</Typography>
              <Divider sx={{ my: 1 }} />
              <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item) => {
                  return Object.entries(item).map(([key, value]) => (
                    <li key={`menu_footer_${category}_${key}`} style={{ wordBreak: "break-word" }}>
                      <MenuLink onClick={() => value()}>{key}</MenuLink>
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
              <li key={`footer_link_${key}`}>
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
                <MenuItem key={`menuitem_lang_${lang}`} value={lang}>
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
          <IconButton onClick={() => window.open("https://github.com/joe-brothers/joe-brothers.github.io", "_blank")}>
            <GitHub />
          </IconButton>
        </Box>
      </Container>
    </Container>
  );
};
