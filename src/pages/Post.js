import styled from 'styled-components' 
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  width:100%;
  min-height:100%;
` 

function Post() {
  return (
    <Container>
      <Helmet>
        <title>Post</title>
        <meta name="description" content="cwin website" />
        <meta name="keywords" content="react web app service" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Post" />
        <meta property="og:site_name" content="Post" />
        <meta property="og:description" content="react web app service" />
        <meta property="og:image" content="https://i.ibb.co/cQ6D1hY/postPage.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:title" content="Post" />
        <meta name="twitter:description" content="react web app service" />
        <meta name="twitter:image" content="https://i.ibb.co/cQ6D1hY/postPage.png" />
        {/* <link rel="canonical" href="" /> */}
      </Helmet>
      Post
    </Container>
  )
}

export default Post
