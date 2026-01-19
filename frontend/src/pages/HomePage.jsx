import React, { useState } from 'react';
import {
  Menu,
  X,
  Heart,
  Users,
  BookOpen,
  Target,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Camera,
  Video,
  CalendarRange,
  Play,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const PAYPAL_LINK = 'https://www.paypal.com/us/fundraiser/charity/120798';
const COMMUNITY_IMAGE_URL = `${
  process.env.PUBLIC_URL || ''
}/images/world_diabetes.jpg`;
const UPCOMING_EVENTS = [
  {
    title: 'Belize Red Cross Wheelchair Clinic',
    date: 'Thu Jan 15 & Fri Jan 16',
    location: 'Belize City',
    description:
      'Register by phone for a customized wheelchair fitting; location and time will be shared after confirmation.',
    phone: '203-3319',
    details: [
      'Clients must attend in person (wheelchairs are customized)',
      'No house calls or transportation support available',
      'No bedsores in the past year; previous sores must be fully healed and dry',
      'Must be able to sit independently at a 90° angle',
    ],
  },
];

const GALLERY_ITEMS = [
  {
    title: 'Community Health Outreach',
    subtitle: 'Blood sugar checks and care with local nurses',
    type: 'Photos',
    image: `${process.env.PUBLIC_URL || ''}/images/IMG_8889.JPG`,
  },
  {
    title: 'Family Education Circle',
    subtitle: 'Sharing nutrition tips and prevention for Belizean families',
    type: 'Photos',
    image: `${process.env.PUBLIC_URL || ''}/images/IMG_8890.JPG`,
  },
];

const VIDEO_SPOTLIGHT = {
  title: 'Community Stories Playlist',
  description:
    'Watch highlights from events, family stories, and clinic partnerships across Belize.',
  image: 'https://img.youtube.com/vi/aq09vbSEGgg/maxresdefault.jpg',
  link: 'https://www.youtube.com/watch?v=aq09vbSEGgg&list=PLQndNxM2_zkYzyQEH_Nv_U3aRuEZNCmY8',
};

const YOUTUBE_PLAYLISTS = [
  {
    title: 'Community Stories Playlist',
    description: 'Event recaps, patient voices, and volunteer moments.',
    link: 'https://www.youtube.com/watch?v=aq09vbSEGgg&list=PLQndNxM2_zkYzyQEH_Nv_U3aRuEZNCmY8',
    thumbnail: 'https://img.youtube.com/vi/aq09vbSEGgg/hqdefault.jpg',
  },
  {
    title: 'Health Education Playlist',
    description: 'Short lessons on nutrition, movement, and prevention.',
    link: 'https://www.youtube.com/watch?v=bPITHEiFWLc&list=PLQndNxM2_zkaxzF1tX7xb0bcU_n_1t5KN',
    thumbnail: 'https://img.youtube.com/vi/bPITHEiFWLc/hqdefault.jpg',
  },
];

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img
              src="https://customer-assets.emergentagent.com/job_fbeb7c05-e739-4d3b-84da-a66045d0dc5c/artifacts/1qk0eawd_IMG_3029.JPG"
              alt="People's Diabetes Foundation Logo"
              className="logo-img"
            />
            <div className="logo-text">
              <h1>The People's Diabetes Foundation</h1>
              <p>Fighting Diabetes in Belize</p>
            </div>
          </div>

          <nav className="desktop-nav">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="nav-link"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="nav-link"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="nav-link"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
            <Button
              className="donate-btn-header"
              onClick={() => window.open(PAYPAL_LINK, '_blank')}
            >
              <Heart className="icon" />
              Donate Now
            </Button>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button
              onClick={() => scrollToSection('about')}
              className="mobile-nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="mobile-nav-link"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="mobile-nav-link"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="mobile-nav-link"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="mobile-nav-link"
            >
              Contact
            </button>
            <Button
              className="donate-btn-mobile"
              onClick={() => window.open(PAYPAL_LINK, '_blank')}
            >
              <Heart className="icon" />
              Donate Now
            </Button>
          </div>
        )}
      </header>

      {/* Tax Deadline Banner */}
      <section className="tax-banner">
        <div className="tax-banner-content">
          <div className="tax-banner-text">
            <p className="tax-banner-main">
              Maximize your charitable impact before the year-end tax deadline.
            </p>
            <p className="tax-banner-sub">
              Make your generosity go further with a deductible donation.
            </p>
          </div>
          <Button
            className="tax-banner-btn"
            onClick={() => window.open(PAYPAL_LINK, '_blank')}
          >
            <Heart className="icon" />
            Donate Today
          </Button>
        </div>
      </section>

      {/* Holiday Donation Feature */}
      <section className="holiday-donation">
        <div className="section-container holiday-container">
          <div className="holiday-photo-row">
            <div
              className="holiday-photo"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.35) 100%), url('${COMMUNITY_IMAGE_URL}')`,
              }}
              aria-label="Diabetes awareness and community outreach in Belize"
            >
              <div className="holiday-overlay">
                <div className="holiday-greeting">
                  <Users size={18} />
                  <span>Year-round care for Belizean families</span>
                  <Heart size={18} />
                </div>
                <p className="holiday-subtext">
                  Your support funds screenings, education, and resources in the
                  communities that need them most.
                </p>
              </div>
            </div>
          </div>
          <div className="holiday-text">
            <div className="holiday-pill">
              <Heart size={16} />
              <span>Community Support</span>
            </div>
            <h3 className="holiday-title">Keep vital diabetes care going</h3>
            <p className="holiday-copy">
              Help us deliver diabetes education, resources, and hope to
              Belizeans all year long. Your generosity keeps patients supported
              when they need it most.
            </p>
            <Button
              className="holiday-cta"
              onClick={() => window.open(PAYPAL_LINK, '_blank')}
            >
              <Heart className="icon" />
              Support the Mission
            </Button>
            <p className="holiday-note">
              Every gift brings us closer to our goal.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              Join the Fight Against Diabetes in Belize
            </h2>
            <p className="hero-subtitle">
              Belize has the highest diabetes prevalence rate in North America
              and the Caribbean. Over 31,500 Belizeans live with diabetes.
              Together, we can change this.
            </p>
            <div className="hero-buttons">
              <Button
                className="primary-cta"
                onClick={() => window.open(PAYPAL_LINK, '_blank')}
              >
                <Heart className="icon" />
                Donate Now
              </Button>
              <Button
                variant="outline"
                className="secondary-cta"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">31,500+</div>
                <div className="stat-label">Belizeans with Diabetes</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">$25,000</div>
                <div className="stat-label">Campaign Goal</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://customer-assets.emergentagent.com/job_fbeb7c05-e739-4d3b-84da-a66045d0dc5c/artifacts/1qk0eawd_IMG_3029.JPG"
              alt="People's Diabetes Foundation"
              className="hero-logo"
            />
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section className="crisis-section" id="about">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">The Crisis We Face</h2>
            <p className="section-subtitle">
              Diabetes is a growing epidemic in Belize, impacting thousands of
              lives and placing a significant burden on families and the
              healthcare system.
            </p>
          </div>
          <div className="crisis-grid">
            <Card className="crisis-card">
              <CardContent className="card-content">
                <div className="card-icon-wrapper crisis-icon">
                  <Target size={32} />
                </div>
                <h3 className="card-title">Highest Prevalence</h3>
                <p className="card-text">
                  Belize has the highest diabetes prevalence rate in North
                  America and the Caribbean, with numbers projected to increase
                  dramatically.
                </p>
              </CardContent>
            </Card>
            <Card className="crisis-card">
              <CardContent className="card-content">
                <div className="card-icon-wrapper crisis-icon">
                  <Users size={32} />
                </div>
                <h3 className="card-title">Limited Access</h3>
                <p className="card-text">
                  Limited access to education and resources leaves many
                  struggling to manage their condition, leading to devastating
                  health complications.
                </p>
              </CardContent>
            </Card>
            <Card className="crisis-card">
              <CardContent className="card-content">
                <div className="card-icon-wrapper crisis-icon">
                  <Heart size={32} />
                </div>
                <h3 className="card-title">Community Impact</h3>
                <p className="card-text">
                  The Corozal District faces a disproportionately high incidence
                  of diabetes, affecting families and communities across Belize.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-container">
          <div className="solution-content">
            <div className="solution-text">
              <h2 className="section-title">Our Solution</h2>
              <p className="solution-description">
                Founded by <strong>Judith Mendez</strong>, a registered nurse
                living with Type 2 diabetes, The People's Diabetes Foundation is
                dedicated to providing enhanced diabetes education, awareness,
                and support to the people of Belize.
              </p>
              <p className="solution-description">
                Our vision is to become an international model for diabetes
                education, prevention, and control in rural communities.
              </p>
              <div className="solution-highlight">
                <div className="highlight-content">
                  <BookOpen size={28} className="highlight-icon" />
                  <div>
                    <h4 className="highlight-title">Our Mission</h4>
                    <p className="highlight-text">
                      Empowering individuals with knowledge and resources to
                      effectively manage diabetes and improve long-term health
                      outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="solution-image">
              <div className="image-card">
                <img
                  src="https://customer-assets.emergentagent.com/job_fbeb7c05-e739-4d3b-84da-a66045d0dc5c/artifacts/1qk0eawd_IMG_3029.JPG"
                  alt="Our Foundation"
                  className="solution-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section" id="programs">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Pilot Program</h2>
            <p className="section-subtitle">
              A multi-pronged approach to diabetes education and support
            </p>
          </div>
          <div className="programs-grid">
            <Card className="program-card">
              <CardContent className="program-content">
                <div className="program-number">01</div>
                <h3 className="program-title">Community Awareness</h3>
                <p className="program-text">
                  Monthly educational activities, distribution of materials,
                  "healthy community" events, and partnerships with local NGOs
                  and media to raise awareness about diabetes.
                </p>
                <ul className="program-list">
                  <li>Educational workshops</li>
                  <li>Community health events</li>
                  <li>Media partnerships</li>
                  <li>Information campaigns</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="program-card">
              <CardContent className="program-content">
                <div className="program-number">02</div>
                <h3 className="program-title">Support for Newly Diagnosed</h3>
                <p className="program-text">
                  Collaboration with healthcare providers to offer comprehensive
                  support to newly diagnosed individuals, including education on
                  self-care and nutrition.
                </p>
                <ul className="program-list">
                  <li>Self-care education</li>
                  <li>Nutrition guidance</li>
                  <li>Medication management</li>
                  <li>Access to resources</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="program-card">
              <CardContent className="program-content">
                <div className="program-number">03</div>
                <h3 className="program-title">Long-Term Impact</h3>
                <p className="program-text">
                  Building sustainable programs by training healthcare
                  educators, developing educational materials, and working
                  towards recognized non-profit status.
                </p>
                <ul className="program-list">
                  <li>Healthcare educator training</li>
                  <li>Educational material development</li>
                  <li>Program sustainability</li>
                  <li>Community partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section" id="impact">
        <div className="section-container">
          <div className="impact-content">
            <h2 className="section-title">Your Impact</h2>
            <p className="impact-intro">
              A generous donation will be instrumental in supporting our pilot
              program and making a tangible difference in the lives of
              Belizeans.
            </p>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">
                  <BookOpen size={28} />
                </div>
                <h4 className="impact-title">Educational Materials</h4>
                <p className="impact-text">
                  Empowering individuals with the knowledge they need to manage
                  their diabetes effectively.
                </p>
              </div>
              <div className="impact-item">
                <div className="impact-icon">
                  <Users size={28} />
                </div>
                <h4 className="impact-title">Community Outreach</h4>
                <p className="impact-text">
                  Raising awareness and promoting healthy lifestyles through
                  community events.
                </p>
              </div>
              <div className="impact-item">
                <div className="impact-icon">
                  <Heart size={28} />
                </div>
                <h4 className="impact-title">Patient Support</h4>
                <p className="impact-text">
                  Providing critical resources and guidance for newly diagnosed
                  patients.
                </p>
              </div>
              <div className="impact-item">
                <div className="impact-icon">
                  <Target size={28} />
                </div>
                <h4 className="impact-title">Program Development</h4>
                <p className="impact-text">
                  Ensuring long-term sustainability and effectiveness of our
                  efforts.
                </p>
              </div>
            </div>
            <div className="impact-goal">
              <h3 className="goal-title">
                Our Goal: Support 120 Newly Diagnosed Patients
              </h3>
              <p className="goal-text">
                By partnering with local hospitals and physicians, we will
                provide comprehensive support and education to help individuals
                manage their condition and improve their quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Events Section */}
      <section className="gallery-section" id="gallery">
        <div className="section-container">
          <div className="section-header">
            <div className="section-pill">
              <Camera size={16} />
              <span>Gallery & Events</span>
            </div>
            <h2 className="section-title">See our community in action</h2>
            <p className="section-subtitle">
              Photos, videos, and upcoming events that show how your support
              reaches families in Belize.
            </p>
          </div>
          <div className="gallery-layout">
            <div className="event-column">
              <div className="event-column-header">
                <h3>Upcoming gatherings</h3>
                <p>Meet us in person, volunteer, or invite a friend to join.</p>
              </div>
              <div className="event-list">
                {UPCOMING_EVENTS.map((event) => (
                  <Card className="event-card" key={event.title}>
                    <CardContent className="event-card-content">
                      <div className="event-meta">
                        <div className="event-date">
                          <CalendarRange size={18} />
                          <span>{event.date}</span>
                        </div>
                        <div className="event-location">
                          <MapPin size={18} />
                          <span>{event.location}</span>
                        </div>
                        {event.phone && (
                          <div className="event-location">
                            <Phone size={18} />
                            <a href={`tel:${event.phone}`}>{event.phone}</a>
                          </div>
                        )}
                      </div>
                      <h4 className="event-title">{event.title}</h4>
                      <p className="event-description">{event.description}</p>
                      {event.details && (
                        <ul className="event-bullets">
                          {event.details.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                      <Button
                        variant="outline"
                        className="event-cta"
                        onClick={() =>
                          window.open(
                            `mailto:fred@peoplesdiabetesfoundation.org?subject=${encodeURIComponent(
                              event.title
                            )}&body=${encodeURIComponent(
                              'Hi! I would like to RSVP or volunteer for this event.'
                            )}`,
                            '_blank'
                          )
                        }
                      >
                        <Heart className="icon" />
                        RSVP / Volunteer
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="event-note">
                Want to list your clinic, school, or community day? Email{' '}
                <a href="mailto:fred@peoplesdiabetesfoundation.org">
                  fred@peoplesdiabetesfoundation.org
                </a>{' '}
                with photos or video links and we will publish them here.
              </p>
            </div>
            <div className="media-column">
              <div className="gallery-grid">
                {GALLERY_ITEMS.map((item) => (
                  <div
                    className="gallery-card"
                    key={item.title}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%), url('${item.image}')`,
                    }}
                    aria-label={item.title}
                  >
                    <div className="gallery-badge">
                      {item.type === 'Video' ? (
                        <Video size={16} />
                      ) : (
                        <Camera size={16} />
                      )}
                      <span>{item.type}</span>
                    </div>
                    <div className="gallery-caption">
                      <p className="gallery-title">{item.title}</p>
                      <p className="gallery-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="video-highlight">
                <div
                  className="video-card"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.25) 0%, rgba(15,23,42,0.75) 100%), url('${VIDEO_SPOTLIGHT.image}')`,
                  }}
                  aria-label="Share your video story"
                >
                  <div className="video-card-content">
                    <div className="video-pill">
                      <Video size={16} />
                      <span>Video spotlight</span>
                    </div>
                    <h4>{VIDEO_SPOTLIGHT.title}</h4>
                    <p>{VIDEO_SPOTLIGHT.description}</p>
                    <Button
                      className="video-button"
                      onClick={() =>
                        window.open(VIDEO_SPOTLIGHT.link, '_blank')
                      }
                    >
                      <Play className="icon" />
                      Watch playlist
                    </Button>
                  </div>
                </div>
                <div className="playlist-list">
                  {YOUTUBE_PLAYLISTS.map((playlist) => (
                    <Card className="playlist-card" key={playlist.link}>
                      <CardContent className="playlist-card-content">
                        <div className="playlist-thumb">
                          <img src={playlist.thumbnail} alt={playlist.title} />
                        </div>
                        <div className="playlist-text">
                          <p className="playlist-title">{playlist.title}</p>
                          <p className="playlist-description">
                            {playlist.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="playlist-button"
                          onClick={() => window.open(playlist.link, '_blank')}
                        >
                          <Play className="icon" />
                          Watch
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Join Us in Making a Difference</h2>
            <p className="cta-text">
              Diabetes is a serious threat, but it is not insurmountable. By
              partnering with The People's Diabetes Foundation, you can empower
              individuals, strengthen communities, and help us create a
              healthier future for Belize.
            </p>
            <p className="cta-emphasis">
              Your donation, no matter the size, will make a significant
              difference.
            </p>
            <Button
              className="cta-button"
              onClick={() => window.open(PAYPAL_LINK, '_blank')}
            >
              <Heart className="icon" />
              Donate Now
              <ExternalLink className="icon" size={18} />
            </Button>
            <p className="cta-note">Secure donation via PayPal</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="https://customer-assets.emergentagent.com/job_fbeb7c05-e739-4d3b-84da-a66045d0dc5c/artifacts/1qk0eawd_IMG_3029.JPG"
              alt="PDF Logo"
              className="footer-logo"
            />
            <h3 className="footer-title">The People's Diabetes Foundation</h3>
            <p className="footer-tagline">
              Creating a healthier future for Belize
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>
                  1725 Ocean Ave. Unit 226
                  <br />
                  Santa Monica, CA 90401
                </span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:323-304-2861">323-304-2861</a>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:fred@peoplesdiabetesfoundation.org">
                  fred@peoplesdiabetesfoundation.org
                </a>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Program Contact</h4>
            <p className="footer-text">
              <strong>Frederick Flowers</strong>
            </p>
            <p className="footer-text">Chief Financial Officer</p>
            <div className="footer-details">
              <p>EIN: 47-5249589</p>
              <p>File: C3834667</p>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('programs')}>
                Programs
              </button>
              <button onClick={() => scrollToSection('impact')}>Impact</button>
              <a
                href="https://www.peoplesdiabetesfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 The People's Diabetes Foundation. All rights reserved.
          </p>
          <p>
            Together, we can make a difference in the fight against diabetes in
            Belize.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
