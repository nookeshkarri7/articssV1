
import download from "./Logo_ArtiCSS.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="navbar">
    <div className = "container flex">
      <Image
      src={download}
      alt="logo"
      width="124"
      height="40" 
       />
      <nav>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </nav>
    </div>
    
  </div>)
};

export default Header;
