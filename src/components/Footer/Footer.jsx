import React, {useState} from "react";
import "./images/logo.png"
import "./images/facebook.png"
import "./css/footer.css"

function Footer(){
    const [year, setYear] = useState(new Date().getFullYear());
        
        

    return(
        <footer>
            <div className="footer-info-div">
                <img src="./images/logo.png" alt="logo"></img>
                
                <div className="info">
                    <ul className="info-ul">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <div className="social">
                    <ul className="social-ul">
                        <li><a href="#"><img className="social-img" width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></a></li>
                        <li><a href="#"><img className="social-img" width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a></li>
                        <li><a href="#"><img className="social-img" width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/></a></li>
                    </ul>

                </div>
            </div>
            <hr />
            <div className="footer-copy-div">
                <p>@{year} Rhodes's News. All rights reserved</p>
                <p>Developed by Panagiotis Eleftheriadis</p>
            </div>
        </footer>

    )
}

export default Footer;