import ReactPaginate from "react-paginate";
import Blog1 from "../assets/img/blogimg.svg";

export default function CardSection() {
  return (
    <div className="cardsection">
      <div className="titleandfilter">
        <h2>Articles</h2>
        <div className="filterbox">
          <h2>Filter</h2>
        </div>
      </div>

      {/* full container */}
      <div className="entireCard">
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
        {/* item */}
        <div className="cardbox">
          <img src={Blog1} />
          <div className="boxinner">
            <span>1st May 2023 | Entertainment</span>
            <h2>Review of Davido’s Latest Album “Timeless”- A Case Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi suspendisse mattis
              consequat ac. Sem morbi nulla imperdiet arcu id. Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <a className="innerboxbutton" href="">
              Read More
            </a>
          </div>
        </div>
      </div>

      <ReactPaginate className="pagination"/>
    </div>
  );
}
