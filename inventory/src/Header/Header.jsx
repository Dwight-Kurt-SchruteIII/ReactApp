
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
                    <li><a href="#"><button>Home</button></a></li>
                    <li><a href="#"><button>About</button></a></li>
                    <li><a href="#"><button>Services</button></a></li>
                    <li><a href="#"><button>Contact</button></a></li>
                </ul>
        );
        }
         
    export {Header, Nav};