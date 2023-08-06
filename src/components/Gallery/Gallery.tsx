import React, { FC, useState } from "react";
import "./Gallery.css";

export type PhotoConfig = {
  path: string;
  alt?: string | "";
};

export type GalleryProps = {
  images: PhotoConfig[];
  spacing?: string;
  lazy?: boolean;
  enableScroller?: boolean | true;
};

export interface OverlayProps {
  onClose: () => void;
}

// Left Chevron Component
const ChevronLeft: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M34.52 239.03L228.87 44.678c9.373-9.373 24.569-9.373 33.941 0l22.667 22.667c9.357 9.357 9.375 24.522.04 33.901L131.97 256l153.52 154.75c9.335 9.379 9.317 24.544-.04 33.901l-22.667 22.667c-9.373 9.373-24.569 9.373-33.941 0L34.52 272.97c-9.373-9.373-9.373-24.569 0-33.94z" />
  </svg>
);

// Right Chevron Component
const ChevronRight: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.03 256 34.484 101.255c-9.335-9.379-9.317-24.544 .04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z" />
  </svg>
);

const Overlay: FC<OverlayProps> = ({ onClose }) => {
  return (
    <div id="imageOverlay" className="overlay">
      <span onClick={onClose} className="close cursor">
        CLOSE
      </span>
      <div className="modal-contempo">
        <div className="mySlides responsive">
          <div className="numbertext"></div>
          <img className="responsive"></img>
        </div>
        <div className="image-button prev">
          <ChevronLeft />
        </div>
        <div className="image-button next">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

const ContempoGallery = ({ images, lazy }: GalleryProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="wrapper">
      <div className="grid-container">
        {images.map((photo: PhotoConfig, index: number) => (
          <span onClick={() => setShowOverlay(true)} key={index}>
            <img
              style={{ width: "100%" }}
              src={photo.path}
              alt={photo.alt}
              loading={lazy ? "lazy" : "eager"}
            />
          </span>
        ))}
        {showOverlay && (
          <Overlay onClose={() => setShowOverlay(false)}></Overlay>
        )}
      </div>
    </div>
  );
};

export default ContempoGallery;
