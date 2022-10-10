import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, FormControl, InputLabel, Link, MenuItem, Select, styled, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { SocialIcons } from "./SocialIcons";
import { FooterMenu } from "./FooterMenu";

const MenuLink = styled(Link)(({ theme }) => ({
  fontFamily: "Roboto",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.light,
    cursor: "pointer",
  },
}));

const languages: string[] = ["English", "Korean"];

const links: { [key: string]: string } = {
  "ABCDEFGH": "/",
  "Privacy Policy": "/privacy-policy",
  "Cookie Settings": "/",
  "Sub-Processors": "/",
};

export const Footer = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(languages[0]);
  const onChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: 10, pt: 5, pb: 10 }}>
      <FooterMenu />
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
          <SocialIcons />
        </Box>
      </Container>
    </Container>
  );
};
