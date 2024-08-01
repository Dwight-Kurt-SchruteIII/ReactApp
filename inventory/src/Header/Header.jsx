
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
    
    export default Header;