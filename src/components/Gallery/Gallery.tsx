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

// Left Chevron Component

const Overlay: FC<OverlayProps> = ({
  onClose,
  images,
  selectedIndex,
}: OverlayProps) => {
  const [currentImageIdx, setCurrentImagIdx] = useState(selectedIndex);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === images.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImagIdx(index);
  };

  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 1
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
        {showOverlay && selectedIndex && (
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
