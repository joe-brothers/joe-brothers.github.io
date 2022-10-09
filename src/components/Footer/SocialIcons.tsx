import { Facebook, LinkedIn, Twitter, GitHub, YouTube } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { links } from "../../data";
import { openLinkInNewTab } from "../../utils";

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
      <IconButton onClick={() => openLinkInNewTab(links.GitHub)}>
        <GitHub />
      </IconButton>
    </>
  );
};
