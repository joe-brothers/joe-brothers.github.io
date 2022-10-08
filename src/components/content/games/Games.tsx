import { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { GameCard } from "./GameCard";

const gameData: {
  gameTitle: string;
  gameSummary: string;
  gameImageSrc: string;
  onClickPlay: () => void;
  onClickShare: () => void;
}[] = [
  {
    gameTitle: "Joe's Minesweeper",
    gameSummary: "Cute simple minesweeper game that you can peek on answers and custom your own difficulty",
    gameImageSrc: "/assets/minesweeper.png",
    onClickPlay: () => (window.location.href = "https://joe-brothers.com/minesweeper/"),
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    gameTitle: "In preparation",
    gameSummary: "We are building amazing stuffs even now. Please wait a little bit.",
    gameImageSrc: "/assets/preparation2.png",
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
];

export const Games = () => {
  useEffect(() => window.scroll({ top: 0 }), []);

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 } }}>
      <Typography align="center" variant="h4" mb={{ xs: 5, md: 8 }}>
        ✨🎲 Here you can enjoy our games! 🎮🙌
      </Typography>
      <Grid container spacing={{ xs: 3, md: 6 }} mx="auto">
        {gameData.map((data) => (
          <Grid item xs={12} sm={6} md={4}>
            <GameCard {...data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
