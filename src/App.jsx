import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import GallerySection from './components/GallerySection';
import ExperienceSection from './components/ExperienceSection';
import GithubSection from './components/GithubSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const initAnimations = () => {
    // Title lines stagger
    gsap.from('.title-line', {
      yPercent: 110,
      stagger: 0.12,
      duration: 1,
      ease: 'power4.out'
    });

    // Reveal elements on scroll
    document.querySelectorAll('.reveal').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Stats counter animation
    document.querySelectorAll('[data-count]').forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = `${Math.floor(obj.val)}+`;
            }
          });
        }
      });
    });

    // Gallery items stagger animation
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
      gsap.from('.gallery-item', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryGrid,
          start: 'top 80%'
        }
      });
    }
  };

  return (
    <div className="app-wrapper">
      <Loader onComplete={initAnimations} />
      <Navbar />

      <Hero />
      <Marquee />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <ExperienceSection />
      <GithubSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
