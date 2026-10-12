import "./Contact.css";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    ArrowRight
} from "lucide-react";


function Contact() {
    return(
        <>
         <main className="contact-main">
            <div className="contact-header">
                <h3>Contact Michy EstateHub</h3>
                <h1>Let's Find Your 
                    <br />
                <span className="contact-highlight">Perfect Property</span>
                </h1>
                <p>Have a question or need help finding the right property? <br />
                    We're here to help make your
                    property journey easier.
                </p>
            </div>
        </main>


        <section className="contact-section">

            <div className="contact-touch">

                <h3>GET IN TOUCH</h3>
                <h1>We're Here to
                    <br />
                    <span className="contact-highlight">Help You.</span>
                </h1>
                <p>Whether you're looking for your next home,<br />
                an investment property or simply have a question, <br />
                    Feel free to reach out to us.
                </p>

                {/* email */}
                <div className="contact-info">
                    <div className="info-icons">
                         <Mail size={24} />
                    </div>

                    <div className="info-text">
                        <h4> Email Us </h4>
                    <p>hello@michyestatehub.com</p>
                    </div>
                </div>


                    {/* Phone */}
                <div className="contact-info">
                    <div className="info-icons">
                         <Phone size={24}  />
                    </div>

                    <div className="info-text">
                        <h4> Call Us </h4>
                    <p>+234 800 000 0000</p>
                    </div>
                </div>


                {/* Location */}
                <div className="contact-info">
                    <div className="info-icons">
                        <MapPin size={24} />
                    </div>

                    <div className="info-text">
                        <h4> Our Location </h4>
                    <p>Lagos, Nigeria</p>
                    </div>
                </div>


                {/* Visit Office */}
                <div className="office-box">
                    <div className="info-icons">
                        <Clock size={24} />
                    </div>

                    <div className="info-text">
                        <h4> Visit Our Office </h4>
                    <p>We'd love to meet you in person.</p>
                    </div>
                    <ArrowRight size={18} />
                </div>        
                
            </div>




            {/* Contact Form */}

  <div className="contact-form">

    <h2>Send Us A Message</h2>

    <p>

      Fill out the form below and we'll get back to you.

    </p>

    <form>

      {/* Name and Email */}

      <div className="form-row">

        <div className="form-group">

          <label>Full Name *</label>

          <input

            type="text"

            placeholder="Enter your name"

          />

        </div>

        <div className="form-group">

          <label>Email Address *</label>

          <input

            type="email"

            placeholder="Enter your email"

          />

        </div>

      </div>

      {/* Subject */}

      <div className="form-group">

        <label>Subject *</label>

        <input

          type="text"

          placeholder="What can we help you with?"

        />

      </div>

      {/* Message */}

      <div className="form-group">

        <label>Message *</label>

        <textarea

          placeholder="Write your message..."

          rows="5"

        ></textarea>

      </div>

      {/* Submit Button */}

      <button type="submit" className="send-button">

        <Send size={18} />

        Send Message

      </button>

    </form>

  </div>

</section>




        </>
    );
}

export default Contact;


