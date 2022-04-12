import React, { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin";
import author from "../utils/images/Akash image.jpg";
import "./LandingSection.css";



export const LandingSection = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const imageReveal = CSSRulePlugin.getRule(".hero__container__image::after")
    const textReveal = CSSRulePlugin.getRule(".hero__container__info::after")

    gsap.registerPlugin(CSSPlugin, CSSRulePlugin)

    const tl = new TimelineLite();

    useEffect(() => {
        tl.to(textRef.current, { duration: 0, visibility: "visible", delay: -0.2 })
            .to(textReveal, { duration: 1.2, width: "0%", ease: Power4.easeInOut })
            .from(textRef.current, { duration: 1.2, scale: 1.2, ease: Power4.easeInOut, delay: -1.2 })
        tl.to(imageRef.current, { duration: 0, visibility: "visible", delay: -1.7 })
            .to(imageReveal, { duration: 1.2, width: "0%", ease: Power4.easeInOut, delay: -1.5 })
            .from(imageRef.current, { duration: 1.2, scale: 1.5, ease: Power4.easeInOut, delay: -1.5 })
    })

    return (
        <>
            <div className="hero__container">
                <div className="hero__container__info__parent">
                    <div ref={textRef} className="hero__container__info">
                        <h1>Hi, I'm</h1>
                        <h3>Akash Patil</h3>
                        <p>Full Stack Web Developer</p>
                    </div>
                </div>
                <div className="hero__container__image__parent">
                    <div className="hero__container__image">
                        <img ref={imageRef} src={author} alt="author" />
                    </div>
                </div>
                <div className="hero__container__scroll__arrow">
                    {/* Reference from https://codepen.io/postor/pen/mskxI */}
                    <svg className="arrows">
                        <path className="a1" d="M0 0 L25 25 L50 0"></path>
                        <path className="a2" d="M0 20 L25 47 L50 20"></path>
                        <path className="a3" d="M0 40 L25 67 L50 40"></path>
                    </svg>
                </div>
            </div>

        </>
    )
}


