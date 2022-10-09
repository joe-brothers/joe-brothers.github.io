import { Divider, Grid, Link, styled, Typography } from "@mui/material";
import { Business as BusinessIcon } from "@mui/icons-material";

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
    { Minesweeper: () => window.open("https://joe-brothers.com/minesweeper/", "_blank") },
    { Pinball: () => console.log("tmp") },
    { "Spider Solitaire": () => console.log("tmp") },
    { Ranking: () => console.log("tmp") },
    { Community: () => console.log("tmp") },
  ],
  Utilities: [
    {
      "Impermenant Loss Calculator": () =>
        window.open(
          "https://play.google.com/store/apps/details?id=com.joebrothers.impermanent_loss_calculator&hl=en_US&gl=US",
          "_blank",
        ),
    },
    { "in preparation": () => console.log("tmp") },
    { "in preparation": () => console.log("tmp") },
    { "in preparation": () => console.log("tmp") },
    { "in preparation": () => console.log("tmp") },
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
