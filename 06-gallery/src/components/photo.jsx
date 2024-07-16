import React from "react";

export function Photo({ data, setEnlargedPhoto }) {
  return (
    <div className="photo" onClick={() => setEnlargedPhoto(data)}>
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  );
}
