import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation(props) {
  let galleries = props.galleries;

  return (
    <nav>
      <h1>Galleries</h1>
      <div className="gallery-div">
        <NavLink to="/" exact>
          Home{"   "}
        </NavLink>

        {galleries.map((gallery) => (
          <NavLink key={gallery.id} to={"/galleries/" + gallery.id}>
            {gallery.name + " "}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default GalleryNavigation;
