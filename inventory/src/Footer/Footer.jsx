
import './Footer.css'

function Footer(){
    const time = new Date().getFullYear();
return(
<footer>
    <h1 className='footer-font'>&copy; {time} - this shit is build with passions</h1>
</footer>
);


}
export default Footer;
