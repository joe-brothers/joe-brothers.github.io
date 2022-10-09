import type { CardWithThumbnailData } from "../types";
import { openLinkInNewTab } from "../utils";

export const links = {
  GooglePlay: "https://play.google.com/store/apps/dev?id=8562056654217636569&hl=en_US&gl=US",
  GitHub: "https://github.com/joe-brothers",
  PrivacyPolicy: "https://joe-brothers.com/privacy-policy-impermanent-loss-calculator.html",
  Mail: "mailto:contact@joe-brothers.com",
  game: {
    minesweeper: "https://joe-brothers.com/minesweeper/",
  },
  utility: {
    impermanent:
      "https://play.google.com/store/apps/details?id=com.joebrothers.impermanent_loss_calculator&hl=en_US&gl=US",
  },
};

export const gameData: CardWithThumbnailData = [
  {
    title: "Joe's Minesweeper",
    summary: "Cute simple minesweeper game that you can peek on answers and custom your own difficulty",
    thumbnail: { kind: "image", imageSrc: "/assets/minesweeper.png", imageAlt: "minesweeper game" },
    onClickPlay: () => openLinkInNewTab(links.game.minesweeper),
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⏳" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔨" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🛠️" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🪧" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔧" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⚙️" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
];

export const utilityData: CardWithThumbnailData = [
  {
    title: "Impermanent Loss Calculator",
    summary:
      "Impermanent Loss happens when you provided liquidity to a liquidity pool and the price of the asset in the pool changes. But how much is it exactly? With 'Impermanent Loss Calculator', you can simply calculate this.",
    thumbnail: { kind: "image", imageSrc: "/assets/impermanent.png", imageAlt: "Impermanent Loss Calculator" },
    onClickPlay: () => openLinkInNewTab(links.utility.impermanent),
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⚒️" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "📖" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⏳" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔨" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🛠️" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🪧" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔧" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⚙️" },
    onClickPlay: () => {
      return;
    },
    onClickShare: () => console.log("share clicked"),
  },
];
