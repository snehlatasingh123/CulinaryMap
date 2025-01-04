const ShimmerMenuCard = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection:"column" }}>
                
                <div className="shimmer-menu-heading1">
                </div>
                <div className="shimmer-menu-heading2">
                </div>
            </div>
            <div className="shimmer-menu-container">
                {Array.from({ length: 15 }, (_, i) => (
                    <div key={`shimeer-${i}`} id={`shimmer-menu-card-${i}`} className="shimmer-menu-card">
                        {/* <div className="shimmer-menu-card-box"></div> */}
                        <div className="shimmer-menu-first-line-heading"></div>
                        <div className="shimmer-menu-first-line"></div>
                        <div className="shimmer-menu-second-line"></div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ShimmerMenuCard;