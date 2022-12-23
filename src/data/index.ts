import type { CardWithThumbnailData } from "../types";
import { openLinkInNewTab } from "../utils";
import { blogPostingData } from "./blogPostingData";

export const links = {
  GooglePlay: "https://play.google.com/store/apps/dev?id=8562056654217636569&hl=en_US&gl=US",
  GitHub: "https://github.com/joe-brothers",
  LinkedIn: "https://www.linkedin.com/company/joe-brothers/",
  PrivacyPolicy: "https://joe-brothers.com/privacy-policy-impermanent-loss-calculator.html",
  Blog: "https://joe-brothers.com/blog/",
  game: {
    minesweeper: "https://joe-brothers.com/minesweeper/",
  },
  utility: {
    impermanent:
      "https://play.google.com/store/apps/details?id=com.joebrothers.impermanent_loss_calculator&hl=en_US&gl=US",
    age: "https://joe-brothers.com/age-calculator/",
    list: "https://joe-brothers.com/list-randomizer/",
  },
};

export const gameData: CardWithThumbnailData = [
  {
    title: "Joe's Minesweeper",
    summary: "Cute simple minesweeper game that you can peek on answers and custom your own difficulty",
    thumbnail: { kind: "image", imageSrc: "/assets/game-mine.png", imageAlt: "minesweeper game" },
    link: links.game.minesweeper,
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⏳" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔨" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🛠️" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🪧" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔧" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⚙️" },
  },
];

export const utilityData: CardWithThumbnailData = [
  {
    title: "Impermanent Loss Calculator",
    summary:
      "Impermanent Loss happens when you provided liquidity to a liquidity pool and the price of the asset in the pool changes. But how much is it exactly? With 'Impermanent Loss Calculator', you can simply calculate this.",
    thumbnail: { kind: "image", imageSrc: "/assets/util-loss.png", imageAlt: "Impermanent Loss Calculator" },
    link: links.utility.impermanent,
  },
  {
    title: "Korean Age Calculator",
    summary: "You know what? Koreans have three ages.",
    thumbnail: { kind: "image", imageSrc: "/assets/util-age.png", imageAlt: "Korean Age Calculator" },
    link: links.utility.age,
  },
  {
    title: "List Randomizer",
    summary: "We'll keep our fingers crossed for you.",
    thumbnail: { kind: "image", imageSrc: "/assets/util-list.gif", imageAlt: "List Randomizer" },
    link: links.utility.list,
  },

  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⏳" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔨" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🛠️" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🪧" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "🔧" },
  },
  {
    title: "In preparation",
    summary: "We are building amazing stuffs even now. Please wait a little bit.",
    thumbnail: { kind: "emoji", emojiString: "⚙️" },
  },
];

export const footerMenuData: Record<string, Record<string, () => void>[]> = {
  Games: gameData
    .filter((card) => card.link !== undefined)
    .map((card) => {
      return { [card.title]: () => openLinkInNewTab(card.link || `.`) };
    }),
  Utilities: utilityData
    .filter((card) => card.link !== undefined)
    .map((card) => {
      return { [card.title]: () => openLinkInNewTab(card.link || `.`) };
    }),
  Developer: [
    { "GitHub Organization": () => openLinkInNewTab(links.GitHub) },
    { "Google Play": () => openLinkInNewTab(links.GooglePlay) },
  ],
  Company: [{ About: () => openLinkInNewTab(`./#/company`) }],
};

export { blogPostingData };
