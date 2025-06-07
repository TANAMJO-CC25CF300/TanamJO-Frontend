import React from "react";

const LeftSidebar = () => {
  return (
    <aside className="bg-light p-3" style={{ width: "200px", height: "100vh" }}>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/plant-guide" className="nav-link">Plant Guide</a>
          </li>
          <li className="nav-item">
            <a href="/encyclopedia" className="nav-link">Encyclopedia</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
