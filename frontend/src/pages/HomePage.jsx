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
  Play,
  ArrowRight,
  Facebook,
  Instagram,
  Clock3,
  Stethoscope,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const PAYPAL_LINK = 'https://www.paypal.com/us/fundraiser/charity/120798';
const FACEBOOK_LINK = 'https://www.facebook.com/peoplesdiabetes';
const INSTAGRAM_LINK = 'https://www.instagram.com/peoples_diabetes_foundation/';
const WEBSITE_LINK = 'https://www.peoplesdiabetesfoundation.org/';
const EMAIL = 'fred@peoplesdiabetesfoundation.org';
const PHONE = '323-304-2861';
const ADDRESS = '1725 Ocean Ave Unit 226, Santa Monica, CA 90401';
const LOGO_URL =
  'https://customer-assets.emergentagent.com/job_fbeb7c05-e739-4d3b-84da-a66045d0dc5c/artifacts/1qk0eawd_IMG_3029.JPG';
const COMMUNITY_IMAGE_URL = `${process.env.PUBLIC_URL || ''}/images/world_diabetes.jpg`;

const FOCUS_AREAS = [
  {
    icon: BookOpen,
    title: 'Education that feels usable',
    text: 'The foundation centers awareness, prevention, and practical diabetes education so families can better understand daily care decisions.',
  },
  {
    icon: Users,
    title: 'Community-facing outreach',
    text: 'The work is framed around public understanding, family support, and outreach that can reach people before complications worsen.',
  },
  {
    icon: Stethoscope,
    title: 'Support tied to real health concerns',
    text: 'The foundation shares guidance on food choices, type 1 diabetes education, sleep, stress, and glucose management rather than relying on one-off campaign messaging.',
  },
];

const RESOURCE_PILLARS = [
  {
    number: '01',
    title: 'Awareness and prevention',
    text: 'Simple, clear information that helps people recognize diabetes risks, symptoms, and the importance of early action.',
    bullets: [
      'Community education',
      'Prevention messaging',
      'Public-facing awareness',
      'Family-friendly explanations',
    ],
  },
  {
    number: '02',
    title: 'Patient and family learning',
    text: 'Materials and shared resources designed to make diabetes easier to understand for patients, caregivers, teachers, and families.',
    bullets: [
      'Everyday self-care guidance',
      'Nutrition and food education',
      'Type 1 and type 2 learning resources',
      'School and family support',
    ],
  },
  {
    number: '03',
    title: 'Digital outreach and community connection',
    text: 'Facebook and social channels help the foundation share health education, encourage families, and stay connected with supporters.',
    bullets: [
      'Educational posts',
      'Community engagement',
      'Shareable health content',
      'Supporter communication',
    ],
  },
];

const FACEBOOK_UPDATES = [
  {
    title: 'Healthy relationships with food',
    label: 'Featured topic',
    text: 'A practical reframing of the relationship with food, built around education instead of guilt or fear.',
  },
  {
    title: 'Understanding type 1 diabetes at school and at home',
    label: 'Family education',
    text: 'Learning content for teachers, students, and families that helps explain type 1 diabetes in a clear, approachable way.',
  },
  {
    title: 'How sleep and stress affect glucose levels',
    label: 'Health education',
    text: 'A focus on how sleep, stress, and daily habits affect glucose regulation and long-term diabetes management.',
  },
  {
    title: 'Encouragement for families and supporters',
    label: 'Community support',
    text: 'Encouraging, human-centered messages that keep the organization connected to families and supporters.',
  },
];

const GALLERY_ITEMS = [
  {
    title: 'Community outreach',
    subtitle: 'Local education and support in Belize',
    type: 'Photo',
    image: `${process.env.PUBLIC_URL || ''}/images/IMG_8889.JPG`,
  },
  {
    title: 'Family learning',
    subtitle: 'Practical conversations around diabetes care',
    type: 'Photo',
    image: `${process.env.PUBLIC_URL || ''}/images/IMG_8890.JPG`,
  },
  {
    title: 'Volunteer preparation',
    subtitle: 'Volunteers helping organize community support',
    type: 'Photo',
    image: `${process.env.PUBLIC_URL || ''}/images/IMG_8992.JPG`,
  },
  {
    title: 'Community meals',
    subtitle: 'Shared meals that bring people together',
    type: 'Photo',
    image: `${process.env.PUBLIC_URL || ''}/images/IMG_8995.JPG`,
  },
  {
    title: 'Volunteer support',
    subtitle: 'People showing up with time, care, and energy',
    type: 'Photo',
    image: `${process.env.PUBLIC_URL || ''}/images/IMG_8996.JPG`,
  },
  {
    title: 'Belize awareness day',
    subtitle: 'Community members standing together for diabetes awareness',
    type: 'Photo',
    image: COMMUNITY_IMAGE_URL,
  },
];

const VIDEO_LINKS = [
  {
    title: 'Community Stories Playlist',
    link: 'https://www.youtube.com/watch?v=aq09vbSEGgg&list=PLQndNxM2_zkYzyQEH_Nv_U3aRuEZNCmY8',
    thumbnail: 'https://img.youtube.com/vi/aq09vbSEGgg/hqdefault.jpg',
  },
  {
    title: 'Health Education Playlist',
    link: 'https://www.youtube.com/watch?v=bPITHEiFWLc&list=PLQndNxM2_zkaxzF1tX7xb0bcU_n_1t5KN',
    thumbnail: 'https://img.youtube.com/vi/bPITHEiFWLc/hqdefault.jpg',
  },
];

const MEDIA_HIGHLIGHTS = [
  'Community education in action',
  'Family-centered support',
  'Volunteer energy and participation',
];

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="homepage">
      <header className="site-header">
        <div className="shell header-row">
          <button
            className="brand"
            onClick={() => scrollToSection('top')}
            type="button"
          >
            <img
              src={LOGO_URL}
              alt="The People's Diabetes Foundation logo"
              className="brand-logo"
            />
            <span className="brand-copy">
              <span className="brand-name">The People&apos;s Diabetes Foundation</span>
              <span className="brand-tag">Awareness, prevention, and diabetes education</span>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('resources')} className="nav-link">
              Resources
            </button>
            <button onClick={() => scrollToSection('facebook')} className="nav-link">
              Facebook
            </button>
            <button onClick={() => scrollToSection('media')} className="nav-link">
              Media
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
            <Button
              className="header-cta"
              onClick={() => window.open(PAYPAL_LINK, '_blank', 'noopener,noreferrer')}
            >
              <Heart className="icon" />
              Donate
            </Button>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('resources')} className="mobile-nav-link">
              Resources
            </button>
            <button onClick={() => scrollToSection('facebook')} className="mobile-nav-link">
              Facebook
            </button>
            <button onClick={() => scrollToSection('media')} className="mobile-nav-link">
              Media
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              Contact
            </button>
            <Button
              className="mobile-cta"
              onClick={() => window.open(PAYPAL_LINK, '_blank', 'noopener,noreferrer')}
            >
              <Heart className="icon" />
              Donate now
            </Button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-backdrop">
            <img src={COMMUNITY_IMAGE_URL} alt="Community diabetes outreach in Belize" />
          </div>
          <div className="hero-scrim" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <Facebook size={14} />
                <span>Community education and support</span>
              </div>
              <h1 className="hero-title">
                Helping people understand diabetes through education, prevention, and community support.
              </h1>
              <p className="hero-text">
                The People&apos;s Diabetes Foundation is a nonprofit focused on awareness,
                prevention, and education in understanding diabetes. Through public outreach,
                family-centered learning, and community engagement, the foundation works to make
                diabetes information more practical, approachable, and useful.
              </p>
              <div className="hero-actions">
                <Button
                  className="primary-cta"
                  onClick={() => window.open(FACEBOOK_LINK, '_blank', 'noopener,noreferrer')}
                >
                  <Facebook className="icon" />
                  Follow on Facebook
                </Button>
                <Button
                  variant="outline"
                  className="secondary-cta"
                  onClick={() => scrollToSection('facebook')}
                >
                  Explore topics
                  <ArrowRight className="icon" />
                </Button>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-stat-grid">
                <div className="hero-stat">
                  <span className="hero-stat-value">Diabetes awareness</span>
                  <span className="hero-stat-label">
                    Public education that helps people recognize risk, symptoms, and the value of early care.
                  </span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">Family education</span>
                  <span className="hero-stat-label">
                    Practical learning for families, caregivers, teachers, and community members.
                  </span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">Community outreach</span>
                  <span className="hero-stat-label">
                    Shared resources, encouragement, and public-facing support that keep the mission visible.
                  </span>
                </div>
              </div>
              <div className="hero-panel-divider" />
              <p className="hero-panel-note">
                The foundation brings education, encouragement, and outreach together so diabetes
                information reaches people in ways that are easier to use in daily life.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-surface" id="about">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="section-kicker">About</p>
                <h2 className="section-title">Building understanding, confidence, and support around diabetes care.</h2>
              </div>
              <p className="section-lead">
                The People&apos;s Diabetes Foundation is committed to awareness, prevention, and
                education in understanding diabetes. Its work supports people, families, and
                communities with clearer information and more compassionate guidance.
              </p>
            </div>

            <div className="priority-grid">
              {FOCUS_AREAS.map((item) => {
                const Icon = item.icon;
                return (
                  <Card className="info-card" key={item.title}>
                    <CardContent className="info-card-content">
                      <div className="info-icon">
                        <Icon size={24} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="section-kicker">Resources</p>
                <h2 className="section-title">Programs and resources that support everyday understanding.</h2>
              </div>
              <p className="section-lead">
                The foundation&apos;s work combines awareness, prevention, education, and outreach so
                that diabetes support reaches people in practical and accessible ways.
              </p>
            </div>

            <div className="program-grid">
              {RESOURCE_PILLARS.map((program) => (
                <Card className="program-card" key={program.number}>
                  <CardContent className="program-card-content">
                    <div className="program-number">{program.number}</div>
                    <h3>{program.title}</h3>
                    <p>{program.text}</p>
                    <ul className="program-list">
                      {program.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-surface" id="facebook">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="section-kicker">Health Topics</p>
                <h2 className="section-title">Practical guidance the foundation shares with its community.</h2>
              </div>
              <p className="section-lead">
                The foundation shares practical themes that matter to everyday diabetes care,
                including food and nutrition, type 1 diabetes learning, sleep and stress, and
                encouragement for families and supporters.
              </p>
            </div>

            <div className="updates-layout">
              <div className="update-cards">
                {FACEBOOK_UPDATES.map((update) => (
                  <Card className="update-card" key={update.title}>
                    <CardContent className="update-card-content">
                      <div className="update-label">{update.label}</div>
                      <h3>{update.title}</h3>
                      <p>{update.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="updates-sidebar">
                <div className="social-panel">
                  <div className="social-panel-row">
                    <Facebook size={18} />
                    <span>People&apos;s Diabetes Foundation</span>
                  </div>
                  <div className="social-panel-row">
                    <Clock3 size={18} />
                    <span>Education, outreach, and community connection</span>
                  </div>
                  <div className="social-panel-row">
                    <Users size={18} />
                    <span>Follow the foundation for health education and updates</span>
                  </div>
                </div>

                <div className="social-actions">
                  <Button
                    className="primary-cta sidebar-cta"
                    onClick={() => window.open(FACEBOOK_LINK, '_blank', 'noopener,noreferrer')}
                  >
                    <Facebook className="icon" />
                    Open Facebook page
                  </Button>
                  <Button
                    variant="outline"
                    className="social-outline"
                    onClick={() => window.open(INSTAGRAM_LINK, '_blank', 'noopener,noreferrer')}
                  >
                    <Instagram className="icon" />
                    Open Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="media">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="section-kicker">Media</p>
                <h2 className="section-title">Photos and stories from the foundation&apos;s community work.</h2>
              </div>
              <p className="section-lead">
                These photos and videos highlight outreach, education, volunteer support, and
                the people at the center of the foundation&apos;s mission.
              </p>
            </div>

            <div className="media-layout">
              <div className="media-story">
                <div
                  className="media-spotlight"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(8, 21, 28, 0.12), rgba(8, 21, 28, 0.7)), url('${GALLERY_ITEMS[5].image}')`,
                  }}
                >
                  <div className="media-spotlight-copy">
                    <div className="gallery-type">
                      <Camera size={14} />
                      <span>Community story</span>
                    </div>
                    <h3>Neighbors, families, and volunteers coming together around diabetes awareness.</h3>
                    <p>
                      The foundation&apos;s work is rooted in shared learning, public outreach, and
                      community participation that helps people feel seen, informed, and supported.
                    </p>
                  </div>
                </div>

                <div className="media-highlight-strip">
                  {MEDIA_HIGHLIGHTS.map((item) => (
                    <div className="media-highlight" key={item}>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="gallery-grid">
                  {GALLERY_ITEMS.slice(0, 5).map((item) => (
                    <div
                      className="gallery-card"
                      key={item.image}
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.62)), url('${item.image}')`,
                      }}
                    >
                      <div className="gallery-type">
                        <Camera size={14} />
                        <span>{item.type}</span>
                      </div>
                      <div className="gallery-copy">
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="playlist-column media-actions-column">
                <div className="media-action-card">
                  <div className="media-action-copy">
                    <div className="gallery-type">
                      <Video size={14} />
                      <span>Watch and connect</span>
                    </div>
                    <h3>Explore videos, stories, and community updates.</h3>
                    <p>
                      Video and social channels offer another way to learn more about diabetes
                      education, outreach, and the work the foundation is sharing with the community.
                    </p>
                  </div>
                  <div className="media-action-buttons">
                    <Button
                      className="primary-cta"
                      onClick={() => window.open(VIDEO_LINKS[0].link, '_blank', 'noopener,noreferrer')}
                    >
                      <Play className="icon" />
                      Watch stories
                    </Button>
                    <Button
                      variant="outline"
                      className="social-outline"
                      onClick={() => window.open(FACEBOOK_LINK, '_blank', 'noopener,noreferrer')}
                    >
                      <Facebook className="icon" />
                      Visit Facebook
                    </Button>
                  </div>
                </div>

                {VIDEO_LINKS.map((video) => (
                  <div className="playlist-item" key={video.link}>
                    <Card className="playlist-card">
                      <CardContent className="playlist-card-content">
                        <img src={video.thumbnail} alt={video.title} className="playlist-thumb" />
                        <div className="playlist-copy">
                          <h3>{video.title}</h3>
                          <Button
                            variant="outline"
                            className="playlist-button"
                            onClick={() => window.open(video.link, '_blank', 'noopener,noreferrer')}
                          >
                            <Play className="icon" />
                            Watch
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="shell cta-layout">
            <div>
              <p className="section-kicker">Support</p>
              <h2 className="section-title">Support the foundation&apos;s education and outreach work.</h2>
              <p className="section-lead">
                Donations help support public education materials, family-centered learning,
                outreach activities, and the resources the foundation shares with people living
                with diabetes and those who care for them.
              </p>
            </div>
            <div className="cta-actions">
              <Button
                className="primary-cta"
                onClick={() => window.open(PAYPAL_LINK, '_blank', 'noopener,noreferrer')}
              >
                <Heart className="icon" />
                Donate with PayPal
                <ExternalLink className="icon" />
              </Button>
              <p className="cta-note">Secure donation processing through PayPal.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <img src={LOGO_URL} alt="The People's Diabetes Foundation logo" className="footer-logo" />
            <h3>The People&apos;s Diabetes Foundation</h3>
            <p>
              A nonprofit organization focused on diabetes awareness, prevention, and education.
            </p>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer-list">
              <div className="footer-item">
                <MapPin size={16} />
                <span>{ADDRESS}</span>
              </div>
              <div className="footer-item">
                <Phone size={16} />
                <a href={`tel:${PHONE}`}>{PHONE}</a>
              </div>
              <div className="footer-item">
                <Mail size={16} />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
          </div>

          <div>
            <h4>Links</h4>
            <div className="footer-meta">
              <p>
                <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer">
                  Main website
                </a>
              </p>
              <p>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
                  Facebook page
                </a>
              </p>
              <p>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
              <p>EIN: 47-5249589</p>
            </div>
          </div>

          <div>
            <h4>Navigate</h4>
            <div className="footer-links">
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('resources')}>Resources</button>
              <button onClick={() => scrollToSection('facebook')}>Facebook</button>
              <button onClick={() => scrollToSection('media')}>Media</button>
            </div>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>&copy; 2026 The People&apos;s Diabetes Foundation. All rights reserved.</p>
          <p>Homepage content aligned to the foundation&apos;s public mission, education topics, and contact information.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
