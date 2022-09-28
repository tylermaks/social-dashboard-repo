import React from "react"

import "../Assets/Styles/Header.scss"

function Header({onClick}){
    return(
        <section id="header"> 
            <article>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </article>

            <div>
                <p>Dark Mode</p>
                <label class="switch">
                    <input type="checkbox" onClick={onClick}/>
                    <span class="slider round"></span>
                </label>
            </div>
      </section>
    )
}

export default Header;