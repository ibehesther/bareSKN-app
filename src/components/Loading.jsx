function LoadingCard(props){
    return(
        <div className={`loading-section ${props.className && props.className}`}>
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
            <LoadingCard className="hidden-sm"/>
            <LoadingCard className="hidden-sm"/>
        </div>
    )
}
export function CollectionsLoading(){
    return(
        <div className="loading-container">
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard className="hidden-sm"/>
            <LoadingCard className="hidden-sm"/>
        </div>
    )
}