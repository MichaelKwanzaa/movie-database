import hero from "../../images/hero.png"
import './hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className="heroContainer">
                <div className="heroTitle">
                    <span className="heroWelcome">
                        <h3 className="heroTopText welcome">Welcome to</h3>    
                        <h3 className="heroTopText michael">Michael's TMDB</h3>    
                        <h3 className="heroTopText api">API usage</h3>    
                    </span>
                </div>
                <div className="heroImageLeft">
                    <img src={hero} alt="" className="heroImage" />
                </div>
            </div>
        </div>
    )
}
