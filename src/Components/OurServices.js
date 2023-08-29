import project from "../assets/img/women typing a content or text for making book.svg";

export default function Ourservices() {
  return (
    <div className="ourservices">
      <h1>Our services</h1>

      <div className="spreader">
        <div className="lite">
          <h2>
            School projects can’t be <br />
            made any easier
          </h2>
          <ol>
            <li>Post a job and message fit researcher to get started</li>
            <li>Explore portfolio and reviews of experts to find best fit</li>
            <li>Chat with experts on your terms for the project</li>
            <li>
              Project topic not decided? Explore our in-app suggested topics for
              free
            </li>
          </ol>
        </div>
        <div className="image-hold">
          <img className="imaging" src={project} />
        </div>
      </div>
    </div>
  );
}
