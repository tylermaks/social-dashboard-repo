import React from "react"

import {summaryData} from "../data";
import "../Assets/Styles/Summary.scss"

function SummaryCard({modeClass}){
    return(
        <section className="container">
            {
                summaryData.map(data => {
                    return(
                        <section className={"card app__card summary summary--" + data.platform}>
                            <div>
                                <img src={data.icon} alt={data.account} />
                                <p>{data.account}</p>
                            </div>
                            <article>
                                <h1>{data.total}</h1>
                                <span>Followers</span>
                            </article>
                            <div>
                                <img src={data.arrow} alt="arrow" />
                                <p className={data.status}>{data.today + " Today"}</p>
                            </div>
                        </section>
                    )
                })
            }
        </section>

      
    )
}

export default SummaryCard;