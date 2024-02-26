import React, { useEffect } from "react";
// import { Collapse, initCollapse } from "mdb-ui-kit"; // Import from "mdb-ui-kit" instead of "mdb-ui-kit"
// initMDB({ Collapse }); // Initialize the Collapse component
import "./Styles/categories.css";

const Categories = () => {
  // useEffect(() => {
    // Initialize the Collapse component once the component is mounted
  //   initCollapse();
  // }, []);

  return (
   
    <nav className="navwrapper navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Children
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Categories;
