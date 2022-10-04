import { Link, styled } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const CustomLink = styled(Link)(({ theme }) => ({
  fontFamily: "Roboto",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
    svg: {
      right: -8,
    },
  },
  svg: {
    fontSize: "1rem",
    transition: ".2s all",
    position: "relative",
    right: -3,
  },
}));

// any 수정
export const LinkWithArrow = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <CustomLink onClick={onClick}>
      {text}
      <ArrowForward />
    </CustomLink>
  );
};
