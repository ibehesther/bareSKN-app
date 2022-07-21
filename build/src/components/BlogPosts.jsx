function BlogPost() {
    return(
        <div className="blog-post-container">
            <div className="blog-post-title">Skincare 101</div>
            <div className="blog-post-date">Wed 25th August, 2020</div>
            <div className="blog-post-details">
                <img src={require('../images/woman.jpg')} alt="" srcSet="" />
                <div className='blog-post-text'>
                    As the name implies, this is a web store, but it’s also a resource 
                    for anyone who is ready to move beyond moisturizer and wants guidance 
                    on what’s right — from ingredients to application techniques. 
                    Gather intel on how to pick the best products, especially if you’re on a budget. 
                    No persuasion or judgments, just honest advice delivered in an engaging, friend-to-friend 
                    manner.
                </div>
        
            </div>
        </div>
    )
}

function BlogPosts(props) {
    return (
        <div className="blog-posts-container">
            <span className='blog-name'>BareSKN Blog</span>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
        </div>
    )
}

export default BlogPosts;