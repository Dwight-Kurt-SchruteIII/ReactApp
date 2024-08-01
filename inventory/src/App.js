import './App.css';
import Container from './Components/Container.jsx';
import Footer from './Footer/Footer.jsx'
import Nav from './Nav/Nav.jsx'
import Header from './Header/Header.jsx'

function App() {
  return(
    <>
    <Container style={{ maxWidth: '85%', margin: 'auto' }}>
    <Header/>
    <Nav/>
    <Footer/>
    </Container>
    </>
  )


}

export default App;
