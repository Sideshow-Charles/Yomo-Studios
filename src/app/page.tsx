'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './components/header';
import coverImage2 from '../app/assets/images/coverImage2.jpg';
import '../app/assets/styles/pages/home.scss';
import Button from './components/button';
import product1 from '../app/assets/images/product1.jpeg';
import ProductCard from './components/productCard';
import { products } from '../app/data/productData';
import '../app/assets/styles/components/productGallery.scss';
import Events from '../app/components/events';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home__page">
      <Header />
      <section className={`hero ${isScrolled ? 'scrolled' : ''}`}>
        <Image
          src={coverImage2}
          alt="cover-image"
          width={1200}
          className="hero__image"
        />
        <div className="hero__overlay"></div>

        <div className="hero__content">
          <div className="hero__text">
            <h1>Handcrafted Art That Tells Your Story</h1>
            <p>From stunning resin chessboards to unique art pieces, we create timeless handcrafted works that blend traditional craftsmanship with modern design.</p>
            <div className="button__container">
              <Button content='View our Gallery'></Button>
              <Button content='Book A Workshop'></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <main className="about__content">
          <div className="about__description">
            <h2>Lessons, laughs, and a little Lagos chaos.</h2>
            <p>Founded by Omoyemi Kuteyi, Yomo was born from a passion to help people slow down, reconnect with themselves, and experience the simple joy of making something by hand.</p>
            <p>We believe creativity should be accessible, joyful, and therapeutic — not intimidating or overly structured. That’s why our studio is designed as a safe, beginner-friendly space where everyone — from total newbies to curious creatives — can explore modern crafts like gypsum art, candle making, jar painting, and custom resin design without pressure.</p>
            <p>At Yomo, every workshop is a celebration of color, texture, and self-expression. Whether you’re painting your first jar, pouring your own candle, or crafting a souvenir for someone special, we’re here to guide you through the process with warmth, patience, and playfulness.</p>
            <p>We also collaborate with clients to create custom pieces and memorable events — from intimate bridal showers to engaging corporate team-building sessions. Our handmade keepsakes and curated experiences are perfect for celebrating life’s milestones or simply treating yourself to something meaningful.</p>
          </div>
          <div className="image__container">
            <Image src={product1} alt="product image" />
          </div>
        </main>
      </section>

      <section className="what-drives-us">
        <div className="what-drives-us__header">
          <h1>What Drives Us</h1>
          <p>Our core values shape every piece we create and every interaction we have</p>
        </div>
        <div className="what-drives-us__cards">
          <div className="card">
            <div className="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-party-popper-icon lucide-party-popper">
                <path d="M5.8 11.3 2 22l10.7-3.79" /><path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" /><path d="M22 20h.01" /><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" /><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" /><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" /><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
              </svg>
            </div>
            <h3>Artistic Excellence</h3>
            <p>Every piece is meticulously crafted with attention to detail and artistic vision that transforms raw materials into treasured art.</p>
          </div>
          <div className="card">
            <div className="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
            </div>
            <h3>Community Focused</h3>
            <p>We believe in sharing knowledge through workshops and building a community of makers who inspire each other.</p>
          </div>
          <div className="card">
            <div className="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check-icon lucide-shield-check">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Quality Guaranteed</h3>
            <p>Using only premium materials and time-tested techniques to ensure lasting beauty that stands the test of time.</p>
          </div>
        </div>
      </section>
      <section className="product-gallery">
        <div className="product-gallery__header">
          <h2>Our Creations</h2>
          <p>Explore our collection of handcrafted works, from chessboards to unique home decor pieces.</p>
        </div>
        <div className="product-gallery__grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="shop-now__container">
          <p className="shop__now">Shop now</p>
          <div className="icon">
          {/* <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" width="20" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></g></svg> */}
        </div>
        </div>
        <div className="custom-quote__container">
          <p className="custom-quote__header">Can’t Find What You’re Looking For?</p>
          <p className="custom-quote__text">If you would like a specific design or something else you can’t find on the website. You can book an appointment with us on Instagram and we can further discuss your needs</p>
          <Button content='Book now'></Button>
        </div>
      </section>
      <section className="events__container">
        <Events/>
      </section>
    </div>
  );
}