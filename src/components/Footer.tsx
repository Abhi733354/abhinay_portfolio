import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Abhi733354" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Abhi733354/abhinay_portfolio.git" target="_blank" rel="noreferrer">Abhinay Sharma</a> with 💜</p>
    </footer>
  );
}

export default Footer;