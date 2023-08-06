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
        <a className="image-button prev">
          <i className="material-icons caro-icon md-58">chevron_left</i>
        </a>
        <a className="image-button next">
          <i className="material-icons caro-icon md-58">chevron_right</i>
        </a>
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
