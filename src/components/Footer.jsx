import { Link, useLocation } from "react-router-dom";
import {
  House,
  ShieldCheck,
  Search,
  UserRound,
  WalletCards,
  ArrowRight
 } from "lucide-react";

function Footer() {

  const location = useLocation();

  let chapterTitle = "Your Next Chapter Starts Here.";

  if (location.pathname === "/about") {
    chapterTitle = "Ready to Find Your New Home?";
  }


  return (
    <>
    {/* WHY CHOOSE */}

    <section className="choose-section">

        <div className="choose-header">
            <h1>Why Choose Michy EstateHub?</h1>
            <p>More than just properties - we're here to make your journey easier</p>
        </div>

        {/* flex words */}
        <div className="choose-flex-container">

            <div className="choose-flex">
                <div className="choose-icon">
                    <ShieldCheck  size={24} />
                </div>  
            <h2>Verified Property Listings</h2>
            <p>We ensure all listings are authentic <br />
               and verified for your peace of mind.
            </p>
            </div>


            <div className="choose-flex">
                <div className="choose-icon">
                    <Search size={24} />
                </div>
            <h2>Easy Property Discovery</h2>
            <p>Find the right property with<br />
               advanced search and filters.
            </p>
            </div>


            <div className="choose-flex">
                <div className="choose-icon">
                    <UserRound size={24} />
                </div>
            <h2>Seamless User Experience</h2>
            <p>Simple, fast and convenient <br />
               from search to contact.
            </p>
            </div>


            <div className="choose-flex">
                <div className="choose-icon">
                    <WalletCards size={24} />
                </div>
            <h2>Find Property That <br />
                Match Your Budget
            </h2>
            <p>Properties for every budget <br />
               without compromise.
            </p>
            </div>
        </div>

        
    </section>

    {/* Next Chapter */}
        <div className="chapter-header">
            <h3>{chapterTitle}</h3>

            <p>Explore properties and discover a place you can truly call home.</p>

            <Link to="/properties" className="chapter-btn">Explore Property<ArrowRight /> </Link>
        </div>




    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            <House size={22} />
          <span>Michy<span className="footer-highlight">EstateHub</span></span>
          </h2>

          <p>
            Discover properties that match your lifestyle.
            Your next home is just a step away.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/properties">Properties</Link>
        </div>

        <div className="footer-links">
          <h3>Property Types</h3>
          <Link to="/properties?type=Apartment">Apartments</Link> 
          <Link to="/properties?type=House">Houses</Link> 
          <Link to="/properties?type=Villa">Villas</Link> 
          <Link to="/properties?type=Commercial">Commercial</Link> 
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: hello@michyestatehub.com</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Location: Nigeria</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Michy EstateHub.
          All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}

export default Footer;