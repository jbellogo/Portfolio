export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/bjj.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="section--heading">About Me</h1>
          <p className="hero--section-description">
          Outside of software development, I am a passionate martial artist with over 15 years of experience training in various striking and grappling disciplines. 
          Martial arts have taught me invaluable lessons in discipline, competition, and humility, and along the way, I’ve also formed lifelong friendships.
          </p>
          <p className="hero--section-description">
          I also have a deep love for pure mathematics, animals, and reading historical fiction. 
          My favorite quote, which I hold close to my heart, is from Hannibal Barca, the Carthaginian general. 
          As his armies struggled to cross the Alps on their way to Rome, 
          he declared with striking eloquence and absolute resolve: <i>'Aut viam inveniam aut faciam,'</i> meaning, <i>'I will find a way or I will make one.'</i>          </p>
        </div>
      </div>
    </section>
  );
}
