import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader

        speed={2}
        width={910}
        height={350}
        viewBox="0 0 1400 550"
        backgroundColor="#97c3d9"
        foregroundColor="#649fbd"
        {...props}
    >
      <rect x="45%" y="30" rx="0" ry="0" width="115" height="40"/>
      <rect x="0" y="80" rx="0" ry="0" width="100%" height="100%"/>
    </ContentLoader>
)

export default Loader
