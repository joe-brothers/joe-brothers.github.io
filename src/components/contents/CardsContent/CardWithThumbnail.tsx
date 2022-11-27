import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Thumbnail } from "../../../types";
import { openLinkInNewTab } from "../../../utils";

const getThumbnail = ({ thumbnail, link }: { thumbnail: Thumbnail; link?: string }) => {
  switch (thumbnail.kind) {
    case "image":
      return (
        <CardMedia
          component="img"
          image={thumbnail.imageSrc}
          alt={thumbnail.imageAlt}
          onClick={link ? () => openLinkInNewTab(link) : () => {}}
          sx={{ "&:hover": { cursor: "pointer" } }}
        />
      );
    case "emoji":
      return (
        <CardContent sx={{ position: "relative", height: "150px", backgroundColor: "#e6e6e6", userSelect: "none" }}>
          <div
            style={{
              fontSize: "3rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {thumbnail.emojiString}
          </div>
        </CardContent>
      );
    default:
      return <div>Thumbnail Error</div>;
  }
};

export const CardWithThumbnail = ({
  title,
  summary,
  thumbnail,
  link,
}: {
  title: string;
  summary: string;
  thumbnail: Thumbnail;
  link?: string;
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const onClickShare = () => {
    if (!link) {
      return;
    }
    navigator.clipboard.writeText(`<${title}>\n${summary}\n${link}`);
    setOpen(true);
  };

  return (
    <Card sx={{ maxWidth: 400, mx: "auto" }}>
      {getThumbnail({ thumbnail, link })}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={link ? () => openLinkInNewTab(link) : () => {}}>
          Play
        </Button>
        <Button size="small" onClick={onClickShare}>
          Share
        </Button>
      </CardActions>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Copyed link to clipboard"
        action={action}
      />
    </Card>
  );
};
