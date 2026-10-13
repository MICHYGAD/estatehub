import { useFavorites } from "../components/useFavorites";
import "./Properties.css";
import { useState } from "react";
import { Link, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext.jsx";
import  properties  from "../data/properties";
import {
  Search,
  MapPin,
  Heart,
  BedDouble,
  Bath,
  Palmtree,
  ArrowRight,
  Building2,
  House,
  Tag,
  Store,
  ShieldCheck,
  Headphones,
  Maximize
} from "lucide-react";


function Properties() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const currentLocation = useLocation();


  const { toggleFavorite, isFavorite } = useFavorites();
  const [searchParams] = useSearchParams();
  const initialSearchLocation = searchParams.get("location") || "";
  const initialSearchType = searchParams.get("type") || "";
  const initialSearchBudget = searchParams.get("budget") || "";

  const [location, setLocation] = useState(() =>
    initialSearchLocation.toLowerCase().replace(/ /g, "-")
  );
  const [propertyType, setPropertyType] = useState(() =>
    initialSearchType.toLowerCase()
  );
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(() =>
    properties.filter((property) => {
      const propertyLocation = String(property.location || "").toLowerCase();
      const requestedLocation = initialSearchLocation
        .toLowerCase()
        .replace(/-/g, " ");

      const matchesLocation =
        !requestedLocation || propertyLocation.includes(requestedLocation);

      const matchesType =
        !initialSearchType ||
        property.type?.toLowerCase() === initialSearchType.toLowerCase();

      const numericPrice = Number(
        String(property.price).replace(/[₦,$,\s]/g, "")
      );

      const matchesBudget =
        !initialSearchBudget || numericPrice <= Number(initialSearchBudget);

      return matchesLocation && matchesType && matchesBudget;
    })
  );





 

const handlePropertySearch = (event) => {
  event.preventDefault();

  const results = properties.filter((property) => {
    // Filter by location
    const matchesLocation =
      !location ||
      property.location
        .toLowerCase()
        .includes(location.toLowerCase());

    // Filter by property type
    const matchesType =
  !propertyType ||
  property.type?.toLowerCase() === propertyType.toLowerCase();

    // Filter by bedrooms
    const numericBedrooms = Number(
      property.bedrooms?.match(/\d+/)?.[0] || 0
    );

    const matchesBedrooms =
      !bedrooms ||
      (bedrooms === "4"
        ? numericBedrooms >= 4
        : numericBedrooms === Number(bedrooms));

    // Convert the price to a number
    const numericPrice = Number(
      property.price.replace(/[₦,$]/g, "")
    );

    // Filter by price range
    let matchesPrice = true;

    if (priceRange === "under-100m") {
      matchesPrice = numericPrice < 100000000;
    } else if (priceRange === "100m-250m") {
      matchesPrice =
        numericPrice >= 100000000 &&
        numericPrice <= 250000000;
    } else if (priceRange === "250m-500m") {
      matchesPrice =
        numericPrice > 250000000 &&
        numericPrice <= 500000000;
    } else if (priceRange === "500m-plus") {
      matchesPrice = numericPrice > 500000000;
    }

    return (
      matchesLocation &&
      matchesType &&
      matchesBedrooms &&
      matchesPrice
    );
  });

  console.log("Selected filters:", {
    location,
    propertyType,
    priceRange,
    bedrooms,
  });

  console.log("Filtered results:", results);

  setFilteredProperties(results);
};


  return (
    <>
    <main className="properties-main">
      <section className="properties-hero">

        {/* Hero Content */}

        <div className="properties-hero-content">

          <span className="properties-badge">
            DISCOVER YOUR NEXT HOME
          </span>

          <h1>
            Find Your Perfect
            <span> Property</span>
          </h1>

          <p>
            Explore a wide range of properties for sale and rent.
            <br />
            Find the space that fits your lifestyle and budget.
          </p>


          {/* Hero Features */}

          <div className="hero-features">

            <div className="hero-feature">
              <House size={25} />
              <span>Trusted Listings</span>
            </div>

            <div className="hero-feature">
              <ShieldCheck size={25} />
              <span>Secure & Safe</span>
            </div>

            <div className="hero-feature">
              <Headphones size={25} />
              <span>24/7 Support</span>
            </div>

          </div>

        </div>


        {/* Hero Image */}

        <div className="properties-hero-image">

          <img
            src="/images/bungalow.jpg"
            alt="Modern luxury house"
          />

          <div className="hero-image-badge">

            <House size={25} />

            <div>
              <strong>Better Homes</strong>
              <span>Brighter Futures</span>
            </div>

          </div>

        </div>

      </section>
      </main>


      {/* PROPERTY SEARCH */}

<section className="listing-search">

  <form
    className="listing-search-form"
    onSubmit={handlePropertySearch}
  >

    {/* Location */}

    <div className="listing-field">

      <label
        className="listing-label"
        htmlFor="listing-location"
      >
        <MapPin size={20} />
        <span>Location</span>
      </label>

      <select
        id="listing-location"
        className="listing-select"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      >
        <option value="">Select location</option>
        <option value="lekki">Lekki</option>
        <option value="ikeja">Ikeja</option>
        <option value="yaba">Yaba</option>
        <option value="victoria-island">Victoria Island</option>
      </select>

    </div>


    {/* Property Type */}

    <div className="listing-field">

      <label
        className="listing-label"
        htmlFor="listing-property-type"
      >
        <House size={20} />
        <span>Property Type</span>
      </label>

      <select
        id="listing-property-type"
        className="listing-select"
        value={propertyType}
        onChange={(event) => setPropertyType(event.target.value)}
      >
        <option value="">All Types</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="villa">Villa</option>
        <option value="commercial">Commercial</option>
      </select>

    </div>


    {/* Price Range */}

    <div className="listing-field">

      <label
        className="listing-label"
        htmlFor="listing-price-range"
      >
        <Tag size={20} />
        <span>Price Range</span>
      </label>

      <select
        id="listing-price-range"
        className="listing-select"
        value={priceRange}
        onChange={(event) => setPriceRange(event.target.value)}
      >
        <option value="">Any Price</option>
        <option value="under-100m">Under ₦100M</option>
        <option value="100m-250m">₦100M - ₦250M</option>
        <option value="250m-500m">₦250M - ₦500M</option>
        <option value="500m-plus">₦500M+</option>
      </select>

    </div>


    {/* Bedrooms */}

    <div className="listing-field">

      <label
        className="listing-label"
        htmlFor="listing-bedrooms"
      >
        <BedDouble size={20} />
        <span>Bedrooms</span>
      </label>

      <select
        id="listing-bedrooms"
        className="listing-select"
        value={bedrooms}
        onChange={(event) => setBedrooms(event.target.value)}
      >
        <option value="">Any</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4+ Bedrooms</option>
      </select>

    </div>


    {/* Search Button */}

    <button
      type="submit"
      className="listing-search-button"
    >
      <Search size={19} />
      <span>Search</span>
    </button>

  </form>

</section>

{/* END OF PROPERTY SEARCH */}

    


  


    {/* AVAILABLE PROPERTIES */}
    <section className="available-properties">

  {/* Section Heading */}
  <div className="properties-heading">

    <div className="properties-heading-text">

      <span className="section-tag">
        FEATURED PROPERTIES
      </span>

      <h2>
        Available <span>Properties</span>
      </h2>

      <p>
        Discover our handpicked selection of the best properties
        <br className="desktop-break" />
        in prime locations.
      </p>

    </div>
  </div>


  {/* Property Cards */}
  <div className="property-grid">

    {/* {properties.map((property) => ( */}
    {filteredProperties.map((property) => (

      <article
        className="property-card"
        key={property.id}
      >

        <div className="property-image">

          <img
            src={property.image}
            alt={property.title}
          />

          <span className="property-status">
            {property.status}
          </span>

          <button
            type="button"
            className={`favorite-button ${
              isFavorite(property.id) ? "active" : ""
            }`}
            onClick={() => {
              if (!isAuthenticated) {
                navigate("/login", {
                  state: { from: currentLocation },
                });
                return;
              }
              toggleFavorite(property);
            }}
            aria-label={
              isFavorite(property.id)
                ? `Remove ${property.title} from favorites`
                : `Add ${property.title} to favorites`
            }
          >
            <Heart
              size={20}
              fill={isFavorite(property.id) ? "currentColor" : "none"}
            />
       </button>

        </div>


        <div className="property-content">

          <h3 className="property-price">
            {property.price}

            {property.period && (
              <span>{property.period}</span>
            )}
          </h3>

          <h4 className="property-title">
            {property.title}
          </h4>


          <div className="property-location">
            <MapPin size={16} />
            <span>{property.location}</span>
          </div>


          <div className="property-details">

            {property.bedrooms && (
              <div className="property-detail">
                <BedDouble size={16} />
                <span>{property.bedrooms}</span>
              </div>
            )}

            {property.bathrooms && (
              <div className="property-detail">
                <Bath size={16} />
                <span>{property.bathrooms}</span>
              </div>
            )}

            <div className="property-detail">
              <Maximize size={16} />
              <span>{property.size}</span>
            </div>

          </div>


          <Link
            to={`/properties/${property.id}`}
            className="view-property-button"
          >
            View Property
            <ArrowRight size={17} />
          </Link>

        </div>

      </article>

    ))}

  </div>

</section>

{/* END OF AVAILABLE PROPERTIES */}



    {/* EXPLORE PROPERTIES CATEGORIES */}
    <section className="category-properties">
        <div className="category-header">

            <span className="category-tag">
                PROPERTIES CATEGORIES
            </span>
            <h2>
                Explore Our <span>Properties</span>
            </h2>

            <p>
                Find the perfect property that matches your needs.
            </p>
        </div>

        {/* Apartments Card */}
        <div className="category-types-grid">

            {/* Apartments Card */}
            <div className="category-type-card">
                <div className="category-type-info">
                    <Building2 size={25} />

                    <h3>Apartments</h3>

                    <p>118+ Properties</p>

                    <Link
                      to="/properties?type=Apartment"
                      className="category-arrow"
                      aria-label="Explore apartments"
                  >
                      <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="category-type-image">
                    <img
                        src="/images/apartment2.jpg"
                        alt="Apartment"
                    />
                </div>
            </div>

            {/* Houses Card */}
            <div className="category-type-card">
                <div className="category-type-info">
                    <House size={25} />

                    <h3>Houses</h3>

                    <p>94+ Properties</p>

                    <Link
                      to="/properties?type=House"
                      className="category-arrow"
                      aria-label="Explore houses"
                    >
                      <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="category-type-image">
                    <img
                        src="/images/bungalow.jpg"
                        alt="House"
                    />
                </div>
            </div>

            {/* Villas Card */}
            <div className="category-type-card">
                <div className="category-type-info">
                    <Palmtree size={25} />
                    <h3>Villas</h3>
                    <p>52+ Properties</p>

                    <Link
                      to="/properties?type=Villa"
                      className="category-arrow"
                      aria-label="Explore villas"
                    >
                      <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="category-type-image">
                    <img
                        src="/images/villa2.jpg"
                        alt="Villa"
                    />
                </div>
            </div>

            {/* Commercial Card */}
            <div className="category-type-card">
                <div className="category-type-info">

                    <Store size={25} />
                    
                    <h3>Commercial</h3>

                    <p>36+ Properties</p>

                    <Link
                      to="/properties?type=Commercial"
                      className="category-arrow"
                      aria-label="Explore commercial properties"
                    >
                      <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="category-type-image">
                    <img
                        src="/images/commercial.jpg"
                        alt="Commercial"
                    />
                </div>
            </div>
        </div>
    </section>


   </>
  );
}

export default Properties;