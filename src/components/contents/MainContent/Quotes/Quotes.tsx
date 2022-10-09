import { Container } from "@mui/material";
import { Quote } from "./Quote";

const quotesData = [
  {
    logoSrc: "/assets/illustration1.png",
    quote: "Their games are fun, pretty, amazing.",
    position: "One of my friends",
    company: "Jane Doe",
  },
  {
    logoSrc: "/assets/illustration2.png",
    quote: "If possible, I'd would love to hire them with $1 million salary.",
    position: "Boss of some company",
    company: "John Doe",
  },
  {
    logoSrc: "/assets/illustration3.png",
    quote: "Their games are truly fun, pretty, amazing.",
    position: "Our loyal customer",
    company: "Mark",
  },
  {
    logoSrc: "/assets/illustration4.png",
    quote: "With Joe's apps, my life got much easier. Thank you, Joe Brothers!",
    position: "Reviewer",
    company: "Scarlette",
  },
];

export const Quotes = () => {
  return (
    <section style={{ backgroundColor: "#f7f7f7" }}>
      <Container style={{ display: "flex", gap: 20 }} sx={{ py: 5, flexDirection: { xs: "column", md: "row" } }}>
        {quotesData.map((data) => (
          <Quote key={`quote_${data.company}`} {...data} />
        ))}
      </Container>
    </section>
  );
};
