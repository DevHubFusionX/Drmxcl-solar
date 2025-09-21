// Contact Information
export const CONTACT_INFO = {
  phone: '+2349138502947',
  phone2: '+2347081741999',
  email: 'Drmcxlihemeje@gmail.com',
  whatsapp: 'https://wa.me/2349138502947',
  address: 'Lagos, Nigeria'
}

// Services
export const SERVICES = [
  {
    id: 'solar-installation',
    name: 'Solar Installation',
    description: 'Complete solar panel installation for homes and businesses',
    icon: 'Zap'
  },
  {
    id: 'inverter-repair',
    name: 'Inverter Repair',
    description: 'Expert repair services for all inverter brands',
    icon: 'Wrench'
  },
  {
    id: 'battery-services',
    name: 'Battery Services',
    description: 'Battery installation and maintenance',
    icon: 'Battery'
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    description: 'Regular maintenance and system upgrades',
    icon: 'Settings'
  }
]

// Navigation Links
export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }
}
