import React from "react";

function Footer(){
    //Get dynamic year
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer>
    )

}

export default Footer;