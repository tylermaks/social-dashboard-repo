import React from "react"

import {dailyData} from "../data";
import "../Assets/Styles/DailyCard.scss"

function DailyCard(){
    return(
        <>
             <h2>Overview - Today</h2>

            {
                dailyData.map(data => {
                    return(
                        <section className="container container--lightMode daily-card">
                            <div className="daily-card-inner">
                                <p>{data.type}</p>
                                <img className="icon" src={data.icon} alt="social media logo" />
                            </div>
                            <div className="daily-card-inner">
                                <h2>{data.total}</h2>
                               
                                <div className="percentage">
                                    <img className="arrow" src={data.arrow} alt="arrow" />
                                    <p>{data.percentage + "%"}</p>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </>
       
    )
}

export default DailyCard;