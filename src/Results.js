//  ** Results.js Component
// A component that will display the final birthdate photo
function Results(props) {
    return (
        <div className="results-photo">
            <div className="img-container">    
                {/* Set src and alt using dot notation and the props object passed. */}
                {/* The data only returns one photo of the day, display result using props attributes. */}
                {
                    <img src={props.birthdatePhoto.url} alt={`NASAs pic-of-the-day for ${props.birthdatePhoto.date}`} />
                }
            </div>
        </div>
    )
}



// export Results.js
export default Results;