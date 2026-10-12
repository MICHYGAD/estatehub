import { Link } from "react-router-dom";
import "./About.css";
import { 
    ArrowRight,
    ShieldCheck,
    Search,
    Users
 } from "lucide-react";




function About() {
    return (
        <>
        <main className="about-main">
            <div className="about-header">
                <h3>About Michy EstateHub</h3>
                <h1>Find a Place That 
                    <br />
                    Feels Like <span className="about-highlight">Home</span>
                </h1>
                <p>We connect you with quality properties
                    <br />
                    that fit your lifestyle and budget.
                </p>
            </div>
        </main>


        {/* ================= */}
        {/* WHO WE ARE */}
        {/* ================= */}

        <section className="about-section">
            <div className="about-content-img">
                <img src="./images/about-image2.jpg" alt="about" />
               

                <div className="about-content-who">
                    <h3>WHO WE ARE</h3>
                    <h1>More Than Just
                        <br />
                        Property Listings
                    </h1>
                    <p>Michy EstateHub is a modern property discovery
                        <br />
                        platform designed to make finding your 
                        <br />
                        next home simple, convenient and reliable.
                        <br />
                        <br />
                        Whether you're looking for an apartment,
                        <br />
                        family house, villa or commercial property.
                        <br />
                        We help you discover spaces that fits your needs.
                    </p>
                    <Link to="/properties" className="about-content-btn">Explore Properties <ArrowRight /> </Link>
                </div>
                </div>
        </section>

        {/* OUR MISSION */}

        <div className="mission-container">
            <div className="mission-content">
                <h3>OUR MISSION</h3>
                <h1>To make property discovery simple,
                    <br />
                    transparent and accessible for everyone.
                </h1>
            </div>

            <div className="mission-card">
                <div className="mission-icon">
                    <ShieldCheck  size={24} />
                </div>  
            <h2>Trust</h2>
            <p>Verified and reliable <br />
                 property listings.
            </p>
            </div>

            <div className="mission-card">
                <div className="mission-icon">
                    <Search size={24} />
                </div>  
            <h2>Simplicity</h2>
            <p>A smooth way to discover <br />
                    your next property.
            </p>
            </div>

            <div className="mission-card">
                <div className="mission-icon">
                    <Users  size={24} />
                </div>  
            <h2>Choice</h2>
            <p>Properties for different <br />
                  lifestyles and budgets.
            </p>
            </div>
        </div>





        </>
    );
}

export default About;