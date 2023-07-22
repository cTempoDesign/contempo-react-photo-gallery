import React from "react";

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
    <div>
      {images.map((photo: PhotoConfig, index: number) => (
        <div key={index}>
          <img
            src={photo.path}
            alt={photo.alt}
            loading={lazy ? "lazy" : "eager"}
          />
          ;
        </div>
      ))}
    </div>
  );
};

export default Gallery;
