import placeholder from "./images/placeholder.jpg";
import TenaciousImg from "./images/tenacious-icon.png";
import AdaptableImg from "./images/adaptable-icon.png";
import InquisitiveImg from "./images/inquisitive-icon.png";
import MeticulousImg from "./images/meticulous-icon.png";

export const NavigationLinks = 
[
    {
        id      : "0-nav-about",
        title   : "About",
        link    : "/#about-section"
    },
    {
        id      : "1-nav-portfolio",
        title   : "Portfolio",
        link    : "/#portfolio-section"
    }
    // ,
    // {
    //     id      : "2-nav-contact",
    //     title   : "Contact",
    //     link    : "/#contact-section"
    // }
]

export const Qualities = 
[
    {
        id          : "0QTEN",
        title       : "Tenacious",
        description : "Unwavering in its pursuit of a solution or conclusion",
        logo        : TenaciousImg
    },
    {
        id          : "1QADA",
        title       : "Adaptable",
        description : "Different environments and technologies have never stopped me",
        logo        : AdaptableImg
    },
    {
        id          : "2QINQ",
        title       : "Inquisitive",
        description : "A firm believer that learning is a lifelong journey",
        logo        : InquisitiveImg
    },
    {
        id          : "3QT4",
        title       : "Meticulous",
        description : "Pay close attention to details",
        logo        : MeticulousImg
    }
];

export const HardSkills = 
[
    {
        id      : "0HSHTML",
        title   : "HTML",
        points  : 85 
    },
    {
        id      : "1HSCSS",
        title   : "CSS",
        points  : 90 
    },
    {
        id      : "2HSJS",
        title   : "JavaScript",
        points  : 88 
    },
    {
        id      : "3HSPHP",
        title   : "PHP",
        points  : 75 
    },
    {
        id      : "4HSMYSQL",
        title   : "MySQL",
        points  : 50 
    },
    {
        id      : "5HSCSHARP",
        title   : "C#",
        points  : 45 
    },
    {
        id      : "6HSREACTJS",
        title   : "ReactJS",
        points  : 40 
    },
    {
        id      : "7HSANGULAR",
        title   : "Angular",
        points  : 15 
    }
];

export const Filters = 
[
    "All",      //0
    "Websites", //1
    "Mobiles",  //2
    "Games",    //3
    "Design",   //4
    "Others"    //5
];

export const Projects = 
[
    {
        id          : "2023JPW",
        title       : "DELFHIN",
        skills      : 
            [
                HardSkills[1].title,
                HardSkills[6].title,
            ],
        summary     : "A portfolio website.",
        link        : "",
        thumbnail   : placeholder,
        filter      : 
            [
                Filters[0],
                Filters[1]
            ]
    },
    {
        id          : "2023JPWD",
        title       : "DELFHIN Design",
        skills      : 
            [
                "Figma"
            ],
        summary     : "Design of project DELFHIN.",
        link        : "",
        thumbnail   : "",
        filter      : 
            [
                Filters[0],
                Filters[4]
            ]
    },
    {
        id          : "20202021H3DHG",
        title       : "Halimaw",
        skills      : 
            [
                HardSkills[5],
                "Unity3D"
            ],
        summary     : "3D horror puzzle game.",
        link        : "",
        thumbnail   : "",
        filter      : 
            [
                Filters[0],
                Filters[3]
            ]
    },
    {
        id          : "20202021E3DHG",
        title       : "Hazardous",
        skills      : 
            [
                HardSkills[5],
                "Unity3D"
            ],
        summary     : "3D educational game about hazards.",
        link        : "",
        thumbnail   : "",
        filter      : 
            [
                Filters[0],
                Filters[3]
            ]
    },
    {
        id          : "20202021SEDNGTA",
        title       : "Tagged",
        skills      : 
            [
                HardSkills[5],
                ".NET"
            ],
        summary     : "Geographical tagged application",
        link        : "",
        thumbnail   : "",
        filter      : 
            [
                Filters[0],
                Filters[5]
            ]
    },
    {
        id          : "20202021SEAPDNMEMEA",
        title       : "MeMe",
        skills      : 
            [
                HardSkills[5],
                "ASP.NET"
            ],
        summary     : "Website application for users to request for help and to help others.",
        link        : "",
        thumbnail   : "",
        filter      : 
            [
                Filters[0],
                Filters[1]
            ]
    },
    {
        id          : "20162019FYPVRMG",
        title       : "REYV",
        skills      : 
            [
                HardSkills[5],
                "Unity3D"
            ],
        summary     : "Virtual reality music rhythm game.",
        link        : "",
        thumbnail   : "",
        filter      : 
            [
                Filters[0],
                Filters[3]
            ]
    }
];