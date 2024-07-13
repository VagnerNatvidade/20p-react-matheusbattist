import Photo from "./photo";

function PhotoList({ photos, setEnlargedPhoto }) {
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

export default PhotoList;
