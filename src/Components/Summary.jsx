import React from "react"

import summaryData from "../summaryData";
import "../Assets/Styles/Summary.scss"

function Summary(){
    return(
        <>
            {
                summaryData.map(data => {
                    return(
                        <section className={"container container--lightMode summary summary--" + data.platform}>
                            <div>
                                <img src={data.icon} alt={data.account} />
                                {data.account}
                            </div>
                            <article>
                                <h1>{data.total}</h1>
                                <span>Followers</span>
                            </article>
                            <div>
                                <img src={data.arrow} alt="arrow" />
                                <p>{data.today}</p>
                                <p>Today</p>
                            </div>
                        </section>
                    )
                })
            }
        </>

      
    )
}

export default Summary;