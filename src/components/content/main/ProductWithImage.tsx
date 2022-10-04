import { Grid, Typography } from "@mui/material";
import { LinkWithArrow } from "../../LinkWithArrow";

export const ProductWithImage = ({
  isImageLeft = false,
  imageSrc,
  productName,
  title,
  explanation,
  explanationDetails,
  linkText,
  onClickLink,
}: {
  isImageLeft?: boolean;
  imageSrc: string;
  productName: string;
  title: string;
  explanation: string;
  explanationDetails: string[];
  linkText: string;
  onClickLink: object;
}) => {
  return (
    <Grid container spacing={5} direction={{ xs: "row", sm: isImageLeft ? "row" : "row-reverse" }}>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <img src={imageSrc} style={{ display: "block", margin: "auto", width: "100%" }} />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
        <Typography variant="h6">{productName}</Typography>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography>{explanation}</Typography>
        <ul>
          {explanationDetails.map((exp) => (
            <li>{exp}</li>
          ))}
        </ul>
        <LinkWithArrow text={linkText} onClick={onClickLink} />
      </Grid>
    </Grid>
  );
};
