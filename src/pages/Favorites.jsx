import { useEffect, useState } from "react";
import { Heart, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });

  // Keep favorites saved in localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Remove a property from favorites
  const removeFavorite = (propertyId) => {
    const updatedFavorites = favorites.filter(
      (property) => property.id !== propertyId
    );

    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-page">

      {/* Favorites Header */}
      <section className="favorites-header">
        <div className="favorites-header-content">
          <div className="favorites-header-icon">
            <Heart size={30} fill="currentColor" />
          </div>

          <div>
            <h1>My Favorites</h1>

            <p>
              All your saved properties in one place.
              Keep track of the homes you love and
              come back to them anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Saved Properties */}
      <section className="favorites-section">

        {favorites.length > 0 && (
          <div className="favorites-section-heading">
            <h2>
              Saved Properties ({favorites.length})
            </h2>
          </div>
        )}

        {/* Show cards only when favorites exist */}
        {favorites.length > 0 ? (

          <div className="favorites-grid">

            {favorites.map((property) => (

              <div className="favorite-card" key={property.id}>

                {/* Property Image */}
                <div className="favorite-card-image">
                  <img
                    src={property.image}
                    alt={property.title || property.name}
                  />

                  <span className="favorite-category">
                    {property.type}
                  </span>

                  <button
                    className="favorite-heart-btn"
                    onClick={() => removeFavorite(property.id)}
                    aria-label="Remove from favorites"
                    title="Remove from favorites"
                  >
                    <Heart
                      size={21}
                      fill="currentColor"
                    />
                  </button>
                </div>

                {/* Property Information */}
                <div className="favorite-card-content">

                  <h3 className="favorite-price">
                    {typeof property.price === "number"
                      ?  `₦${property.price.toLocaleString("en-NG")}`
                      : property.price}
                    </h3>

                  <p className="favorite-location">
                    {property.location}
                  </p>

                  <h4 className="favorite-property-title">
                    {property.title || property.name}
                  </h4>

                  {/* Property Details */}
                  <div className="favorite-card-details">

                    {property.bedrooms != null && (
                      <span>
                        {property.bedrooms} Beds
                      </span>
                    )}

                    {property.bathrooms != null && (
                      <span>
                        {property.bathrooms} Baths
                      </span>
                    )}

                    {property.area != null && (
                      <span>
                        {property.area} sq ft
                      </span>
                    )}

                  </div>

                  {/* Card Actions */}
                  <div className="favorite-card-actions">

                    <Link
                      to={`/properties/${property.id}`}
                      className="view-property-btn"
                    >
                      View Details
                      <ArrowRight size={17} />
                    </Link>

                    <button
                      className="remove-favorite-btn"
                      onClick={() => removeFavorite(property.id)}
                      aria-label="Delete favorite property"
                      title="Remove property"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* Empty State: Show only when there are no favorites */
          <div className="empty-favorites">

            <div className="empty-favorites-icon">
              <Heart size={42} />
            </div>

            <h2>No Favorites Yet</h2>

            <p>
              You haven't saved any properties yet.
              Explore our listings and click the heart
              icon to add your favorite properties.
            </p>

            <Link
              to="/properties"
              className="browse-properties-btn"
            >
              Browse Properties
              <ArrowRight size={18} />
            </Link>

          </div>

        )}

      </section>

    </div>
  );
}

export default Favorites;