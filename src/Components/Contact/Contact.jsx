import React from "react";
// import ReactGitHubCalendar from 'react-ts-github-calendar';
import "./Contact.css";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { GrMail } from 'react-icons/gr';



export const Contact = () => {
    return (
        <div className="stats__contact" id="contact">
            
            <div className="contact__container">
                <h1>Get In Touch</h1>
                <div className="contact__container__details">
                    <div>
                        <FaPhoneAlt className="contact__container__details__icon" />
                        <span>+91 9060801550</span>
                    </div>
                    <div>
                        <IoLocationSharp className="contact__container__details__icon" />
                        <span>Bidar, Karnataka</span>
                    </div>
                    <div>
                        <GrMail className="contact__container__details__icon" />
                        <span>patilakash211@gmail.com</span>
                    </div>
                </div>
                <div className="contact__container__social">
                    <a target="_blank" rel="noreferrer" href="https://github.com/patilakash211"><IoLogoGithub /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patilakash211/"><IoLogoLinkedin /></a>
                </div>
                <div className="design-name">
                    Designed by :- Naeem Shaik
                </div>
            </div>
        </div>
    )
}