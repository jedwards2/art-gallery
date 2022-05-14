import { useParams } from "react-router-dom";

function GalleryView(props) {
  let { galleryId } = useParams();
  let galleries = props.galleries;

  let gallery = galleries.find((gallery) => gallery.id === parseInt(galleryId));
  return (
    <div>
      <h2>{gallery.name}</h2>
    </div>
  );
}

export default GalleryView;
