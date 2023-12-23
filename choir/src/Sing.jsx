import { useState } from 'react';
import './Sing.css'; 

function Sing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOnClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sing">
      <div className="heroimage--sing"></div>
      <div id="main" className="sing__content">
        <div className="sing__introduction">
            <h2>Welcome to Your Singing Journey:)</h2>
            <p className="intro">Embark on an exciting journey to discover your voice and master the art of singing with Crescendo Voices. Whether you are taking your first steps into singing or looking to refine your vocal skills, our comprehensive guide is here to assist you every note of the way.</p>       
            <p className="intro">From fundamental techniques to advanced vocal exercises, you'll find valuable insights and practical tips to enhance your singing abilities. Let's start your journey towards vocal excellence together!</p>
            <p className="hint">* Scroll down to explore various topics that cover everything from basic vocal techniques to maintaining vocal health and utilizing useful resources. Each section is designed to unfold key aspects of singing in a simple and engaging manner. Happy singing!</p>
        </div>

        <div className="accordion">
          <div className="accordion__item">
            <button className="accordion__header" onClick={() => handleOnClick(0)}>
              <h3>Vocal Basics ▾</h3>
            </button>
            <div className={`accordion__content ${activeIndex === 0 ? 'active' : ''}`}>
              <p>Start your singing journey by understanding the basics of vocal techniques.  Learn about breath control, posture, and vocal warm-ups that are essential for every singer.</p>
              <ul className="basic__list">
                <li className="basic__item">Breathing Techniques: Master the art of diaphragmatic breathing.</li>
                <li className="basic__item">Posture for Singing: Learn how to stand and hold your body for optimal vocal performance.</li>
                <li className="basic__item">Vocal Warm-Ups: Simple exercises to prepare your voice for singing.</li>
              </ul>
            </div>
          </div>

          <div className="accordion__item">
            <button className="accordion__header" onClick={() => handleOnClick(1)}>
              <h3>Advanced Techniques ▾</h3>
            </button>
            <div className={`accordion__content ${activeIndex === 1 ? 'active' : ''}`}>
              <p>For those who have mastered the basics, explore advanced singing techniques to further develop your voice. Enhance your range, tone, and expression with these methods.</p>
              <ul className="advanced__list">
                <li className="advanced__item">Expanding Vocal Range: Techniques to safely extend your singing range.</li>
                <li className="advanced__item">Voice Control: Learn how to control your dynamics and expression.</li>
                <li className="advanced__item">Harmonization: The art of singing in harmony with others.</li>
              </ul>
            </div>
          </div>

          <div className="accordion__item">
            <button className="accordion__header" onClick={() => handleOnClick(2)}>
              <h3>Vocal Health and Care ▾</h3>
            </button>
            <div className={`accordion__content ${activeIndex === 2 ? 'active' : ''}`}>
              <p>Protecting and caring for your voice is crucial. Discover tips and practices to maintain good vocal health.</p>
              <ul className="health__list">
                <li className="health__item">Hydration and Diet: Best practices for vocal health.</li>
                <li className="health__item">Rest and Recovery: Understanding the importance of giving your voice a break.</li>
                <li className="health__item">Dealing with Vocal Strain: How to recognize and recover from strain.</li>
              </ul>
            </div>
          </div>

          <div className="accordion__item">
            <button className="accordion__header" onClick={() => handleOnClick(3)}>
              <h3>Resources and Tools ▾</h3>
            </button>
            <div className={`accordion__content ${activeIndex === 3 ? 'active' : ''}`}>
              <p>Explore a variety of resources and tools to aid your singing practice. From mobile apps to online courses, find what works best for you.</p>
              <ul className="resource__list">
                <li className="resource__item">Mobile Apps for Singers: Apps to help with tuning, rhythm, and practice.</li>
                <li className="resource__item">Online Courses: Curated list of online courses for different levels of singers.</li>
                <li className="resource__item">Practice Tools: Metronomes, pitch pipes, and other useful tools.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sing;