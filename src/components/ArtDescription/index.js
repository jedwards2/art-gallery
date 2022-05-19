import { Link, useParams } from "react-router-dom";

function ArtDescription(props) {
  let gallery = props.gallery;
  let { artId } = useParams();

  let artwork = gallery.objects.find((obj) => obj.id === parseInt(artId));
  // console.log(test);
  // let artwork = gallery.objects[0];

  return (
    <div>
      {artwork.images.map((img) => (
        <img src={img.baseimageurl} alt={img.imageid}></img>
      ))}
      <p>{artwork.description}</p>
      <p>{artwork.technique}</p>
      <h4>{artwork.creditline}</h4>
      <Link to={"/galleries/" + gallery.id}>Back to Gallery</Link>
    </div>
  );
}

export default ArtDescription;
