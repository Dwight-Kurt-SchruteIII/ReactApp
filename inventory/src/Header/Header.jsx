
import './Header.css'
function Header({Title}){
    
    return (
        <header className="HeaderContainer">
            <div className="HeaderHeadLine">
            <h1>{Title}</h1>
            </div>
        </header>
    );
    
    }
    function Nav(){
        return (
                <ul>
                    <li><a href="#nice"><button className='button-custom'>Home</button></a></li>
                    <li><a href="#nice"><button>Products</button></a></li>
                    <li><a href="#nice"><button>Services</button></a></li>
                    <li><a href="#nice"><button>Contact</button></a></li>
                </ul>
        );
        }
         
    export {Header, Nav};