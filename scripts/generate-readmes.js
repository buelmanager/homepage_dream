const fs = require('fs');
const path = require('path');

const baseDir = '/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home';

const templates = {
  'architecture': {
    title: 'Architecture Firm',
    industry: 'Architecture & Design',
    style: 'Modern minimalist, Dark theme, Bold typography'
  },
  'art-gallery': {
    title: 'Art Gallery',
    industry: 'Arts & Culture',
    style: 'Elegant, White space, Gallery-focused'
  },
  'auto-detail': {
    title: 'Auto Detail Shop',
    industry: 'Automotive',
    style: 'Clean, Professional, Bold'
  },
  'bakery': {
    title: 'Bakery',
    industry: 'Food & Beverage',
    style: 'Warm, Inviting, Organic'
  },
  'barbershop': {
    title: 'Barbershop',
    industry: 'Personal Care',
    style: 'Vintage, Classic, Masculine'
  },
  'bookstore': {
    title: 'Bookstore',
    industry: 'Retail',
    style: 'Cozy, Literary, Warm'
  },
  'boutique-hotel': {
    title: 'Boutique Hotel',
    industry: 'Hospitality',
    style: 'Luxury, Elegant, Sophisticated'
  },
  'cafe-lounge': {
    title: 'Cafe & Lounge',
    industry: 'Food & Beverage',
    style: 'Cozy, Modern, Relaxed'
  },
  'camping-outfitter': {
    title: 'Camping Outfitter',
    industry: 'Outdoor & Adventure',
    style: 'Rugged, Natural, Adventure'
  },
  'chocolate-atelier': {
    title: 'Chocolate Atelier',
    industry: 'Food & Beverage',
    style: 'Luxury, Artisan, Elegant'
  },
  'cocktail-bar': {
    title: 'Cocktail Bar',
    industry: 'Food & Beverage',
    style: 'Sophisticated, Dark, Mood'
  },
  'cooking-studio': {
    title: 'Cooking Studio',
    industry: 'Education & Food',
    style: 'Modern, Clean, Culinary'
  },
  'cowork-space': {
    title: 'Coworking Space',
    industry: 'Business',
    style: 'Modern, Professional, Creative'
  },
  'coworking-library': {
    title: 'Coworking Library',
    industry: 'Business',
    style: 'Modern, Quiet, Focused'
  },
  'craft-brewery': {
    title: 'Craft Brewery',
    industry: 'Food & Beverage',
    style: 'Industrial, Artisan, Rustic'
  },
  'dental-clinic': {
    title: 'Dental Clinic',
    industry: 'Healthcare',
    style: 'Clean, Professional, Medical'
  },
  'dive-center': {
    title: 'Dive Center',
    industry: 'Outdoor & Adventure',
    style: 'Ocean, Adventure, Blue'
  },
  'escape-room': {
    title: 'Escape Room',
    industry: 'Entertainment',
    style: 'Mysterious, Dark, Adventure'
  },
  'ev-station': {
    title: 'EV Charging Station',
    industry: 'Automotive & Technology',
    style: 'Modern, Clean, Eco-friendly'
  },
  'fine-dining': {
    title: 'Fine Dining Restaurant',
    industry: 'Food & Beverage',
    style: 'Luxury, Elegant, Sophisticated'
  },
  'fitness-gym': {
    title: 'Fitness Gym',
    industry: 'Health & Fitness',
    style: 'Energetic, Bold, Modern'
  },
  'flower-boutique': {
    title: 'Flower Boutique',
    industry: 'Retail',
    style: 'Elegant, Floral, Romantic'
  },
  'hair-salon': {
    title: 'Hair Salon',
    industry: 'Personal Care',
    style: 'Modern, Stylish, Professional'
  },
  'interior-design': {
    title: 'Interior Design',
    industry: 'Architecture & Design',
    style: 'Modern, Elegant, Minimalist'
  },
  'jewelry-atelier': {
    title: 'Jewelry Atelier',
    industry: 'Retail',
    style: 'Luxury, Elegant, Precious'
  },
  'language-academy': {
    title: 'Language Academy',
    industry: 'Education',
    style: 'Modern, Professional, Academic'
  },
  'law-firm': {
    title: 'Law Firm',
    industry: 'Legal',
    style: 'Professional, Traditional, Authoritative'
  },
  'moto-garage': {
    title: 'Motorcycle Garage',
    industry: 'Automotive',
    style: 'Rugged, Industrial, Bold'
  },
  'music-studio': {
    title: 'Music Studio',
    industry: 'Entertainment',
    style: 'Dark, Creative, Modern'
  },
  'nail-salon': {
    title: 'Nail Salon',
    industry: 'Personal Care',
    style: 'Modern, Stylish, Feminine'
  },
  'organic-farm': {
    title: 'Organic Farm',
    industry: 'Agriculture & Food',
    style: 'Natural, Organic, Rustic'
  },
  'pet-clinic': {
    title: 'Pet Clinic',
    industry: 'Healthcare',
    style: 'Clean, Friendly, Professional'
  },
  'pet-grooming': {
    title: 'Pet Grooming',
    industry: 'Pet Services',
    style: 'Clean, Friendly, Colorful'
  },
  'photo-studio': {
    title: 'Photo Studio',
    industry: 'Photography',
    style: 'Minimalist, Clean, Professional'
  },
  'pilates-studio': {
    title: 'Pilates Studio',
    industry: 'Health & Fitness',
    style: 'Modern, Clean, Wellness'
  },
  'real-estate': {
    title: 'Real Estate',
    industry: 'Real Estate',
    style: 'Professional, Modern, Clean'
  },
  'rock-climbing': {
    title: 'Rock Climbing Gym',
    industry: 'Outdoor & Adventure',
    style: 'Adventure, Bold, Energetic'
  },
  'skate-shop': {
    title: 'Skate Shop',
    industry: 'Retail',
    style: 'Urban, Cool, Youth'
  },
  'skydiving-center': {
    title: 'Skydiving Center',
    industry: 'Outdoor & Adventure',
    style: 'Adventure, Bold, Thrilling'
  },
  'sneaker-store': {
    title: 'Sneaker Store',
    industry: 'Retail',
    style: 'Street, Modern, Bold'
  },
  'spa-wellness': {
    title: 'Spa & Wellness',
    industry: 'Health & Beauty',
    style: 'Relaxing, Luxurious, Serene'
  },
  'surf-school': {
    title: 'Surf School',
    industry: 'Outdoor & Adventure',
    style: 'Beach, Ocean, Adventurous'
  },
  'tattoo-studio': {
    title: 'Tattoo Studio',
    industry: 'Personal Care',
    style: 'Dark, Artistic, Bold'
  },
  'tea-house': {
    title: 'Tea House',
    industry: 'Food & Beverage',
    style: 'Traditional, Serene, Asian'
  },
  'vr-arcade': {
    title: 'VR Arcade',
    industry: 'Entertainment',
    style: 'Futuristic, Neon, Tech'
  },
  'watch-atelier': {
    title: 'Watch Atelier',
    industry: 'Retail',
    style: 'Luxury, Precision, Elegant'
  },
  'wedding-planner': {
    title: 'Wedding Planner',
    industry: 'Events',
    style: 'Romantic, Elegant, Dreamy'
  },
  'whiskey-lounge': {
    title: 'Whiskey Lounge',
    industry: 'Food & Beverage',
    style: 'Sophisticated, Dark, Premium'
  },
  'wine-bar': {
    title: 'Wine Bar',
    industry: 'Food & Beverage',
    style: 'Elegant, Sophisticated, Premium'
  },
  'yacht-club': {
    title: 'Yacht Club',
    industry: 'Hospitality & Recreation',
    style: 'Luxury, Ocean, Premium'
  },
  'yoga-studio': {
    title: 'Yoga Studio',
    industry: 'Health & Fitness',
    style: 'Peaceful, Minimalist, Zen'
  }
};

const folders = fs.readdirSync(baseDir).filter(f => {
  return fs.statSync(path.join(baseDir, f)).isDirectory();
});

folders.forEach(folder => {
  const template = templates[folder];
  if (!template) {
    console.log(`No template for: ${folder}`);
    return;
  }

  const readme = `# ${template.title} Website Template

## Overview
Professional ${template.title.toLowerCase()} website with modern design.

## Industry
${template.industry}

## Language
English

## Style
${template.style}

## Sections
- Hero section
- Services
- About
- Gallery/Portfolio
- Contact
- Footer

## Features
- Fully responsive
- Modern animations
- Contact form
- Gallery/masonry grid
- Mobile-friendly navigation
`;

  const readmePath = path.join(baseDir, folder, 'readme.md');
  fs.writeFileSync(readmePath, readme);
  console.log(`Created: ${folder}/readme.md`);
});

console.log('Done!');
