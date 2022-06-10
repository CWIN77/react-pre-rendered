import styled from 'styled-components' 
import { Routes,Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'

const Container = styled.div`
  width:100%;
  min-height:100%;
` 
const Nav = styled(Link)`
  font-size: 20px;
  color:black;
  margin-right: 12px;
` 

function App() {
  return (
    <Container>
      <Nav to="/">Go Home</Nav>
      <Nav to="/post">Go Post</Nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
    </Container>  
  )
}

export default App
