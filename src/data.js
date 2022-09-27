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
        arrow: upArrow,
        status: "green"
    }, 

    {
        key: 1,
        icon: twitter,
        platform: "twitter",
        account: "@nathanf", 
        total: 1044,
        today: 99,
        arrow: upArrow,
        status: "green"
    },

    {
        key: 2,
        icon: instagram,
        platform: "instagram",
        account: "@realnathanf", 
        total: "11k",
        today: 1099,
        arrow: upArrow,
        status: "green"
    },

    {
        key: 3,
        icon: youtube,
        platform: "youtube",
        account: "Nathan F.", 
        total: 8239,
        today: 144,
        arrow: downArrow,
        status: "red"
    }
]

const dailyData = [
    {
        key: 0,
        icon: facebook,
        type: "Page Views",
        total: 87,
        percentage: 3,
        arrow: upArrow,
        status: "green"
    },

    {
        key: 1,
        icon: facebook,
        type: "Likes",
        total: 52,
        percentage: 2,
        arrow: downArrow,
        status: "red"
    },

    {
        key: 2,
        icon: instagram,
        type: "Likes",
        total: 5462,
        percentage: 2257,
        arrow: upArrow,
        status: "green"
    },


    {
        key: 3,
        icon: instagram,
        type: "Profile views",
        total: "52k",
        percentage: 1375,
        arrow: upArrow,
        status: "green"
    },

    {
        key: 4,
        icon: twitter,
        type: "Retweets",
        total: 117,
        percentage: 303,
        arrow: upArrow,
        status: "green"
    },

    {
        key: 5,
        icon: twitter,
        type: "Likes",
        total: 507,
        percentage: 553,
        arrow: upArrow,
        status: "green"
    },

    {
        key: 6,
        icon: youtube,
        type: "Likes",
        total: 107,
        percentage: 19,
        arrow: downArrow,
        status: "red"
    },

    {
        key: 7,
        icon: youtube,
        type: "Total views",
        total: 1407,
        percentage: 12,
        arrow: downArrow,
        status: "red"
    }

]

export {summaryData, dailyData};