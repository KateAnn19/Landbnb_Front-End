import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import './styles/style.scss'


const About = () => {
    
    return (
        <>
    <body>
    <section id="about-header">
      <div class="logo-nav-container">
        <div class="logo">
          <i class="fas fa-search-dollar"></i>
          <h1>landbnb</h1>
        </div>
        <nav class="nav-container">
          <Link to="/">Home</Link>
          <Link to="/market">Overview</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Get Started</Link>
          {/* <Link href="https://front-end-1-two.vercel.app/login">Get Started</Link> */}
        </nav>
      </div>
      <div class="slogan-container">
        <div class="slogan">
          <h2>About Us</h2>
          </div>
        </div>
    </section>
    <section id="homepage-about">
      <div class="about-container">
        <div class="about-text">
          <div class="about-heading">
            <h3>
              Meet the Team
            </h3>
          </div>
        </div>
          <div class="person">
            <div class="name-container">
              <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=1200"
              alt="The character Luke Skywalker from Star Wars"
              />
              <h4>Luke Skywalker</h4>
            </div>
            <div class="bio-container">
              <p>Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.</p>
            </div>
          </div>
          <div class="person">
            <div class="name-container">
              <img
              src="https://lumiere-a.akamaihd.net/v1/images/finn-main_ad2b705b.jpeg?region=75%2C177%2C1205%2C677&width=1200"
              alt="The character Finn from Star Wars"
              />
              <h4>Finn</h4>
            </div>
            <div class="bio-container">
              <p>Committed to the cause of the Resistance, Finn fights alongside his closest friends in the struggle to defeat the First Order, the evil regime he once served as a stormtrooper. As FN-2187, he was trained from birth to serve the First Order, but a skirmish on Jakku awakened his conscience and drove him down a different path, one that proved both heroic and dangerous.</p>
            </div>
          </div>
          <div class="person">
            <div class="name-container">
              <img
              src="https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=1200"
              alt="The character Han Solo from Star Wars"
              />
              <h4>Han Solo</h4>
            </div>
            <div class="bio-container">
              <p>Han Solo rose from an impoverished childhood on the mean streets of Corellia to become one of the heroes of the Rebel Alliance. As captain of the Millennium Falcon, Han and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. After the Battle of Endor, Han faced difficult times in a chaotic galaxy, leading to a shattering confrontation with his estranged son Ben.</p>
            </div>
          </div>
          <div class="person">
            <div class="name-container">
              <img
              src="https://lumiere-a.akamaihd.net/v1/images/poe-main_611e1021.jpeg?region=0%2C0%2C1280%2C720&width=1200"
              alt="The character Poe Dameron from Star Wars"
              />
              <h4>Poe Dameron</h4>
            </div>
            <div class="bio-container">
              <p>A Resistance starfighter ace, Poe Dameron is one of Leia Organa’s most-trusted operatives. He can fly anything – which is fortunate given how often his headstrong nature leads him into trouble. Poe leads the attack that destroys Starkiller Base, but soon finds himself on the run from the First Order. Sidelined without his beloved X-wing, he learns tough lessons about leadership, heroism and sacrifice. Those lessons will prove essential in rebuilding the Resistance before a showdown with the forces of evil at Exegol.</p>
            </div>
          </div>
          <div class="person">
            <div class="name-container">
              <img
              src="https://lumiere-a.akamaihd.net/v1/images/kylo-ren-main-tros-a_6d77fd1e.jpeg?region=0%2C0%2C1280%2C720&width=1200"
              alt="The character Supreme Leader Kylo Ren from Star Wars"
              />
              <h4>Supreme Leader Kylo Ren</h4>
            </div>
            <div class="bio-container">
              <p>The son of Han Solo and Leia Organa, Ben Solo was seduced by the dark side of the Force and renamed himself Kylo Ren: leader of the Knights of Ren, champion of the First Order, and apprentice to Supreme Leader Snoke. Driven to destroy the past, Kylo killed his father and his master, supplanting Snoke as Supreme Leader. But he remained haunted by his father’s death, his connection with the mysterious Rey, and the pull of the good in himself. In time, all three would help Ben Solo return to the light.</p>
            </div>
          </div>
          <div class="person">
            <div class="name-container">
              <img
              src="https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536"
              alt="The character C-3PO from Star Wars"
              />
              <h4>C-3PO</h4>
            </div>
            <div class="bio-container">
              <p>C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.</p>
            </div>
          </div>
          <div class="person">
            <div class="name-container">
              <img
              src="https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536"
              alt="The character Rey from Star Wars"
              />
              <h4>Rey</h4>
            </div>
            <div class="bio-container">
              <p>Seemingly abandoned by her parents on Jakku, Rey grew up a scavenger amid the wreckage of war. Her life changed when she agreed to help a droid on an urgent mission for the Resistance. Rey discovered she was powerful in the Force, and sought out the vanished Jedi Master Luke Skywalker to train her. That ended in disappointment, as did her attempt to bring Kylo Ren back to the light. But the resilient Rey continued her training and learned the truth about her parentage and her mysterious connection with Kylo. She then faced her greatest test: a confrontation with fear and evil that would determine the galaxy’s fate.</p>
            </div>
          </div>
          <div class="person">
            <div class="name-container">
              <img
              src="https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg?region=131%2C0%2C951%2C536"
              alt="The character Chewbacca from Star Wars"
              />
              <h4>Chewbacca</h4>
            </div>
            <div class="bio-container">
              <p>A legendary Wookiee warrior and Han Solo’s longtime co-pilot, Chewbacca continues to serve as faithful first mate to carry out daring missions against the First Order behind the controls of the Millennium Falcon. Known as Chewie to his closest friends, he was part of a core group of rebels who restored freedom to the galaxy during the reign of the Galactic Empire. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart and unwavering loyalty to his friends.</p>
            </div>
          </div>         
      </div>
    </section>
    <section id="homepage-call-to-action">
      <div class="cta-text">
        <h3>Start making more money!</h3>
        <Link to="/login">
        <button>Sign Up</button>
        </Link>
      </div>
    </section>
    <section id="footer">
      <div class="footer-container">
        <div class="copyright">
          <p>© 2020 Landbnb, Inc. All rights reserved</p>
        </div>
        <div class="footer-container-right">
          <div class="language"><p>English</p></div>
          <div class="currency"><p>$ USD</p></div>
          <div class="social-icons">
            <a href="https://www.instagram.com/"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="https://www.twitter.com/"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="https://www.instagram.com/"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
  </body>
        </>
    
    );
  };
  export default About;