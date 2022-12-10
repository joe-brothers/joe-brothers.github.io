import { Divider, Grid, Link, styled, Typography } from "@mui/material";
import { footerMenuData } from "../../data";
import { ReactComponent as Logo } from "../../../public/assets/logo.svg";

const MenuLink = styled(Link)(({ theme }) => ({
  fontFamily: "Roboto",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.light,
    cursor: "pointer",
  },
}));

export const FooterMenu = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 2, sm: 5 }}>
      <Grid item xs={2} sm={1} sx={{ svg: { color: "red" } }}>
        <Logo style={{ width: "50%", maxWidth: 80, maxHeight: 80, fill: "#808080" }} />
      </Grid>
      {Object.entries(footerMenuData).map(([category, items]) => {
        return (
          <Grid key={`menu_footer_${category}`} item xs={1}>
            <Typography>{category}</Typography>
            <Divider sx={{ my: 1 }} />
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {items.map((item) => {
                return Object.entries(item).map(([text, onClick]) => (
                  <li key={`menu_footer_${category}_${text}`} style={{ wordBreak: "break-word" }}>
                    <MenuLink onClick={() => onClick()}>{text}</MenuLink>
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
