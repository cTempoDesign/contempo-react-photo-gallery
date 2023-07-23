import React from "react";
import "./Gallery.scss";

export type PhotoConfig = {
  path: string;
  alt?: string | "";
};

export type GalleryProps = {
  images: PhotoConfig[];
  spacing?: string;
  lazy?: boolean;
};

const Gallery = ({ images, lazy }: GalleryProps) => {
  return (
    <div className="wrapper">
      <div className="grid-container">
        {images.map((photo: PhotoConfig, index: number) => (
          <img
            style={{ width: "100%" }}
            key={index}
            src={photo.path}
            alt={photo.alt}
            loading={lazy ? "lazy" : "eager"}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
