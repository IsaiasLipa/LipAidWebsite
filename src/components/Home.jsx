import homeImage from '../assets/homeImage.png';
import './Home.css';

export default function Home({ texts, id }) {
  return (
    <section id={id} className="hero">
      <img src={homeImage} alt="Home" className="hero-image" />

      <div className="hero-text">
        <h1>{texts.title}</h1>
      </div>

      <a className="book-button" href="#contact">
        {texts.cta}
      </a>
    </section>
  );
}
