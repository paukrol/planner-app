import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Created by{" "}
        <a href="https://github.com/paukrol/planner-app" target="_blank">
          Paulina Król
        </a>{" "}
        &copy; {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};

export default Footer;
