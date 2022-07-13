function Blog() {
    return (
        <div className="blog-container">
            <span className='blog-name'>BareSKN Blog</span>
            
            <div className="blog-content">
                <div className="blog-title">Skincare 101</div>
                <div className="blog-img">
                    <img src={require('../images/woman.jpg')} alt="" srcset="" />
                </div>
                <div className='blog-text'>
                    As the name implies, this is a web store, but it’s also a resource 
                    for anyone who is ready to move beyond moisturizer and wants guidance 
                    on what’s right — from ingredients to application techniques. 
                    Gather intel on how to pick the best products, especially if you’re on a budget. 
                    No persuasion or judgments, just honest advice delivered in an engaging, friend-to-friend 
                    manner.
                </div>
                <div className='blog-date'>Written: <span className="blog-post-date">Wed 25th August, 2020</span></div>
                <div className='blog-date'>Author: <span className="blog-post-date">John Doe</span></div>
            </div>
            
        </div>
    )
}

export default Blog;