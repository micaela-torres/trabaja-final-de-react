import "../Footer/footer.css";
import img from "../../img/logo-color.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-img">
                <img src={img} alt="" width={150} />
            </div>
            <div className="footer-texto">
                <p>Contacto: symart@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer