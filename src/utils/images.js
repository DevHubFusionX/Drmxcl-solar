// Import assets
import heroMain from '../assets/images/hero/hero-main.png';
import hero2 from '../assets/images/hero/hero-2.png';
import hero3 from '../assets/images/hero/hero-3.png';

export const HERO_BACKGROUNDS = [heroMain, hero2, hero3];

// Image paths using renamed files from public folder
export const IMAGES = {
  hero: {
    solarInstallation: heroMain,
    engineerWorking: '/engineer-working.jpg',
    solarPanels: '/solar-panels-roof.jpg'
  },
  services: {
    solarInstallation: '/battery-types.jpg',
    inverterRepair: '/customer-1.jpg',
    batteryServices: '/solar-battery.jpg',
    maintenance: '/customer-2.jpg'
  },
  projects: {
    residential1: '/engineer-working.jpg',
    commercial1: '/commercial.jpg',
    repair1: '/customer-3.jpg',
    residential2: '/residential-abuja.jpg',
    commercial2: '/commercial-ph.jpg',
    maintenance1: '/replacement.jpg'
  },
  about: {
    team: '/team-photo.jpg',
    workshop: '/workshop.jpg',
    certification: '/certification.jpg'
  },
  testimonials: {
    customer1: '/solar-project-5.jpg',
    customer2: '/solar-project-2.jpg',
    customer3: '/solar-project-1.jpg'
  }
};

// Fallback descriptions for images
export const IMAGE_DESCRIPTIONS = {
  hero: {
    solarInstallation: 'Professional solar panel installation on residential roof',
    engineerWorking: 'Certified engineer installing solar inverter system',
    solarPanels: 'High-efficiency solar panels generating clean energy'
  },
  services: {
    solarInstallation: 'Complete solar panel installation service',
    inverterRepair: 'Expert inverter repair and maintenance',
    batteryServices: 'Battery installation and replacement services',
    maintenance: 'Regular maintenance and system optimization'
  },
  projects: {
    residential1: 'Completed residential solar installation in Lekki',
    commercial1: 'Large-scale commercial solar project in Victoria Island',
    repair1: 'Inverter repair and system upgrade in Ikeja',
    residential2: 'Hybrid solar system installation in Abuja',
    commercial2: 'Business solar solution in Port Harcourt',
    maintenance1: 'Battery replacement and system upgrade'
  }
};