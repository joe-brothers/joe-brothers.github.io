import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

interface Image {
  kind: "image";
  gameImageSrc: string;
  gameImageAlt: string;
}
interface Emoji {
  kind: "emoji";
  emojiString: string;
}

type Thumbnail = Image | Emoji;

const getThumbnail = (thumbnail: Thumbnail) => {
  switch (thumbnail.kind) {
    case "image":
      return <CardMedia component="img" image={thumbnail.gameImageSrc} alt={thumbnail.gameImageAlt} />;
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

export const GameCard = ({
  gameTitle,
  gameSummary,
  thumbnail,
  onClickPlay,
  onClickShare,
}: {
  gameTitle: string;
  gameSummary: string;
  thumbnail: Thumbnail;
  onClickPlay: () => void;
  onClickShare: () => void;
}) => {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto" }}>
      {getThumbnail(thumbnail)}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {gameTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {gameSummary}
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
