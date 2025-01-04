const Shimmer = () => {
    return (
        <>
        <div style={{display:"flex"}}>
                <div className="shimmer-heading1">
                </div>
                <div className="shimmer-heading2"></div>
            </div>
        <div className="shimmer-container">
            {Array.from({length:15}, (_,i)=>(
                <div key={`shimeer-${i}`} id={`shimmer-card-${i}`} className="shimmer-card">
                    <div className="shimmer-card-box"></div>
                    <div className="shimmer-first-line"></div>
                    <div className="shimmer-second-line"></div>
                </div>
            ))}
        </div>
        </>
    );
}
export default Shimmer;