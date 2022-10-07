import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

export const GameCard = ({
  gameTitle,
  gameSummary,
  gameImageSrc,
  onClickPlay,
  onClickShare,
}: {
  gameTitle: string;
  gameSummary: string;
  gameImageSrc: string;
  onClickPlay: () => void;
  onClickShare: () => void;
}) => {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto" }}>
      <CardMedia component="img" image={gameImageSrc} alt="minesweeper game" />
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
