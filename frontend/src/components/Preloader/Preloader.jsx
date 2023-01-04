import React from 'react'
import ContentLoader from "react-content-loader"


const Preloader = (props) => {
  return (
    <ContentLoader
    speed={2}
    width={595}
    height={451}
    viewBox="0 0 595 451"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="6" rx="8" ry="8" width="400" height="30" /> 
    <rect x="434" y="6" rx="8" ry="8" width="150" height="30" /> 
    <rect x="9" y="60" rx="6" ry="6" width="575" height="24" /> 
    <rect x="10" y="110" rx="8" ry="8" width="575" height="300" /> 
    <rect x="11" y="421" rx="8" ry="8" width="177" height="26" /> 
    <rect x="204" y="421" rx="8" ry="8" width="82" height="26" />
  </ContentLoader>
  )
}


export default Preloader;