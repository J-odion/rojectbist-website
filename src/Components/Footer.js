import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/Twitter.svg";
import linkedin from "../assets/img/Frame 28.svg";
import facebook from "../assets/img/Facebook.svg";
import google from "../assets/img/Google Play.svg";
import apple from "../assets/img/App Store.svg";


export default function Footer() {
  return (
    <div id="footer">
      <div className="footer">
        <div className="footerleft">
          <h2>Project<span className="logo">bist.</span></h2>
          <span>Short catchy word</span>
          <div>
          <div className="top4 flex gap-5 ">
          <a href=""><img width={100} src={google} /></a>
          <a href=""><img width={100}  src={apple} /></a>
        </div>
          </div>
        </div>
        <div className="midtext">
          <p>Lagos, Nigeria</p>
          <p>+234 (0)70 6434 5674</p>
          <p>info@projectbist.com</p>
            <div className="socials">
              <a>
                <img src={facebook} />
              </a>
              <a>
                <img src={twitter} />
              </a>
              <a>
                <img src={instagram} />
              </a>
              <a>
                <img src={linkedin} />
              </a>
            </div>
        </div>
        <div className="footright">
          <p>Why ProjectBist</p>
          <p>Our Services</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
}
