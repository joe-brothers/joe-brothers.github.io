import { Container } from '@mui/material';
import { ProductWithImage } from './ProductWithImage';

export const Products = () => {
  return (
    <section style={{display: 'flex', flexDirection: 'column', gap: 80}}>
      <ProductWithImage
        imageSrc='/assets/illustration3.png'
        productName='SENDBIRD CHAT'
        title='In-app chat experiences users will love'
        explanation='An easy-to-use Chat API, native Chat SDKs, and a fully-managed chat platform on the backend means faster time-to-market.'
        explanationDetails={[
          'Build modern chat and messaging experiences with delivery receipts, offline messaging, presence, translation, moderation tools, and analytics.',
          'Get started quickly with Sendbird UIKit, with elegant pre-built UI components, and ship chat in days.'
        ]}
        linkText="Learn about our chat API"
      />
      <ProductWithImage
        isImageLeft={true}
        imageSrc='/assets/illustration1.png'
        productName='SENDBIRD CALLS'
        title='In-app voice and video calls'
        explanation='From healthcare to dating to customer service, connecting users with our voice and video APIs has never been easier.'
        explanationDetails={[
          'Clear faces. No lags. Sendbird Calls for voice and video just works so your users get to socialize in your app as they would in real life.',
          'Combine chat, voice, and video so users get access to all the right experiences they have come to expect.',
        ]}
        linkText="Learn about our voice API and video API"
      />
      <ProductWithImage
        imageSrc='/assets/illustration5.png'
        productName='SENDBIRD DESK'
        title='Easy in-app chat support for your customers'
        explanation='Power live chat support right within your app’s messaging experience. Push notifications keep your customers informed and engaged.'
        explanationDetails={[
          'Deliver on-demand chat support in-app and in-context of their issue for easier faster resolutions.',
          'Intuitive agent interface to manage the queue, route support tickets, view customer context, and monitor responses.'
        ]}
        linkText="Learn about chat support"
      />
    </section>
  )
};