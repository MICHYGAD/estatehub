import { useFavorites } from "../components/useFavorites";
import { useAuth } from "../components/AuthContext.jsx";
import properties from "../data/properties";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropertySearch from "../components/PropertySearch";
import "./Home.css";
import { 
    Building2,
    House,
    Palmtree,
    BriefcaseBusiness,
    ArrowRight,
    Heart,
    MapPin,
    Bed,
    Bath,
    Ruler,
 } from "lucide-react";



function Home() {
  const { toggleFavorite, isFavorite } = useFavorites();
  const featuredProperties = properties.slice(0, 4);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


    return (
        <>

        {/* HOME CONTAINER */}

        <main className="home-container">

        <div className="home-content">
            <h1>Let's guide you to
                <br />
                your <span className="brand-highlight">dream home</span>
            </h1>
            <p>Want to buy or rent a home? Look no further, we got you<br /> covered. We have the perfect home that suits your lifestyle and needs.</p>

            <Link to="/register" className="home-btn">Get Started</Link>

            <div className="home-stats">
                <p>1500 <span className="stats-highlight">+</span> <br /> 
<span className="stats-p">Properties Available</span></p>

                <p>3800 <span className="stats-highlight">+</span> <br /> 
<span className="stats-p">Happy Customers</span></p>
            </div>
            </div>

            <div className="home-image">
            <img src="/images/estate-home.jpg" alt="Home" />
            </div>
        </main>

        <div className="home-features">
                <Link to="/properties?purpose=buy" className="feature-btn1">Buy</Link>

                <Link to="/properties?purpose=rent" className="feature-btn2">Rent</Link>
            </div>

        
        <PropertySearch />

        {/* EXPLORE PROPERTY */}

<section className="explore-container">
<div className="explore-header">
    <h1>Explore Properties</h1>
    <p>Find the right space for every lifestyle</p>
</div>

<div className="explore-card">


    <div className="explore-card-option">

        <div className="explore-wrapper">
            <img src="/images/apartment.jpg" alt="properties" />

        <div className="explore-icon">
            <Building2 size={18} />
        </div>
        </div>
        

        <div className="explore-card-option2">

        <h3>Apartments</h3>

        <p>118+ Properties</p>

            <Link to="/properties?type=apartment" className="property-card-arrow">
        <ArrowRight size={25} />
        </Link>
        </div>
    </div>

    {/* end of first div */}




        <div className="explore-card-option">

        <div className="explore-wrapper">
            <img src="/images/house.jpg" alt="properties" />

        <div className="explore-icon">
            <House size={18} />
        </div>
        </div>
        

        <div className="explore-card-option2">
        <h3>Houses</h3>

        <p>250+ Properties</p>

        <Link to="/properties?type=house" className="property-card-arrow">
        <ArrowRight size={25} />
        </Link>
        </div>
    </div>

        {/* end of second div */}



        <div className="explore-card-option">

        <div className="explore-wrapper">
            <img src="/images/villa.jpg" alt="properties" />

        <div className="explore-icon">
            <Palmtree size={18} />
        </div>
        </div>

        <div className="explore-card-option2">
        <h3>Villas</h3>

        <p>80+ Properties</p>

        <Link to="/properties?type=villa" className="property-card-arrow">
        <ArrowRight size={25} />
        </Link>
        </div>
    </div>

        {/* end of third div */}




        <div className="explore-card-option">

        <div className="explore-wrapper">
            <img src="/images/commercial.jpg" alt="properties" />

        <div className="explore-icon">
            <BriefcaseBusiness size={18} />
        </div>
        </div>

        <div className="explore-card-option2">
        <h3>Commercial Properties</h3>

        <p>60+ Properties</p>

        <Link to="/properties?type=commercial" className="property-card-arrow">
        <ArrowRight size={25} />
        </Link>
        </div>
    </div>
        {/* end of fourth div */}

</div>
</section>
{/* END OF EXPLORE PROPERTY */}



        {/* FEATURED PROPERTY SECTION */}

        <section className="featured-section">
  <div className="featured-header">
    <div>
      <h2>Featured Properties</h2>
      <p>Discover handpicked properties worth exploring.</p>
    </div>
    <Link to="/properties" className="view-all-btn">
      View All Properties <ArrowRight size={16} />
    </Link>
  </div>


      <div className="featured-grid">
  {featuredProperties.map((property) => (
    <div className="featured-card" key={property.id}>
      <div className="featured-image">
        <img src={property.image} alt={property.title} />

        <button
          type="button"
          className={`favorite-btn ${
            isFavorite(property.id) ? "active" : ""
          }`}
          onClick={() => {
            if (!isAuthenticated) {
            navigate("/login", {
              state: { from: location },
            });
            return;
            }

            toggleFavorite(property);
          }}
        >
          <Heart
            size={18}
            fill={isFavorite(property.id) ? "currentColor" : "none"}
          />
        </button>

        <span className="price-badge">
          {property.price}
          {property.period ? property.period : ""}
        </span>
      </div>

      <div className="featured-content">
        <h3>{property.title}</h3>

        <p className="location">
          <MapPin size={14} /> {property.location}
        </p>

        <div className="features">
          {property.bedrooms && (
            <span>
              <Bed size={14} /> {property.bedrooms}
            </span>
          )}

          {property.bathrooms && (
            <span>
              <Bath size={14} /> {property.bathrooms}
            </span>
          )}

          <span>
            <Ruler size={14} /> {property.size}
          </span>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className={`view-details-btn ${
            property.id === featuredProperties[0].id ? "primary" : ""
          }`}
        >
          View Details
        </Link>
      </div>
    </div>
  ))}
</div>
</section>

        {/* END OF FEATURED PROPERTY SECTION */}


    </>
    );
}

export default Home;