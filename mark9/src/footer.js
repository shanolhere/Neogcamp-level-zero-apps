import React from "react";

const Footer = () => {
  return (
    <footer>
      <h2>Connect with me</h2>
      <p>Connecting with people is what I like the most.</p>
      <ul className="social-links">
        <li className="social-linkItem">
          <a href="https://twitter.com/nerd_fswd" target="_blank"
            rel="noreferrer">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-linkItem">
          <a href="https://instagram.com/sabiya.ig" target="_blank"
            rel="noreferrer">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="social-linkItem">
          <a href="https://www.linkedin.com/in/sabiya-tabassum-95ba87244/" target="_blank"
            rel="noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-linkItem">
          <a href="mailto: sabiyatabassum99@gmail.com" target="_blank"
            rel="noreferrer">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
        <li className="social-linkItem">
          <a href="https://github.com/shanolhere" target="_blank"
            rel="noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
