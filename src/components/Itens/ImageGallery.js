import { ImageViewer } from "react-image-viewer-dv"

export const ImageGallery = ({ img, alt }) => {
  return (
    <ImageViewer>
      <img
        src={img}
        alt={alt}
        className="img-fluid"
        style={{ width: "100%", height: "100%",objectFit:"cover",objectPosition:"" }}
      />
    </ImageViewer>
  );
};