import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { data } from "../../utils/projectUtils";
import mamaearth from "../../utils/images/mamaearth.png"
import Cultfit from "../../utils/images/Cultfit.png"
import "./Project.css";

export const Projects = () => {
    const images = [mamaearth,Cultfit];
    const projectsContainer = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause"
    });

    useEffect(() => {
        const projects = gsap.utils.toArray(".projects__container .project");
        gsap.to(projects, {
            xPercent: -100 * (projects.length - 1),
            ease: "none",
            scrollTrigger: {
                // markers: true,
                trigger: ".projects__container",
                pin: true,
                start: "top top",
                scrub: 1,
                snap: {
                    snapTo: 1 / (projects.length - 1),
                    duration: { min: 0.1, max: 0.1 }
                },
                end: () => "+=" + (projectsContainer.current.offsetWidth)
            }
        });
    }, [])

    return (
        <div className="projects__container__parent">
            
            <div className="projects__container" ref={projectsContainer}>
                {
                    data?.map((project, index) => {
                        return (
                            <div id="projects" key={project.heading} className={`${project.class} project`}>
                                <div className="project__text__container__parent">
                                    <div className="project__text__container">
                                        <h1>{project.heading}</h1>
                                        <div dangerouslySetInnerHTML={{ __html: project.textContent }}></div>
                                        <div className="project__button__container">
                                            <a href={project.githubLink} target="_blank" rel="noreferrer"><button>GitHub</button></a>
                                            <a href={project.liveLink} target="_blank" rel="noreferrer"><button>Live Demo</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project__image__container">
                                    <div className="project__image__container__number">
                                        <span>0<span>{index + 1}</span></span>
                                    </div>
                                    <div className="project__image__container__image">
                                        <a href={project.liveLink} target="_blank" rel="noreferrer">
                                            <img src={images[index]} alt={project.image} />
                                        </a>
                                    </div>
                                </div>
                                <div className="project__container__scroll__arrow">
                                    {/* Reference from https://codepen.io/postor/pen/mskxI */}
                                    <svg className="Project__container__arrows">
                                        <path className="a1" d="M0 0 L25 25 L50 0"></path>
                                        <path className="a2" d="M0 20 L25 47 L50 20"></path>
                                        <path className="a3" d="M0 40 L25 67 L50 40"></path>
                                    </svg>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}