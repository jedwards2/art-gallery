import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation(props) {
  let galleries = props.galleries;

  return (
    <nav className="gallery-nav">
      <h1>Galleries</h1>
      <div className="gallery-div">
        <NavLink to="/" exact className="nav-link">
          Home{"   "}
        </NavLink>

        {galleries.map((gallery) => (
          <NavLink
            key={gallery.id}
            to={"/galleries/" + gallery.id}
            className="nav-link"
          >
            {gallery.name + " "}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default GalleryNavigation;
