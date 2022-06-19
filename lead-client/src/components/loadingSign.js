import './loadingStyle.css'
const LoadingSign = () => {
    return (
        <div id = 'loadingSignBox'>
            <div id = 'circleOne'></div>
            <div id = 'circleTwo'></div>
            <div id = 'circleThree'></div>
            <div id = 'loading'>
                <h1 id = 'loadingText'>Scraping...</h1>
            </div>

        </div>
    )
}

export {LoadingSign}