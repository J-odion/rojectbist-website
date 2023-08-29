import locate from "../assets/img/marker-pin-04.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/Twitter.svg";
import linkedin from "../assets/img/Frame 28.svg";
import facebook from "../assets/img/Facebook.svg";

export default function ContactUs() {
  return (
    <div id="contactus">
      <div className="contactus">
        <h2 className="title">Contact Us</h2>
        <div className="contactitems">
          <div className="contactleft">
            <img src={locate} />
            <h3>ProjectBist</h3>
            <p>Lagos, Nigeria</p>
            <p>+234 (0)70 6434 5674</p>
            <p>info@projectbist.com</p>
            <div className="socials">
              <a>
                <img src={facebook} />
              </a>
              <a>
                {" "}
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
          <div className="contactRight">
            <div>
            <h4>Need Our Help?</h4>
            <p>Reach out to our support team at anytime for any question</p>

            </div>
            <form>
                <input placeholder="Name" type="text" alt="Name" />
                <input placeholder="Email Address" type="email" alt="Email Address" />
                <input placeholder="Your Message" type="text" alt="Your Message" />
                <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
