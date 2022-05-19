import { Link } from "react-router-dom";
import "./ArtImageTile.css";

function ArtImageTile(props) {
  return (
    <div>
      <Link to={"/galleries/" + props.id + "/art/" + props.artid}>
        <img
          src={props.art.baseimageurl}
          alt={props.art.alttext}
          className="art-image"
        ></img>
      </Link>
    </div>
  );
}
export default ArtImageTile;
