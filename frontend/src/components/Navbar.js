import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <MDBIcon fas icon="book" />
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/cart" className="nav-link active">
                  <MDBIcon fas icon="shopping-cart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
