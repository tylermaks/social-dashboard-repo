import upArrow from "./Assets/Images/icon-up.svg"
import downArrow from "./Assets/Images/icon-down.svg"
import facebook from "./Assets/Images/icon-facebook.svg"
import twitter from "./Assets/Images/icon-twitter.svg"
import instagram from "./Assets/Images/icon-instagram.svg"
import youtube from "./Assets/Images/icon-youtube.svg"

const summaryData = [
    {
        key: 0,
        icon: facebook,
        platform: "facebook",
        account: "@nathanf", 
        total: 1987,
        today: 12,
        arrow: upArrow
    }, 

    {
        key: 1,
        icon: twitter,
        platform: "twitter",
        account: "@nathanf", 
        total: 1044,
        today: 99,
        arrow: upArrow
    },

    {
        key: 2,
        icon: instagram,
        platform: "instagram",
        account: "@realnathanf", 
        total: "11k",
        today: 1099,
        arrow: upArrow
    },

    {
        key: 3,
        icon: youtube,
        platform: "youtube",
        account: "Nathan F.", 
        total: 8239,
        today: 144,
        arrow: downArrow
    }
]

export default summaryData;