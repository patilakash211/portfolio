import React, { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power3, } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./About.css";
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoReact } from 'react-icons/io5';
// import { DiNodejs, DiMongodb } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

export const About = () => {
    const aboutContainer = useRef(null);
    const proficienciesContainer = useRef(null);
    const proficiencies = [
        {
            icon: <IoLogoHtml5 id="skills" className="html" />,
            text: "HTML"
        },
        {
            icon: <IoLogoCss3 className="css" />,
            text: "CSS"
        },
        {
            icon: <IoLogoJavascript className="javascript" />,
            text: "JavaScript"
        },
        {
            icon: <IoLogoReact className="react" />,
            text: "React"
        },
        {
            icon: <SiRedux className="redux" />,
            text: "Redux"
        },
        // {
        //     icon: <DiNodejs className="nodejs" />,
        //     text: "Node.js"
        // },
        // {
        //     icon: <DiMongodb className="mongodb" />,
        //     text: "MonDB"
        // },
    ]

    let tl = new TimelineLite();


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        let content = aboutContainer.current.firstElementChild;
        let image = aboutContainer.current.lastElementChild;
        let proficienciesTitle = proficienciesContainer.current.firstElementChild;
        let proficienciesIcons = proficienciesContainer.current.lastElementChild;


        ScrollTrigger.create({
            trigger: aboutContainer.current,
            start: "top 650px",
            // markers: true,
            animation: tl,
            toggleActions: "play none none none"
        })

        tl.to([proficienciesIcons, proficienciesTitle, content], {
            visibility: "hidden"
        }).from(image, {
            opacity: 0,
            y: "1000px",
            duration: .7,
            ease: Power3.easeOut
        }).from(content, {
            visibility: "visible",
            opacity: 0,
            y: "1000px",
            duration: .7,
            ease: Power3.easeOut,
            delay: -0.2
        }).from(proficienciesTitle, {
            visibility: "visible",
            opacity: 0,
            y: "1000px",
            duration: .7,
            ease: Power3.easeOut,
            delay: -0.6
        }).from(proficienciesIcons, {
            visibility: "visible",
            opacity: 0,
            y: "1000px",
            duration: .7,
            ease: Power3.easeOut,
            delay: -0.5
        })
    })

    return (
        <div>
            <div className="about__container" ref={aboutContainer}>
                <div className="about__container__text" id="about">
                    <h1>About Me</h1>
                    <p>I am an aspiring FullStack Developer and a curious person who loves to know how different things work together. I love to BUILD STUFF and connect with people! When I am away from keyboard, you will find me listening music or connecting with people. Currently I am a student at Masai School.
                        <br /><br />
                        Actively seeking opportunities to be able to apply my skill set to create exciting products.
                    </p>
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/19rGMEAK9LLdrxmzX1SX9ywal24vw15_W/view?usp=sharing" download >
                        
                        <button>Download Resume</button>
                    </a>
                </div>
                <div className="about__container__image">
                    <svg id="ba230943-1bdb-4bd0-9561-c7824586c7f7" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="600" height="436" viewBox="0 0 1100 436"><path d="M314.02808,475.27364a9.75072,9.75072,0,1,0-19.40734,1.28194l-28.01439,36.68607a13.58254,13.58254,0,0,0,1.83575,14.91417l2.19759,2.56354,10.083-2.01667,11.42794-10.08331L290.806,507.19164l14.1167-22.18324-.01825-.01592A9.74283,9.74283,0,0,0,314.02808,475.27364Z" transform="translate(-90.2579 -231.65939)" fill="#ffb9b9" /><polygon points="30.041 422.968 25.468 405.984 88.8 380.265 95.549 405.331 30.041 422.968" fill="#ffb8b8" /><path d="M105.002,663.39128,90.2579,608.62916l.69264-.18651a22.07516,22.07516,0,0,1,27.054,15.57522l.00037.00135L127.01,657.46609Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" /><polygon points="117.278 420.254 103.054 409.91 136.185 350.121 157.179 365.388 117.278 420.254" fill="#ffb8b8" /><path d="M201.1368,668.34061,155.27068,634.9853l.42187-.58015a22.07517,22.07517,0,0,1,30.8348-4.87041l.00114.00082L214.54188,649.908Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" /><path d="M328.45025,568.36357l-35.795-34.77263a18.07626,18.07626,0,0,0-23.66833-1.3221L201.4006,607.3525l6.05018,9.41084L271.98356,573.069l43.69437,57.13867,41.67764-20.83841Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" /><path d="M312.98939,575.75807l-26.21673-2.01667-18.986-4.60272a9.75256,9.75256,0,1,0-1.85,12.65572l-.00277.01364,11.42793,4.70553,49.07181,16.80551,6.05-4.70553Z" transform="translate(-90.2579 -231.65939)" fill="#ffb9b9" /><polygon points="285.92 416.699 271.131 426.11 253.653 426.11 172.315 395.86 53.332 417.371 49.971 391.826 158.871 344.099 254.326 375.693 285.92 416.699" fill="#2f2e41" /><circle cx="254.32577" cy="227.13245" r="26.21658" fill="#ffb9b9" /><path d="M412.41738,563.46316a150.631,150.631,0,0,1-7.3877,46.59159l-1.96286,6.03657-9.4111,43.0221-10.08328,2.68886-7.39442-9.41107-14.78884-10.7555L350.63366,624.158,341.41082,608.791l-2.87712-4.79967-10.08331-50.41649-38.31653-21.511-12.77217-2.01667,2.68889-7.39442,11.42774-15.46106L302.906,505.8472l3.36111-2.68888,2.68888,1.34443,14.82257,5.71013,48.05688-20.304,7.03142,1.14951L403.06674,511.225A150.49912,150.49912,0,0,1,412.41738,563.46316Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" /><polygon points="314.825 325.949 289.281 342.754 251.153 377.131 248.276 372.332 240.209 331.999 242.226 331.999 263.065 293.683 314.825 325.949" opacity="0.1" style={{ isolation: "isolate" }} /><polygon points="263.065 289.649 242.226 327.965 230.126 341.41 219.371 344.099 248.276 375.693 289.281 338.721 314.825 321.915 263.065 289.649" fill="#ccc" /><path d="M324.19252,439.29866l-2.8405,1.09286a3.96532,3.96532,0,0,1-1.06033-5.50666q.02295-.03393.04661-.06735l-5.24917-.24564a39.63744,39.63744,0,0,1,59.17341-4.76951c.239-.8231,2.84419.7783,3.90783,2.40209.35739-1.33937,2.8001,5.13521,3.66407,9.71188.4-1.52384,1.93791.9362.59056,3.2967.8537-.12472,1.23931,2.05947.57843,3.27633.934-.43878.77654,2.16855-.23609,3.911,1.3327-.11841-.1137,27.33122-20.1137,25.33122-1.39236-6.39749-1-6-2.63957-14.22639-.76312-.81-1.59882-1.54779-2.43315-2.28425l-4.51259-3.9833c-5.2473-4.63182-10.02063-10.34844-17.01093-12.07955-4.80393-1.18968-7.84143-1.45827-5.22344-6.87151-2.36532.98706-4.57411,2.45493-6.96063,3.37169C323.90539,440.90187,324.23894,440.05545,324.19252,439.29866Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" /><circle cx="267.43406" cy="230.15744" r="4.70554" fill="#ffb9b9" /><rect x="137.51364" y="351.37595" width="21.61009" height="21.61009" transform="translate(-313.1754 254.44578) rotate(-86.18992)" fill="#e6e6e6" style={{ isolation: "isolate" }} /><path d="M124.34354,362.13134l26.18282,1.74368-1.74369,26.18282-26.18282-1.74368Zm24.96862,2.80626-23.90605-1.59206-1.59206,23.906,23.90605,1.59206Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" /><rect x="241.00867" y="288.77184" width="21.61009" height="21.61009" transform="translate(-147.57238 -172.07462) rotate(-12.12675)" fill="#e6e6e6" style={{ isolation: "isolate" }} /><path d="M245.27842,276.50957l5.51255,25.65526-25.65526,5.51254-5.51254-25.65526Zm4.15743,24.7795-5.0332-23.42436-23.42437,5.03319,5.03319,23.42438Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" /><rect x="226.60299" y="392.67408" width="21.61008" height="21.61009" transform="translate(-301.94557 39.64172) rotate(-43.12712)" fill="#e6e6e6" style={{ isolation: "isolate" }} /><path d="M253.81456,385.99664,234.663,403.93538l-17.93873-19.15156,19.15156-17.93872Zm-19.09885,16.3261,17.48621-16.37883-16.37884-17.48618-17.48621,16.37884Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" /><path d="M1053.535,231.65939H414.15223a17.59849,17.59849,0,0,0-17.59851,17.59849v356.2522a17.59854,17.59854,0,0,0,17.59851,17.59857H1053.535a17.59856,17.59856,0,0,0,17.59851-17.59857V249.25788a17.59852,17.59852,0,0,0-17.59851-17.59849Z" transform="translate(-90.2579 -231.65939)" fill="#3f3d56" /><rect x="329.89003" y="31.10145" width="627.39127" height="353.91303" fill="#fff" /><circle cx="643.04942" cy="15.01449" r="6.43477" fill="#fff" /><polygon points="777.858 385.015 329.89 385.015 329.89 31.102 777.858 385.015" fill="#f2f2f2" style={{ isolation: "isolate" }} /><circle cx="428.05798" cy="298.22423" r="60.3068" fill="#84CFB5" /><path d="M531.74082,575.21a75.01577,75.01577,0,1,1,75.01581-75.01575A75.01578,75.01578,0,0,1,531.74082,575.21Zm0-149.051A74.03519,74.03519,0,1,0,605.776,500.19428a74.03518,74.03518,0,0,0-74.03522-74.03521Z" transform="translate(-90.2579 -231.65939)" fill="#3f3d56" /><rect x="753.43694" y="214.96957" width="58.60522" height="12.24586" fill="#3f3d56" /><rect x="697.99083" y="148.62679" width="169.49743" height="5.24823" fill="#3f3d56" /><rect x="697.99083" y="169.24617" width="169.49743" height="5.24823" fill="#3f3d56" /><rect x="697.99083" y="189.86555" width="169.49743" height="5.24823" fill="#3f3d56" /><rect x="888.40147" y="52.28163" width="24.49176" height="24.49173" fill="#84CFB5" /><path d="M1014.52225,319.8039h-29.74v-29.74h29.74Zm-28.4469-1.293h27.15381V291.357H986.07529Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" /><path d="M1088.74918,610.23908h-61.22937v-4.41156a.87466.87466,0,0,0-.87463-.87469h-20.993a.87468.87468,0,0,0-.87476.87463v4.41162H991.657v-4.41156a.87468.87468,0,0,0-.8747-.87469H969.7894a.87467.87467,0,0,0-.87469.87469h0v4.41156H955.79416v-4.41156a.87467.87467,0,0,0-.87469-.87469h-20.993a.87468.87468,0,0,0-.8747.87469h0v4.41156H919.93125v-4.41156a.87468.87468,0,0,0-.8747-.87469H898.06363a.87466.87466,0,0,0-.87469.87463v4.41162H884.0684v-4.41156a.87468.87468,0,0,0-.8747-.87469H862.20078a.87467.87467,0,0,0-.87469.87469h0v4.41156H848.20548v-4.41156a.87467.87467,0,0,0-.87469-.87469H826.33787a.87468.87468,0,0,0-.8747.87469h0v4.41156H812.34263v-4.41156a.87468.87468,0,0,0-.8747-.87469H647.02347a.87467.87467,0,0,0-.87469.87469h0v4.41156H633.02817v-4.41156a.87467.87467,0,0,0-.87469-.87469H611.16062a.87468.87468,0,0,0-.8747.87469h0v4.41156h-13.1206v-4.41156a.87466.87466,0,0,0-.87463-.87469h-20.993a.87467.87467,0,0,0-.87469.87469h0v4.41156H561.3024v-4.41156a.87467.87467,0,0,0-.87469-.87469H539.43479a.87468.87468,0,0,0-.8747.87469h0v4.41156H525.43955v-4.41156a.87467.87467,0,0,0-.87469-.87469H503.57194a.87468.87468,0,0,0-.8747.87469h0v4.41156h-13.1206v-4.41156a.87468.87468,0,0,0-.8747-.87469H467.709a.87468.87468,0,0,0-.87469.87463v4.41162H453.71375v-4.41156a.87467.87467,0,0,0-.87466-.87469H431.84617a.8747.8747,0,0,0-.8747.87469h0v4.41156H390.735A20.99292,20.99292,0,0,0,369.74213,631.232v9.4925A20.99291,20.99291,0,0,0,390.735,661.71736h698.01416a20.99293,20.99293,0,0,0,20.99292-20.99286V631.232A20.9929,20.9929,0,0,0,1088.74918,610.23908Z" transform="translate(-90.2579 -231.65939)" fill="#3f3d56" /></svg>
                </div>
            </div>
            <div className="proficiencies" ref={proficienciesContainer}>
                <h1>Proficiencies</h1>
                <div className="proficiencies__icons">
                    {
                        proficiencies?.map(proficiency => (
                            <div key={proficiency.text} className="proficiencies__icons__container">
                                <div className="proficiency__icon">
                                    {proficiency.icon}
                                </div>
                                <p>{proficiency.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}