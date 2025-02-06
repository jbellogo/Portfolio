export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="/img/bjj.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="section--heading">About Me</h1>
          <p className="hero--section-description">
          Outside of tech, I’m an aspiring mathematician, a <strong><i>relentless</i></strong> martial arts competitor, and a part-time supporter of individuals with mental disabilities.
          </p>
          <p className="hero--section-description">
          I approach everything I do with a 'roll up my sleeves' attitude.
          My favorite quote, which I always strive to live by, comes from Hannibal Barca, the Carthaginian general.
          As his armies struggled to cross the Alps on their way to Rome, 
          he said: <i>'Aut viam inveniam aut faciam,'</i> meaning, <strong><i>'I will find a way or I will make one.'</i></strong>          </p>
        </div>
      </div>
    </section>
  );
}
