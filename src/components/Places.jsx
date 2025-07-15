// This component renders a list of places based on props passed in.
// It displays a title, and either a fallback message or a list of selectable places.

export default function Places({ title, places, fallbackText, onSelectPlace }) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {/* Show fallback text if there are no places */}
      {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {/* Show list of places if available */}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              {/* Trigger onSelectPlace with place ID when clicked */}
              <button onClick={() => onSelectPlace(place.id)}>
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
