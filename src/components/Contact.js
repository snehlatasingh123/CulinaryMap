import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div style={{ margin: "20px auto", maxWidth: "600px", padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.8" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2.5rem", color: "#333" }}>Contact Me</h1>
      <p style={{ textAlign: "center", fontSize: "1rem", color: "#555" }}>
        Feel free to reach out to me for any query.
      </p>
      <ul style={{ margin: "20px 0", paddingLeft: "20px", listStyleType: "none" }}>
        <li style={{ marginBottom: "10px" }}>
          <strong>LinkedIn:</strong>{" "}
          <Link
            to="https://www.linkedin.com/in/snehsingh1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#0073b1" }}
          >
            linkedin.com/in/snehsingh1/
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>GitHub:</strong>{" "}
          <Link
            to="https://github.com/snehlatasingh123"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000" }}
          >
                github.com/snehlatasingh123
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Resume:</strong>{" "}
          <Link
            to="https://drive.google.com/file/d/13csSui2DK_wlYoKmnvICvWjvDD-OLdvs/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#0a66c2" }}
          >
            Resume_Sneh_Lata_Singh
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Email:</strong>{" "}
          <Link
            to="mailto:snehlatasingh0551@gmail.com"
            style={{ textDecoration: "none", color: "#d44638" }}
          >
            snehlatasingh0551@gmail.com
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Phone:</strong>{" "}
          <Link
            to="tel:+916391927249"
            style={{ textDecoration: "none", color: "#000" }}
          >
            +91-6391 9272 49
          </Link>
        </li>
      </ul>
      <p style={{ textAlign: "center", fontSize: "1rem", color: "#555" }}>
        I'm always open to collaborations, discussions, or any opportunities that align with my skills and interests!
      </p>
    </div>
  );
};

export default Contact;
