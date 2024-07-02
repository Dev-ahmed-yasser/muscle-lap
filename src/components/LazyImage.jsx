import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function LazyImage({ src, alt }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={"272px"}
      height={"272px"}
      className="object-cover"
      effect="blur"
      placeholderSrc="https://via.placeholder.com/272x272"
    />
  );
}
export default LazyImage;
