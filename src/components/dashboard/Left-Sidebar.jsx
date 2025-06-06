import React from "react";


const LeftSidebar = () => {
  return (
    <aside style={{ width: "200px", background: "#f0f0f0", height: "100vh", padding: "1rem" }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="/">Home</a></li>
          <li><a href="/plant-guide">Plant Guide</a></li>
          <li><a href="/encyclopedia">Encyclopedia</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
