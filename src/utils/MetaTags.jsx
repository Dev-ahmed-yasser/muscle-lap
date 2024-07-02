import { Helmet } from "react-helmet";
import homePageImage from "../assets/homepage.png";
export const MetaTags = ({ description, title, url, img, children }) => {
  const $title = title || "MuscleLap | We forge champions, lap after lap";
  const $description =
    description ||
    "Reach your fitness goals at MuscleLap! We offer a variety of classes, equipment, and expert trainers to help you get stronger, healthier, and happier";
  const $url = url || "https://muscle-lap.vercel.app";
  const $image = img || homePageImage;

  return (
    <Helmet>
      {children}
      {/* <!-- Primary Meta Tags --> */}
      <meta name="theme-color" content="#fff" />
      <title>{$title}</title>
      <meta name="description" content={$description} />
      <meta name="keywords" content="musclelap,muscles,fitness,workout,gym" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={$url} />
      <meta property="og:title" content={$title} />
      <meta property="og:description" content={$description} />
      <meta property="og:image" content={$image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={$url} />
      <meta property="twitter:title" content={$url} />
      <meta property="twitter:description" content={$description} />
      <meta property="twitter:image" content={$image} />
    </Helmet>
  );
};
