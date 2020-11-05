import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import './Skills.css';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';

function Skills() {

let skill = useRef(null);
let description = useRef(null);
let icons = useRef(null);


    useEffect(() => {

        const first = description.firstElementChild;
        const second= first.nextSibling;
        const third = second.nextSibling;
        const fourth = third.nextSibling;
        const fifth = fourth.nextSibling;

        let tl = new TimelineLite();

        TweenMax.to(skill, 0, {css: {visibility: 'visible'}});
        tl.staggerFrom([second, third, fourth, fifth], 0.8, {opacity: 0, x: -15, ease: Power3.easeout}, 0.2, 'start')
        tl.from(icons, 0.8, {opacity: 0, x:0, ease: Power3.easeout}, 0.2, 'start');

    }, [])

    return(
        <div className="skill-container" ref={el => skill = el}>
            <div className="skill-wrapper">
                <div className="skill-text" ref={el => description = el}>
                    <h1 className="text-header">Skills</h1>
                    <p className="text-desc">My area of proficiency is front-end development.</p>
                    <p className="text-desc">I am knowledgeable in HTML5, CSS3, Bootstrap, and Javascirpt. I use React JS as my Javascript framework.</p>
                    <p className="text-desc">I use Npm as my package manager and git/Github for version control.</p>
                    <p className="text-desc">I have basic knowledge in Node JS, used as a basic server side environment.</p>
                </div>
                <div className="skill-icon-container" ref={el => icons = el}>
                    <div className="icon-wrapper">
                        <div className="icon-cube">
                            <FaIcons.FaHtml5 className="icon"/>
                        </div>
                        <div className="icon-cube ">
                            <IoIcons.IoLogoCss3 className="icon" />
                        </div>
                        <div className="icon-cube">
                            <SiIcons.SiBootstrap className="icon" />
                        </div>
                        <div className="icon-cube">
                            <SiIcons.SiJavascript className="icon" />
                        </div>
                        <div className="icon-cube">
                            <FaIcons.FaNode className="icon" />
                        </div>
                        <div className="icon-cube">
                            <FaIcons.FaReact  className="icon"/>
                        </div>
                        <div className="icon-cube">
                            <FaIcons.FaGithub  className="icon"/>
                        </div>
                        <div className="icon-cube">
                            <FaIcons.FaNpm className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;