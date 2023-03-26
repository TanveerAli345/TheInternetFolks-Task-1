import img1 from './assets/card-img1.png'

function LatestArticles() {
    
    return(
        <section className="articles">
            <div>
                <h2 className="articles--heading">Latest Articles</h2>
                <div className="cards-container">
                    <div className="card">
                        <img className="card--img" src={img1} alt="Card Image 1 PNG" />
                        <div className="card--content">
                            <h3 className="card--heading">Grilled  Tomatoes at Home</h3>
                            <p className='text fs-15 lh-27'>
                                PLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's...
                            </p>
                            <button className='md-button grey-transparent-btn mt-26'>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card--img" src={img1} alt="Card Image 1 PNG" />
                        <div className="card--content">
                            <h3 className="card--heading">Grilled  Tomatoes at Home</h3>
                            <p className='text fs-15 lh-27'>
                                PLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's...
                            </p>
                            <button className='md-button grey-transparent-btn mt-26'>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card--img" src={img1} alt="Card Image 1 PNG" />
                        <div className="card--content">
                            <h3 className="card--heading">Grilled  Tomatoes at Home</h3>
                            <p className='text fs-15 lh-27'>
                                PLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's...
                            </p>
                            <button className='md-button grey-transparent-btn mt-26'>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestArticles