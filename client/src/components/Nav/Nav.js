import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">React Google Books Search</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" id="home">
            <a className="nav-link" href="/">Search <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active" id="report">
            <a className="nav-link" href="/saved">Saved <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
