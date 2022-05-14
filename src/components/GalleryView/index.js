import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/index.js";

function GalleryView(props) {
  let { galleryId } = useParams();
  let galleries = props.galleries;

  let gallery = galleries.find((gallery) => gallery.id === parseInt(galleryId));
  let imageTiles = gallery.objects.map((obj) => (
    <ArtImageTile art={obj.images[0]} id={gallery.id} />
  ));
  return (
    <div>
      <h2>{gallery.name}</h2>
      <Route exact path="/galleries/:galleryId">
        {imageTiles}
      </Route>
    </div>
  );
}

export default GalleryView;
