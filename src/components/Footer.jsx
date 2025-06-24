import React from "react";

function Footer(){
    const year = new Date().getFullYear()
    return(
        <footer>
            <p>Copyright © {year} Designed by Baranidaran</p>
        </footer>
         
    )
}

export default Footer