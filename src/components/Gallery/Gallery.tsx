import React from "react";

export type PhotoConfig = {
  path: string;
  alt?: string | "";
};

export type GalleryProps = {
  images: PhotoConfig[];
  spacing?: string;
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div>
      {images.map((photo, index) => (
        <div key={index}>
          <img src={photo.path} alt={photo.alt} />;
        </div>
      ))}
    </div>
  );
};

export default Gallery;
