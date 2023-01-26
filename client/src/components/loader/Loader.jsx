import "./loader.css";
import logo from '../../assets/logo.png'

export default function Loader() {
    return (
        <div className="gooey">
            <span className="dot"></span>
            <div className="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}