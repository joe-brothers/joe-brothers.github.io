import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Thumbnail } from "../../../types";

const getThumbnail = ({ thumbnail, onClickPlay }: { thumbnail: Thumbnail; onClickPlay?: () => void }) => {
  switch (thumbnail.kind) {
    case "image":
      return (
        <CardMedia
          component="img"
          image={thumbnail.imageSrc}
          alt={thumbnail.imageAlt}
          onClick={onClickPlay}
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
  onClickPlay,
  onClickShare,
}: {
  title: string;
  summary: string;
  thumbnail: Thumbnail;
  onClickPlay: () => void;
  onClickShare: () => void;
}) => {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto" }}>
      {getThumbnail({ thumbnail, onClickPlay })}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClickPlay}>
          Play
        </Button>
        <Button size="small" onClick={onClickShare}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
