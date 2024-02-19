export default function CardLocality (props) {
    
    const locality = props.locality;
    
    return (
        <>
        <div className="card"> 
            <div className="localitycontainer">
                <p>{locality.description}</p>
            </div>
            <div className="buttons">
                <button onClick={() => props.deleteLocality(locality) }> Delete </button>
            </div>
        </div>
        </>
    )
}
