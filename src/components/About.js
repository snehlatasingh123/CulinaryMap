import React from "react";

const About = () => {
  return (
    <div style={{ margin: "20px auto", maxWidth: "800px", padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2.5rem", color: "#333" }}>About CulinaryMap</h1>
      <h2>What is CulinaryMap?</h2>
      <p>
        <strong>CulinaryMap</strong> is your go-to platform for exploring few restaurant chains and their menus in Delhi. 
        Designed as a practice project for honing React skills, this web application showcases modern web development 
        practices and provides a seamless user experience.
      </p>
      <h2 style={{ fontSize: "1.5rem", color: "#444", marginTop: "20px" }}>Key Features</h2>
      <ul style={{ margin: "10px 0", paddingLeft: "20px", listStyleType: "circle" }}>
        <li>Restaurant listings with detailed information.</li>
        <li>Menu exploration with veg/non-veg filters.</li>
        <li>Search and filter functionality.</li>
        <li>Top-rated restaurant sorting with advanced logic.</li>
        <li>Dynamic routing for a smooth navigation experience.</li>
      </ul>
      <h2 style={{ fontSize: "1.5rem", color: "#444", marginTop: "20px" }}>Technologies Used</h2>
      <p>
        The app leverages popular React hooks like <strong>useState</strong>, <strong>useEffect</strong>, 
        <strong> useParams</strong>, and <strong>useRouteError</strong>. The routing is handled using 
        <strong> React Router</strong>, ensuring a dynamic and responsive user experience.
      </p>
      <h2 style={{ fontSize: "1.5rem", color: "#444", marginTop: "20px" }}>Purpose</h2>
      <p>
        CulinaryMap was built to practice and demonstrate skills in React development. It’s a reflection of the 
        developer's ability to create functional, dynamic, and user-friendly web applications.
      </p>
      <p style={{ textAlign: "center", marginTop: "30px", fontSize: "1.2rem", color: "#555" }}>
        Explore CulinaryMap and navigate through food items like never before!
      </p>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        For a detailed description of this project, check out the document below:
      </p>
      <p style={{ textAlign: "center" }}>
        <a 
          href="https://docs.google.com/document/d/1tDsLSaqGYLPlnvsFkasEOMEcg6Kbr5m16axWxfMzP1Y/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", fontSize: "1.2rem", color: "#0073b1" }}
        >
          View Project Documentation
        </a>
      </p>
    </div>
  );
};

export default About;
