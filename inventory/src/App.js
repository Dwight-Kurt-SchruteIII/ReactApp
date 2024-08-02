import Body from './Components/Body.jsx';
import MainPage from './Components/Main.jsx';
import Footer from './Footer/Footer.jsx'
import {Header,Nav} from './Header/Header.jsx'
import Main from './Components/Main.jsx'

function App() {
  return(
    <>
    <html className='MainPart'>
    <Body style={{margin: 'auto' }}>
    <Header Title={'Nadyias Jewellery'} className='sticky-header'/>
    <Nav className='sticky-header'/>
    <MainPage/>
    <Footer></Footer>
    </Body>

    </html>
   
    </>
  )
}

export default App;
