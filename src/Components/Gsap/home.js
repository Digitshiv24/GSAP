import React, { useEffect } from "react";
import * as styles from "./home.module.scss";
import bg2 from "./images/bg2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // import the ScrollTrigger plugin
import bg from "./images/bg.png";

gsap.registerPlugin(ScrollTrigger);

export default function Animation() {
  useEffect(() => {
    // animate #container2 on scroll
    gsap.from("#container2", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#container2",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // animate #container3 on scroll
    gsap.from("#container3", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#container3",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#subheading", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#subheading",
        start: "top 20%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // animate text in #container3 on scroll
    gsap.from("#container3 .description", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#container3",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className={styles.Animation}>
      <div className={styles.container} id="container1">
        <div className={styles.contain}>
          <div className={styles.hero}>
            <div className={styles.hero__title}>
              <span>Shop Now</span>
              <h1>
                Special <span id="subheading">Discount</span>
              </h1>
            </div>
            <div>
              <span className={styles.category}>Just for You</span>
              <h3>Scroll down...</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container} id="container2">
        <div className={styles.contain}>
          <div className={styles.description}>
            <span className={styles.category}>About Us</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi corrupti nemo non velit accusantium dolor ex
              voluptas aliquam, error quidem, explicabo debitis sit voluptate
              assumenda rerum et omnis natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi corrupti nemo non velit accusantium dolor ex
              voluptas aliquam, error quidem, explicabo debitis sit voluptate
              assumenda rerum et omnis natus.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container} id="container3">
        <div className={styles.contain}>
          <span className={styles.category}>Gallery</span>
          <div className={styles.ImageFirst}>
            <img src={bg} alt="background"></img>
          </div>
        </div>
      </div>
      <div id="bg">
        <img src={bg2} alt="Image" />
      </div>
    </div>
  );
}
