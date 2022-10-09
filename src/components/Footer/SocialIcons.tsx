import { Facebook, LinkedIn, Twitter, GitHub, YouTube } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const SocialIcons = () => {
  return (
    <>
      <IconButton>
        <Facebook />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>
      <IconButton>
        <LinkedIn />
      </IconButton>
      <IconButton>
        <YouTube />
      </IconButton>
      <IconButton onClick={() => window.open("https://github.com/joe-brothers/joe-brothers.github.io", "_blank")}>
        <GitHub />
      </IconButton>
    </>
  );
};
