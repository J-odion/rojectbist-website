




export default function Keyfeatures({img, img2, img3, img4}){
    return (
        <div className='keyfeature'>
                {/* item */}
                <div className='feature'>
                    <img src={img} width={40} height={40}/>
                    <h5 className='item-title'>
                        Get Started for Free
                    </h5>
                    <p className='item-body'>
                    Post jobs, explore topics, completed projects 
                    and researchers’ profile for free.
                    </p>
                </div>

                {/* item */}
                <div className='feature'>
                    <img src={img2} width={40} height={40}/>
                    <h5 className='item-title'>
                    Secured Payment
                    </h5>
                    <p className='item-body'>
                    Payment only released after your satisfaction is ensured.
                    </p>
                </div>

                {/* item */}
                <div className='feature'>
                    <img src={img3} width={40} height={40}/>
                    <h5 className='item-title'>
                        90%+ Unique
                    </h5>
                    <p className='item-body'>
                    Plagiarism-free materials for reference and insights.
                    </p>
                </div>

                {/* item */}
                <div className='feature'>
                    <img src={img4} width={40} height={40}/>
                    <h5 className='item-title'>
                    Plagiarism Testing
                    </h5>
                    <p className='item-body'>
                    Assess level of plagiarism of project solutions.
                    </p>
                </div>
            </div>
    )
}