import { LinkedIn, GitHub, Shop } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { links } from "../../data";
import { openLinkInNewTab } from "../../utils";

export const SocialIcons = () => {
  return (
    <>
      <IconButton>
        <Shop onClick={() => openLinkInNewTab(links.GooglePlay)} />
      </IconButton>
      <IconButton>
        <LinkedIn onClick={() => openLinkInNewTab(links.LinkedIn)} />
      </IconButton>
      <IconButton onClick={() => openLinkInNewTab(links.GitHub)}>
        <GitHub />
      </IconButton>
    </>
  );
};
