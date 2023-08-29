import rocket from '../assets/img/rocket_launch.svg'
import card from '../assets/img/Frame 10122028.svg'
import diamond from '../assets/img/diamond.svg'
import merge from '../assets/img/Merge.svg'
import Keyfeatures from './Keyfeautres'


export default function Whyus(){

    return(
        <div id="Whyus">
            <div className="whyus-items">
            <h2 className="title">Why ProjectBist</h2>
            <p className="">
                Projectbist offers flexibility in school project writing with secured 
                payments and at least 90% unique <br className='textBreak'/>
                materials for reference and insights.
            </p>
            <h3 className="subtitle">Our Key Features</h3>
            <div className='whyus-item'>
                <Keyfeatures img={rocket} img2={card} img3={diamond} img4={merge} />
            </div>
            </div>
        </div>
    )
}