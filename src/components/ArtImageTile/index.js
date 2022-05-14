import { Link } from "react-router-dom";

function ArtImageTile(props) {
  return (
    <div>
      <Link to={"/galleries/" + props.id + "/art/" + props.art.imageid}>
        <img src={props.art.baseimageurl} alt={props.art.alttext}></img>
      </Link>
    </div>
  );
}
export default ArtImageTile;
