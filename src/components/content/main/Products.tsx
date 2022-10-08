import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductWithImage } from "./ProductWithImage";

export const Products = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ display: "flex", flexDirection: "column", gap: 80 }}>
      <ProductWithImage
        imageSrc="/assets/illustration3.png"
        productName="Games"
        title="Fun, addictive games"
        explanation="Conquer the world with games"
        explanationDetails={[
          "Build modern chat and messaging experiences with delivery receipts, offline messaging, presence, translation, moderation tools, and analytics.",
          "Get started quickly with Sendbird UIKit, with elegant pre-built UI components, and ship chat in days.",
        ]}
        linkText="See our games"
        onClickLink={() => navigate("/games")}
      />
      <ProductWithImage
        isImageLeft={true}
        imageSrc="/assets/illustration1.png"
        productName="SENDBIRD CALLS"
        title="In-app voice and video calls"
        explanation="From healthcare to dating to customer service, connecting users with our voice and video APIs has never been easier."
        explanationDetails={[
          "Clear faces. No lags. Sendbird Calls for voice and video just works so your users get to socialize in your app as they would in real life.",
          "Combine chat, voice, and video so users get access to all the right experiences they have come to expect.",
        ]}
        linkText="Learn about our voice API and video API"
        onClickLink={() => navigate("/games")}
      />
      <ProductWithImage
        imageSrc="/assets/illustration5.png"
        productName="SENDBIRD DESK"
        title="Easy in-app chat support for your customers"
        explanation="Power live chat support right within your app’s messaging experience. Push notifications keep your customers informed and engaged."
        explanationDetails={[
          "Deliver on-demand chat support in-app and in-context of their issue for easier faster resolutions.",
          "Intuitive agent interface to manage the queue, route support tickets, view customer context, and monitor responses.",
        ]}
        linkText="Learn about chat support"
        onClickLink={() => navigate("/games")}
      />
    </Container>
  );
};
