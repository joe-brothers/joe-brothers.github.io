import { Container } from "@mui/material";
import { Quote } from "./Quote";

const quotesData = [
  {
    logoSrc: '/assets/illustration1.png',
    quote: 'Sendbird powers our core transaction flows via a fast and reliable messaging layer between our buyers and sellers.',
    position: 'Head of Engineering',
    company: 'Carousell'
  },
  {
    logoSrc: '/assets/illustration2.png',
    quote: 'With Sendbird we provide a 100% digital customer support experience for our customers with native in-app chat based interactions.',
    position: 'Senior Manager',
    company: 'Virgin Mobile UAE'
  },
  {
    logoSrc: '/assets/illustration3.png',
    quote: 'Sendbird’s client base gave us confidence that they would be able to handle our traffic and projected growth.',
    position: 'CTO',
    company: 'Hinge'
  },
  {
    logoSrc: '/assets/illustration4.png',
    quote: 'With Sendbird’s developer-friendly chat API and SDKs we were quickly able to build in-app chat.',
    position: 'Director of Product Management',
    company: 'Accolade'
  },
];

export const Quotes = () => {
  return (
    <Container disableGutters
      style={{display: 'flex', gap: 20, backgroundColor: '#f7f7f7'}}
      sx={{p: 5, flexDirection: {xs: 'column',md: 'row'}}}
    >
      {quotesData.map((data) => <Quote {...data}/>)}
    </Container>
  )
};