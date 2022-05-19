import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/index.js";
import ArtDescription from "../ArtDescription/index.js";
import "./GalleryView.css";

function GalleryView(props) {
  let { galleryId } = useParams();
  let galleries = props.galleries;

  let gallery = galleries.find((gallery) => gallery.id === parseInt(galleryId));
  let imageTiles = gallery.objects.map((obj) => (
    <ArtImageTile art={obj.images[0]} id={gallery.id} artid={obj.id} />
  ));
  return (
    <div>
      <h2>{gallery.name}</h2>
      <div className="image-div">
        <Route exact path="/galleries/:galleryId">
          {imageTiles}
        </Route>
        <Route exact path="/galleries/:galleryId/art/:artId">
          <ArtDescription gallery={gallery} />
        </Route>
      </div>
    </div>
  );
}

export default GalleryView;
