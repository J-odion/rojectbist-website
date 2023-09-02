import BottomSectionBlog from "../Components/BottomSectionBlog";
import HeaderComponent from "../Components/Header";
import image from '../assets/img/blogimg.svg'




export default function SingleBlog(){
    return(
        <div>
            <HeaderComponent />

            <div className="singlepost">
                <div className="post">
                    <span> 1st May 2023 | 12:00AM | Entertainment</span>

                    <h2>
                        Sudan bond flourishing amidst war and insurgency, 
                        somethings still not clear to the world.
                    </h2>

                    <span>120 Views | 60 Likes | 32 Comments</span>
                </div>
            </div>



            <div className="singlepostbody">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Hac et gravida at ultrices amet id massa ornare. Nisl consequat, 
                integer sed arcu mauris. Convallis amet, lacus, massa donec nulla. Amet, 
                imperdiet adipiscing mi, justo, mi. Odio malesuada non cras elit, 
                imperdiet nec. Maecenas vitae pellentesque a duis viverra libero sit. 
                Sit dis vivamus purus tincidunt nisl.  
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Hac et gravida at ultrices amet id massa ornare. Nisl consequat, 
                integer sed arcu mauris. Convallis amet, lacus, massa donec nulla. Amet, 
                imperdiet adipiscing mi, justo, mi. Odio malesuada non cras elit, 
                imperdiet nec. Maecenas vitae pellentesque a duis viverra libero sit. 
                Sit dis vivamus purus tincidunt nisl.  
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Hac et gravida at ultrices amet id massa ornare. Nisl consequat, 
                integer sed arcu mauris. Convallis amet, lacus, massa donec nulla. Amet, 
                imperdiet adipiscing mi, justo, mi. Odio malesuada non cras elit, 
                imperdiet nec. Maecenas vitae pellentesque a duis viverra libero sit. 
                Sit dis vivamus purus tincidunt nisl.  
                </p>

                <img src={image}/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Hac et gravida at ultrices amet id massa ornare. Nisl consequat, 
                integer sed arcu mauris. Convallis amet, lacus, massa donec nulla. Amet, 
                imperdiet adipiscing mi, justo, mi. Odio malesuada non cras elit, 
                imperdiet nec. Maecenas vitae pellentesque a duis viverra libero sit. 
                Sit dis vivamus purus tincidunt nisl.  
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Hac et gravida at ultrices amet id massa ornare. Nisl consequat, 
                integer sed arcu mauris. Convallis amet, lacus, massa donec nulla. Amet, 
                imperdiet adipiscing mi, justo, mi. Odio malesuada non cras elit, 
                imperdiet nec. Maecenas vitae pellentesque a duis viverra libero sit. 
                Sit dis vivamus purus tincidunt nisl.  
                </p>


            </div>

            <BottomSectionBlog />
        </div>
    )
}