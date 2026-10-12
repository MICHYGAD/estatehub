import { useState } from "react";

import { Link, useParams } from "react-router-dom";

import {

  MapPin,

  BedDouble,

  Bath,

  Maximize,

  Heart,

  ArrowLeft,

  ArrowRight,

  ShieldCheck,

  Waves,

  Wind,

  ChefHat,

  Car,

  Building2,

  Phone,

  Mail,

  CheckCircle,

  ChevronRight,

} from "lucide-react";

import  properties  from "../data/properties";

import { useFavorites } from "../components/useFavorites";

import "./PropertyDetails.css";




function PropertyDetails() {

  const { id } = useParams();

  const { toggleFavorite, isFavorite } = useFavorites();

  // Find the property selected by the user.

  const property = properties.find(

    (item) => String(item.id) === id

  );


  const [activeImage, setActiveImage] = useState(0);

  // Handle an invalid property ID.

  if (!property) {

    return (

      <section className="property-not-found">

        <h2>Property Not Found</h2>

        <p>

          Sorry, we couldn't find the property you're looking for.

        </p>

        <Link to="/properties" className="details-back-btn">

          <ArrowLeft size={18} />

          Back to Properties

        </Link>

      </section>

    );

  }

  // Support properties that have multiple images.

  // If no gallery exists, use the main property image.

  const propertyImages = Array.isArray(property.images)
  ? property.images
  : [property.image];


  // Find similar properties from the existing data.

  // Never recommend the property currently being viewed.

  const similarProperties = properties

    .filter((item) => item.id !== property.id)

    .map((item) => {

      let score = 0;

      if (item.type === property.type) {

        score += 3;

      }

      if (

        item.location

          ?.toLowerCase()

          .includes(property.location?.split(",")[0].toLowerCase())

      ) {

        score += 2;

      }

      if (item.bedrooms === property.bedrooms) {

        score += 1;

      }

      return { ...item, similarityScore: score };

    })

    .sort(

      (a, b) => b.similarityScore - a.similarityScore

    )

    .slice(0, 4);

  const amenities = property.amenities || [

    "24/7 Security",

    "Fitted Kitchen",

    "Parking Space",

    "Air Conditioning",

    "Swimming Pool",

    "Balcony",

  ];

  const description =

    property.description ||

    `Discover this beautiful ${property.title} located in ${property.location}. This property offers comfortable living spaces and convenient access to essential facilities, making it a great option for anyone looking for a home in this area.`;

  const agent = {

    name: "Michy Johnson",

    role: "Property Consultant",

    phone: "+234 904 915 3049",

    email: "hello@michyestatehub.com",

  };

  return (

    <main className="property-details-page">

      {/* ========================= */}

      {/* BREADCRUMB NAVIGATION */}

      {/* ========================= */}

      <div className="details-breadcrumb">

        <Link to="/properties" className="details-back-link">

          <ArrowLeft size={17} />

          Back to Properties

        </Link>

        <span className="breadcrumb-divider"></span>

        <Link to="/">Home</Link>

        <ChevronRight size={15} />

        <Link to="/properties">Properties</Link>

        <ChevronRight size={15} />

        <span className="current-breadcrumb">

          Property Details

        </span>

      </div>

      {/* ========================= */}

      {/* PROPERTY OVERVIEW */}

      {/* ========================= */}

      <section className="details-overview">

        {/* IMAGE GALLERY */}

        <div className="details-gallery">

          <div className="details-main-image">

            <img

              src={propertyImages[activeImage]}

              alt={property.title}

            />

            <span className="details-status">

              {property.status || "Available"}

            </span>

            <span className="details-image-counter">

              {activeImage + 1} / {propertyImages.length}

            </span>

            {propertyImages.length > 1 && (

              <div className="gallery-controls">

                <button

                  type="button"

                  aria-label="Previous image"

                  onClick={() =>

                    setActiveImage(

                      (activeImage - 1 + propertyImages.length) %

                        propertyImages.length

                    )

                  }

                >

                  <ArrowLeft size={18} />

                </button>

                <button

                  type="button"

                  aria-label="Next image"

                  onClick={() =>

                    setActiveImage(

                      (activeImage + 1) % propertyImages.length

                    )

                  }

                >

                  <ArrowRight size={18} />

                </button>

              </div>

            )}

          </div>

          {/* IMAGE THUMBNAILS */}

          {propertyImages.length > 1 && (

            <div className="details-thumbnails">

              {propertyImages.map((image, index) => (

                <button

                  type="button"

                  key={`${image}-${index}`}

                  className={

                    activeImage === index

                      ? "thumbnail active-thumbnail"

                      : "thumbnail"

                  }

                  onClick={() => setActiveImage(index)}

                  aria-label={`View image ${index + 1}`}

                >

                  <img

                    src={image}

                    alt={`${property.title} view ${index + 1}`}

                  />

                </button>

              ))}

            </div>

          )}

        </div>

        {/* PROPERTY SUMMARY */}

        <div className="details-summary">

          <div className="details-price-row">

            <h1>{property.price}</h1>

            <button

              type="button"

              className={

                isFavorite(property.id)

                  ? "details-favorite saved"

                  : "details-favorite"

              }

              onClick={() => toggleFavorite(property)}

              aria-label="Toggle favorite"

            >

              <Heart

                size={19}

                fill={

                  isFavorite(property.id)

                    ? "currentColor"

                    : "none"

                }

              />

              <span>

                {isFavorite(property.id) ? "Saved" : "Save"}

              </span>

            </button>

          </div>

          <h2>{property.title}</h2>

          <p className="details-location">

            <MapPin size={18} />

            {property.location}

          </p>

          {/* PROPERTY SPECIFICATIONS */}

          <div className="details-specifications">

            <div className="specification-item">

              <BedDouble size={22} />

              <strong>{property.bedrooms ?? "—"}</strong>

              <span>Bedrooms</span>

            </div>

            <div className="specification-item">

              <Bath size={22} />

              <strong>{property.bathrooms ?? "—"}</strong>

              <span>Bathrooms</span>

            </div>

            <div className="specification-item">

              <Maximize size={22} />

              <strong>{property.size || "—"}</strong>

              <span>Property Size</span>

            </div>

          </div>

          <div className="details-meta">

            <span className="details-availability">

              {property.status || "Available"}

            </span>

            <span className="details-updated">

              Discover your next home with EstateHub.

            </span>

          </div>

        </div>

      </section>

      {/* ========================= */}

      {/* DESCRIPTION AND AGENT */}

      {/* ========================= */}

      <section className="details-content-grid">

        <div className="details-main-content">

          {/* DESCRIPTION */}

          <div className="details-section">

            <h2>Property Description</h2>

            <p>{description}</p>

            {property.description && (

              <p>

                Explore the property details and contact our team

                to learn more about availability and viewing options.

              </p>

            )}

          </div>

          {/* AMENITIES */}

          <div className="details-section amenities-section">

            <h2>Features & Amenities</h2>

            <div className="amenities-grid">

              {amenities.map((amenity, index) => {

                const amenityIcons = [

                  ShieldCheck,

                  ChefHat,

                  Car,

                  Wind,

                  Waves,

                  Building2,

                ];

                const AmenityIcon =

                  amenityIcons[index % amenityIcons.length];

                return (

                  <div className="amenity-item" key={amenity}>

                    <span className="amenity-icon">

                      <AmenityIcon size={19} />

                    </span>

                    <span>{amenity}</span>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

        {/* AGENT CONTACT CARD */}

        <aside className="details-agent-card">

          <h2>Interested in this property?</h2>

          <p className="agent-subtitle">

            Contact our property consultant.

          </p>

          <div className="agent-profile">

            <div className="agent-avatar">

              <Building2 size={30} />

            </div>

            <div>

              <h3>{agent.name}</h3>

              <span>{agent.role}</span>

            </div>

          </div>

          <a

            href={`tel:${agent.phone.replace(/\s/g, "")}`}

            className="agent-contact-info"

          >

            <Phone size={19} />

            {agent.phone}

          </a>

          <a

            href={`mailto:${agent.email}`}

            className="agent-contact-info"

          >

            <Mail size={19} />

            Send an Email

          </a>

          <a

            href={`https://wa.me/${agent.phone.replace(/\D/g, "")}?text=${encodeURIComponent(

              `Hello, I am interested in ${property.title} in ${property.location}. Please provide more information.`

            )}`}

            target="_blank"

            rel="noreferrer"

            className="agent-call-btn"

          >

            <Phone size={18} />

            Contact Agent

          </a>

          <p className="agent-disclaimer">

            <CheckCircle size={15} />

            Ask us about availability and viewing arrangements.

          </p>

        </aside>

      </section>

      {/* ========================= */}

      {/* SIMILAR PROPERTIES */}

      {/* ========================= */}

      <section className="similar-properties-section">

        <div className="similar-properties-heading">

          <div>

            <h2>Similar Properties</h2>

            <p>

              Explore other properties you might love.

            </p>

          </div>

          <Link to="/properties" className="view-all-properties">

            View All Properties

            <ArrowRight size={17} />

          </Link>

        </div>

        {similarProperties.length > 0 ? (

          <div className="similar-properties-grid">

            {similarProperties.map((item) => (

              <article

                className="similar-property-card"

                key={item.id}

              >

                <Link

                  to={`/properties/${item.id}`}

                  className="similar-property-image"

                >

                  <img

                    src={item.image}

                    alt={item.title}

                  />

                  <span className="similar-property-status">

                    {item.status || "Available"}

                  </span>

                </Link>

                <div className="similar-property-info">

                  <h3>

                    <Link to={`/properties/${item.id}`}>

                      {item.title}

                    </Link>

                  </h3>

                  <p className="similar-property-location">

                    <MapPin size={15} />

                    {item.location}

                  </p>

                  <strong className="similar-property-price">

                    {item.price}

                  </strong>

                  <div className="similar-property-specs">

                    <span>

                      <BedDouble size={16} />

                      {item.bedrooms ?? "—"}

                    </span>

                    <span>

                      <Bath size={16} />

                      {item.bathrooms ?? "—"}

                    </span>

                    <span>

                      <Maximize size={16} />

                      {item.size || "—"}

                    </span>

                  </div>

                  <Link

                    to={`/properties/${item.id}`}

                    className="similar-property-link"

                  >

                    View Details

                    <ArrowRight size={16} />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <p className="no-similar-properties">

            More properties will be available soon.

          </p>

        )}

      </section>

    </main>

  );

}

export default PropertyDetails;