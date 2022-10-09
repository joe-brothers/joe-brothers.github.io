import { Divider, Grid, Link, styled, Typography } from "@mui/material";
import { Business as BusinessIcon } from "@mui/icons-material";
import { openLinkInNewTab } from "../../utils";
import { links } from "../../data";

const MenuLink = styled(Link)(({ theme }) => ({
  fontFamily: "Roboto",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.light,
    cursor: "pointer",
  },
}));

const footerMenuData: Record<string, Record<string, () => void>[]> = {
  Games: [
    { Minesweeper: () => openLinkInNewTab(links.game.minesweeper) },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
  ],
  Utilities: [
    {
      "Impermenant Loss Calculator": () => openLinkInNewTab(links.utility.impermanent),
    },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
  ],
  Developer: [
    { "GitHub Organization": () => openLinkInNewTab(links.GitHub) },
    { "Google Play": () => openLinkInNewTab(links.GooglePlay) },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
    { "-": () => console.log("tmp") },
  ],
  Company: [
    { About: () => console.log("tmp") },
    { Careers: () => console.log("tmp") },
    { Blog: () => console.log("tmp") },
    { Events: () => console.log("tmp") },
    { "Contact Us": () => openLinkInNewTab(links.Mail) },
  ],
};

export const FooterMenu = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 2, sm: 5 }}>
      <Grid item xs={2} sm={1}>
        <BusinessIcon sx={{ fontSize: 70 }} />
      </Grid>
      {Object.entries(footerMenuData).map(([category, items]) => {
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
  );
};
