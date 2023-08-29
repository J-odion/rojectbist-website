/* eslint-disable jsx-a11y/alt-text */
import project from "../assets/img/women typing a content or text for making book.svg";
import research from "../assets/img/Concept of data Privacy And Policy.svg";
import student from "../assets/img/Group 932.svg"

export default function Services() {
  return (
    <div className="services">
      <h1 className="title">Our services</h1>
      <div className="fleeSer">
        <div className="flee">
          <h2 className="subtitle">For Students</h2>
          <div className="lists">
            <ol>
              <li>Post a job and message fit researcher to get started</li>
              <li>Explore portfolio and reviews of experts to find best fit</li>
              <li>Chat with experts on your terms for the project</li>
              <li>
                Project topic not decided? Explore our in-app suggested topics
                for free
              </li>
            </ol>
          </div>
        </div>

        <div className="ser">
          <img className="" src={project} />
        </div>
      </div>

      {/* next */}
      <div className="fleeSer nextt">
        <div className="ser">
          <img className="" src={student} />
        </div>

        <div className="flee">
          <h2 className="subtitle">For Researcher</h2>
          <div className="lists">
            <ol>
              <li>Apply to any project from any school anywhere</li>
              <li>
                Get more via suggested topics to submitted to the market place
              </li>
              <li>Publish and get a market for your completed projects</li>
              <li>Get paid on time every time</li>
            </ol>
          </div>
        </div>
      </div>

      {/* next */}
      <div className="fleeSer">
        <div className="flee">
          <h2 className="subtitle">Project Materials</h2>
          <div className="lists">
            <p>For best experience, user can enjoy</p>
            <ol>
              <li>Topics exploration for free</li>
              <li>
                Get plagiarism-free completed projects for insight and reference
              </li>
              <li>Tet plagiarism level of project solutions</li>
            </ol>
          </div>
        </div>

        <div className="ser">
          <img className="" src={research} />
        </div>
      </div>
    </div>
  );
}
