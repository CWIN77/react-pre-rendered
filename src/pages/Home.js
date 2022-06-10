import styled from 'styled-components' 
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  width:100%;
  min-height:100%;
` 

function Home() {
  return (
    <Container>
      <Helmet>
        <title>React Helmet with Snap</title>
        <meta name="description" content="cwin website" />
        <meta name="keywords" content="react web app service" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="React Helmet with Snap" />
        <meta property="og:site_name" content="React Helmet with Snap" />
        <meta property="og:description" content="react web app service" />
        <meta property="og:image" content="https://i.ibb.co/4FKLpk9/site.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:title" content="React Helmet with Snap" />
        <meta name="twitter:description" content="react web app service" />
        <meta name="twitter:image" content="https://i.ibb.co/4FKLpk9/site.png" />
        {/* <link rel="canonical" href="" /> */}
      </Helmet>
      Home
    </Container>
  )
}

export default Home
