import { ImageViewer } from "react-image-viewer-dv"

export const ImageGallery = ({img,alt}) => {
    return (
        <div>
          <ImageViewer>
            <img src={img} alt={alt} className="mb-3"/>
          </ImageViewer>
        </div>
    )
}