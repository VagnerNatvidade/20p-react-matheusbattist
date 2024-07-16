import React from "react";
import { Photo } from "./Photo";

export function PhotoList({ photos, setEnlargedPhoto }) {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          data={photo}
          setEnlargedPhoto={setEnlargedPhoto}
        />
      ))}
    </div>
  );
}
