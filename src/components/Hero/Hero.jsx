import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="blue-circle"/>
            <motion.h1
            initial={{y: "2rem",opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{
              duration:2,
              type: "spring",
            }}
            >
              Find Your <br />
              Perfect <br />
              Home
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Explore homes tailored to your lifestyle</span>
            <span className="secondaryText">Making your property search simple & stress-free</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color= "var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span>+</span>
                </span><span className="secondaryText">
                  Premium Products
                </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
                </span><span className="secondaryText">
                  Happy Customers
                </span>
            </div>

             <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
                </span><span className="secondaryText">
                  Awards Winning
                </span>
            </div>
          </div>
        </div>
        
        <div className="flexCenter hero-right">
          <motion.div
          initial={{x:"7rem", opacity: 0}}
          animate={{x: 0 , opacity: 1}}
          transition={{
            duration:2,
            type:"spring"
          }}
          className="image-container">
            <img src="./F1.jpg" alt="logo" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
