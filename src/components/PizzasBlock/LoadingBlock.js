import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingBlock() {
    return(
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="143" cy="108" r="104" /> 
    <circle cx="189" cy="115" r="2" /> 
    <rect x="20" y="221" rx="8" ry="8" width="247" height="23" /> 
    <rect x="18" y="254" rx="15" ry="15" width="250" height="94" /> 
    <rect x="21" y="368" rx="31" ry="31" width="92" height="37" /> 
    <rect x="154" y="368" rx="31" ry="31" width="107" height="36" /> 
    <rect x="168" y="375" rx="0" ry="0" width="9" height="2" />
    </ContentLoader>
    

  )
}

export default LoadingBlock