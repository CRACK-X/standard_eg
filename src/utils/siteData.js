import heroPizzaStation from '../assets/WhatsApp Image 2026-08-21 at 7.35.58 PM.jpeg'
import outdoorGrill from '../assets/WhatsApp Image 2026-08-21 at 7.36.00 PM.jpeg'
import corporateGrill from '../assets/IMG_2338.JPG.jpeg'
import brandedFoodCarts from '../assets/IMG_4243.JPG.jpeg'
import celebrationCarts from '../assets/IMG_2854.JPG.jpeg'
import pizzaCloseup from '../assets/IMG_0055.JPG.jpeg'
import burgerCatering from '../assets/IMG_2928.JPG.jpeg'
import dessertStation from '../assets/IMG_3119.JPG.jpeg'
import iceCreamStation from '../assets/WhatsApp Image 2026-08-21 at 6.43.19 PM (1).jpeg'
import burgerStation from '../assets/WhatsApp Image 2026-08-21 at 7.53.39 PM.jpeg'
import fruitStation from '../assets/WhatsApp Image 2026-08-21 at 7.53.42 PM.jpeg'
import standardTeam from '../assets/WhatsApp Image 2026-08-21 at 6.43.19 PM.jpeg'

export const contact = {
  phoneDisplay: '01277711157',
  phoneHref: 'tel:+201277711157',
  whatsappNumber: '201277711157',
  whatsapp: 'https://wa.me/201277711157?text=Hi%20Standard%2C%20I%27d%20like%20to%20ask%20about%20catering.',
  email: 'Standardcatering777@gmail.com',
}

export const heroImage = heroPizzaStation
export const storyImage = standardTeam
export const whyStandardImage = outdoorGrill

export const packageItems = [
  { id: 'wedding-full-catering', category: 'weddings', image: outdoorGrill },
  { id: 'food-truck-classic', category: 'trucks', image: brandedFoodCarts },
  { id: 'waffle-dessert-station', category: 'trucks', image: dessertStation },
  { id: 'corporate-activation', category: 'corporate', image: corporateGrill },
  { id: 'birthday-treat-cart', category: 'birthdays', image: celebrationCarts },
  { id: 'drinks-refreshments', category: 'birthdays', image: fruitStation },
]

export const gallerySources = [
  outdoorGrill,
  pizzaCloseup,
  brandedFoodCarts,
  burgerCatering,
  iceCreamStation,
  burgerStation,
]

export const menuCollectionImages = {
  favourites: burgerStation,
  setMenu: corporateGrill,
  openBuffet: outdoorGrill,
}

export const serviceKeys = ['buffet', 'truck', 'dessert', 'drinks', 'snack', 'live', 'full', 'recommend']
export const addonKeys = ['addon0', 'addon1', 'addon2', 'addon3', 'addon4', 'addon5']
