import React from "react"

import {dailyData} from "../data";
import "../Assets/Styles/DailyCard.scss"

function DailyCard(){
    return(
        <section>
            <h2 className="title">Overview - Today</h2>
            <section className="container">
                {
                    dailyData.map(data => {
                        return(
                            <section className="card card--lightMode daily-card">
                                <div className="card-inner card-inner--top">
                                    <p>{data.type}</p>
                                    <img className="icon" src={data.icon} alt="social media logo" />
                                </div>
                               
                               <div className="card-inner card-inner--bottom">
                                    <h2>{data.total}</h2>
                                    <div className="percentage">
                                        <img className="arrow" src={data.arrow} alt="arrow" />
                                        <p className={data.status}>{data.percentage + "%"}</p>
                                    </div> 
                               </div>
                                
                            </section>
                        )
                    })
                }
            </section>
       </section>
    )
}

export default DailyCard;