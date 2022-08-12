function LoadingCard(){
    return(
        <div className="loading-section">
            <div className="loading-card-image"></div>
            <div className="loading-card-content">
                <h2>{}</h2>
                <p></p>
            </div>
        </div>
    )
}

export function ProductsLoading(){
    return(
        <div className="loading-container">
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
        </div>
    )
}
export function CollectionsLoading(){
    return(
        <div className="loading-container">
            <LoadingCard/>
            <LoadingCard/>
        </div>
    )
}