import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader

        speed={2}
        width={920}
        height={290}
        viewBox="0 0 1400 450"
        backgroundColor="#97c3d9"
        foregroundColor="#649fbd"
        {...props}
    >
      <rect x="0" y="10" rx="0" ry="0" width="100%" height="50"/>
      <rect x="0" y="80" rx="0" ry="0" width="100%" height="100%"/>
    </ContentLoader>
)

export default Loader
