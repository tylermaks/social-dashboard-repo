import React from "react"

import "../Assets/Styles/Header/Header.css"

function Header(){
    return(
        <section id="header" class="container">
            <article>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </article>

            <div>
                <p>Dark Mode</p>
                {/* Add Toggle Here */}
            </div>
      </section>
    )
}

export default Header;