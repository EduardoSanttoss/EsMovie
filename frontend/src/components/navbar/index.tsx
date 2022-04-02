import {ReactComponent as GithubIcon} from "assets/img/Vector.svg"
import "./styles.css";

function Navbar(){
    return (
        <header>
            <nav className="container">
            <div className="esmovie-nav-content">
                <h1>EsMovie</h1>
                <a href="https://github.com/EduardoSanttoss" target="_blank" rel="noreferrer">
                    <div className="esmovie-contact-container">
                        <GithubIcon />
                        <p className="esmovie-contact-link">/EduardoSanttoss</p>
                    </div>
                </a>
            </div>
        </nav>
        </header>
    );
}

export default Navbar;