import React from "react";
import search from "../assets/img/search.svg";

function HeaderComponent() {
  return (
    <>
      <div className="BlogHeader">
        <h2>WELCOME TO OUR BLOG!</h2>

        <div className="searchBar">
          <form>
            <input placeholder="Search Blog..." />
            <button>
              {" "}
              <img src={search} width={20} />
            </button>
          </form>
        </div>
      </div>

      <div className="menulinks">
          <div className="catLink">
            <a href="">Data Analysis (18)</a>
            <a href="">Data Analysis (18)</a>
            <a href="">Project writing Tools (18)</a>
            <a href="">Data Analysis (18)</a>
            <a href="">AI Tools (28)</a>
            <a href="">Science (10)</a>
            <a href="">Archaeology (38)</a>
          </div>
      </div>
    </>
  );
}
export default HeaderComponent;
