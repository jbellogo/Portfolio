import data from "../data/index.json";
import "../styles/App.css";
import "../styles/Portfolio.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      showDots={true}
      customTransition="transform 500ms ease-in-out"
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="project--item"
    >
      {data?.portfolio?.map((item, index) => (
        <div key={index}>
          <button
            className="btn project--btn"
            onClick={() => window.open(item.link, '_blank', 'noopener noreferrer')}
          >
            View In Github
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="project--img">
            <img src={item.src} alt="Placeholder" />
          </div>
          <div className="project--content">
            <div>
              <h3 className="project--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="Portfolio">
      <h1 className="section--heading">My Portfolio</h1>
      <MyCarousel></MyCarousel>
    </section>
  );
}