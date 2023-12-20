import logoblack from "../assets/img/LOGOBLACK.png"
import '../Footer/Footer.css'
function Footer() {
    return(
        <footer>
            <div className="footer-subcontainer">
                <img src={logoblack} />
                <h3>© 2020 Kasa. All rights reserved</h3>
            </div>
        </footer>
    )
}

export default Footer