export default function Review():JSX.Element{
  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">Andersons films are too precious for some.</p>

        <footer className="review__details">
          <cite className="review__author">Bill Goodykoontz</cite>
          <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
        </footer>
      </blockquote>

      <div className="review__rating">8,0</div>
    </div>
  );
}
