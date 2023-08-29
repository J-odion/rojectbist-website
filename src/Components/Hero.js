import hero from "../assets/img/hero.svg";
import google from "../assets/img/Google Play.svg";
import apple from "../assets/img/App Store.svg";

export default function Hero() {
  return (
    <div id="hero" className="w-full flex md:px-[40px] align-middle justify-center">
      <div className="left-side box-space">
        <h2>School projects can’t be <br />made any easier</h2>
        <p>
          Let’s get you plagiarism-free expert solution for your <br />school projects
          at your defined terms. <br /> Connect with 1000+ experienced researchers for <br />
          your school projects<br /> Post a job to <span className="text-[#887040]">get started!</span>
        </p>
        <div className="flex gap-5 ">
          <a href=""><img width={100} src={google} /></a>
          <a href=""><img width={100}  src={apple} /></a>
        </div>
      </div>
      <div className="right-side">
        <img className="" src={hero} />
      </div>
    </div>
  );
}
