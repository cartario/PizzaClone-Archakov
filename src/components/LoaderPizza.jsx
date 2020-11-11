import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={476}
    viewBox="0 0 250 476"
    backgroundColor="#f5f5f5"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="294" rx="3" ry="3" width="250" height="34" /> 
    <rect x="0" y="358" rx="3" ry="3" width="250" height="60" /> 
    <rect x="0" y="427" rx="3" ry="3" width="110" height="43" /> 
    <rect x="139" y="427" rx="3" ry="3" width="110" height="43" />
  </ContentLoader>
)

export default MyLoader