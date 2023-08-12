"use client";
import React, { FC, useState } from "react";
import "./Gallery.css";
import { ChevronLeft, ChevronRight } from "./ui/chevrons";

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
  images: PhotoConfig[];
  selectedIndex: number;
}

const Overlay: FC<OverlayProps> = ({
  onClose,
  images,
  selectedIndex,
}: OverlayProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(selectedIndex);
  const prevSlide = () => {
    const resetToVeryBack = currentImageIndex === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIndex === images.length - 1;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const activeImageSourcesFromState: PhotoConfig[] = images.slice(
    currentImageIndex,
    currentImageIndex + 1
  );

  return (
    <div id="imageOverlay" className="overlay">
      <span onClick={onClose} className="close cursor">
        CLOSE
      </span>
      <div className="image-container">
        {activeImageSourcesFromState.map((image, index) => (
          <img key={index} src={image.path} alt={image.alt} />
        ))}
        <div className="image-button prev">
          <ChevronLeft onClick={prevSlide} />
        </div>
        <div className="image-button next">
          <ChevronRight onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

const ContempoGallery = ({ images, lazy }: GalleryProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onImageClick = (index: number) => {
    setSelectedIndex(index);
    setShowOverlay(true);
  };

  return (
    <div className="wrapper">
      <div className="grid-container">
        {images.map((photo: PhotoConfig, index: number) => (
          <span onClick={() => onImageClick(index)} key={index}>
            <img
              style={{ width: "100%" }}
              src={photo.path}
              alt={photo.alt}
              loading={lazy ? "lazy" : "eager"}
            />
          </span>
        ))}
        {showOverlay && selectedIndex != null && (
          <Overlay
            onClose={() => setShowOverlay(false)}
            images={images}
            selectedIndex={selectedIndex}
          ></Overlay>
        )}
      </div>
    </div>
  );
};

export default ContempoGallery;
