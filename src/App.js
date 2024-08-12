import "./index.css";
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FcNeutralTrading } from "react-icons/fc";
import { MdSupportAgent } from "react-icons/md";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-section">
        <nav className="navbar">
          <div className="brand-logo"></div>
          <div className="nav-item">Home</div>
          <div className="nav-item">Contact</div>
          <div className="nav-item">Sign Up</div>
          <div className="nav-item">Sign In</div>
        </nav>
        <div className="hero-section">
          <div className="hero-left">
            <div className="hero-image"></div>
            <div className="hero-text">
              <div className="hero-title">
                <p>Welcome to MyFast<span className="highlight">X Partner</span></p>
              </div>
              <div className="hero-subtitle">
                <p>Quick & Reliable Delivery and Logistics <br /><span className="highlight-text">Solution</span></p>
              </div>
              <div className="hero-description">
                <p>At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift, dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon">
              <FaBitcoin />
            </div>
            <div className="feature-title">
              <p>Reliable Income</p>
            </div>
            <div className="feature-description">
              <p>Earn a steady income with consistent delivery requests.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon">
              <FcNeutralTrading />
            </div>
            <div className="feature-title">
              <p>Growth Opportunities</p>
            </div>
            <div className="feature-description">
              <p>Advance your career with regular training and development.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon">
              <SlCalender />
            </div>
            <div className="feature-title">
              <p>Flexible Schedule</p>
            </div>
            <div className="feature-description">
              <p>Choose your working hours and balance your personal life.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon">
              <MdSupportAgent />
            </div>
            <div className="feature-title">
              <p>Support</p>
            </div>
            <div className="feature-description">
              <p>Access our dedicated support team whenever you need assistance.</p>
            </div>
          </div>
          <div className="call-to-action">
            <div className="cta-content">
              <div className="cta-heading">
                <p>Drive Your Success with MyFastX</p>
              </div>
              <div className="cta-subheading">
                <p>Join Us as a Partner Driver</p>
              </div>
              <div className="cta-description">
                <p>Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.</p>
              </div>
              <div className="cta-button">
                <div className="register-button">Register only for $999</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="steps-section">
        <div className="step-item">
          <p><b className="step-heading">Register Online</b> <br />Fill out our easy online application form and pay the registration fee of Rs. 999</p>
        </div>
        <div className="step-item">
          <p><b className="step-heading">Get Verified</b> <br />Complete the verification process to ensure you meet our standards.</p>
        </div>
        <div className="step-item">
          <p><b className="step-heading">Start Driving</b> <br />Once approved, start accepting delivery requests and earn money</p>
        </div>
        <div className="arrow-icon"></div>
        <div className="steps-image"></div>
        <div className="steps-description">
          <div className="steps-title">How It Works</div>
          <div className="steps-subtitle">Simple Steps to Get Started</div>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="testimonials-title">What Our Partners Say</div>
        <div className="testimonials-heading">Testimonials</div>
        <div className="testimonials-description">At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services.</div>
        <div className="testimonial-profile"></div>
        <div className="testimonial-bike"></div>
      </div>

      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-cta">
            <div className="footer-cta-heading">Join the MyFastX Community Today!</div>
            <div className="footer-cta-subheading">Ready to Get Started?</div>
            <div className="footer-cta-description">
              <p>Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just Rs. 999 and start driving your way to success with MyFastX!</p>
              <div className="footer-register-button">Register</div>
            </div>
            <div className="footer-screen"></div>
          </div>
          <div className="faq-section">
            <div className="faq-heading">Frequently Asked Questions</div>
            <div className="faq-subheading">Got Questions? We’ve Got Answers!</div>
            <div className="faq-items">
              <div className="faq-item">What types of vehicle are available?</div>
              <div className="faq-item">How do I get paid?</div>
              <div className="faq-item">What areas does MyFastX operate in?</div>
              <div className="faq-item">What types of vehicle are available?</div>
              <div className="faq-item">How do I get paid?</div>
              <div className="faq-item">What areas does MyFastX operate in?</div>
              <div className="faq-icon"><IoIosArrowForward /></div>
              <div className="faq-icon"><IoIosArrowForward /></div>
              <div className="faq-icon"><IoIosArrowForward /></div>
              <div className="faq-icon"><IoIosArrowForward /></div>
              <div className="faq-icon"><IoIosArrowForward /></div>
              <div className="faq-icon"><IoIosArrowForward /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <div className="footer-upper">
          <p>Drive Your Success with MyFastX</p>
          <h1>Join Us as a Partner Driver</h1>
          <p className="footer-info-description">Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you'll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.</p>
          <div className="footer-info-button">Register now for just Rs. 999!</div>
        </div>
        <div className="footer-lower">
          <div className="footer-left">
            <div className="footer-image"></div>
            <p>MyFastX is a leading logistics platform that provides hyper-local, on-demand delivery solutions for individuals and businesses. Whether you need a delivery boy for your shop or to ship items within the city, MyFastX is your trusted partner, making delivery effortless and convenient. With a mission to revolutionize logistics through innovation and technology, MyFastX is committed to providing seamless, end-to-end delivery solutions that exceed customer expectations.</p>
            <div className="footer-contact">
              <i className="fa-solid fa-house-chimney"></i>
              <p>Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</p>
            </div>
            <div className="footer-email">
              <i className="fa-regular fa-envelope"></i>
              <p>care@myfastx.com <br />+91 8961310988</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h4>Company</h4>
              <p>About Us</p>
              <p>What We Do?</p>
              <p>Investors</p>
              <p>Press Release</p>
              <p>Careers</p>
              <p>Pricing Details</p>
            </div>
            <div className="footer-column">
              <h4>Policies</h4>
              <p>Terms And Conditions</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Fraud Disclaimer</p>
            </div>
            <div className="footer-column">
              <h4>Help</h4>
              <p>Restricted Items</p>
              <p>Parcel Size and Weight Guide</p>
              <p>Packaging Guide</p>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <p>FAQ</p>
              <p>Customer Care</p>
              <p>Driver Terms and Conditions</p>
              <p>Packaging Instructions</p>
            </div>
          </div>
        </div>
        <div className="footer-final">
          <h4>Our Presence</h4>
          <p>Delhi, Noida, Ghaziabad, Gurugram, Faridabad, Bahadurgarh, Kolkata</p>
        </div>
        <div className="footer-bottom">
          <p>&copy;2024 MyFastX Technologies Pvt Ltd, All rights reserved</p>
          <p>CIN: U52219UP2023PTC192260</p>
        </div>
      </div>
    </>
  );
}

export default App;
