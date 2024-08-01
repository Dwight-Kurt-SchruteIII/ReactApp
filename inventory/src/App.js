import './App.css';
import Container from './Components/Container.jsx';
import Footer from './Footer/Footer.jsx'
import {Header,Nav} from './Header/Header.jsx'

function App() {
  return(
    <>
    <html className='MainPart'>
    <Container style={{ maxWidth: '90%', margin: 'auto' }}>
    <Header Title={'Nadyias Jewellery'}/>
    <Nav/>
    <Footer/>
    </Container>

    </html>
   
    </>
  )
}

export default App;
