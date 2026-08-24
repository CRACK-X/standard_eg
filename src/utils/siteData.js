import heroPizzaStation from '../assets/WhatsApp Image 2026-08-21 at 7.35.58 PM.webp'
import outdoorGrill from '../assets/WhatsApp Image 2026-08-21 at 7.36.00 PM.webp'
import corporateGrill from '../assets/IMG_2338.JPG.webp'
import brandedFoodCarts from '../assets/IMG_4243.JPG.webp'
import pizzaCloseup from '../assets/IMG_0055.JPG.webp'
import burgerCatering from '../assets/IMG_2928.JPG.webp'
import dessertStation from '../assets/IMG_3119.JPG.webp'
import iceCreamStation from '../assets/WhatsApp Image 2026-08-21 at 6.43.19 PM (1).webp'
import burgerStation from '../assets/WhatsApp Image 2026-08-21 at 7.53.39 PM.webp'
import fruitStation from '../assets/WhatsApp Image 2026-08-21 at 7.53.42 PM.webp'
import standardTeam from '../assets/WhatsApp Image 2026-08-21 at 6.43.19 PM.webp'

export const contact = {
  phoneDisplay: '01277711157',
  phoneHref: 'tel:+201277711157',
  whatsappNumber: '201277711157',
  get whatsapp() {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '')
    const base = isMobile ? 'whatsapp://send?phone=' : 'https://wa.me/'
    const sep = isMobile ? '&' : '?'
    return `${base}201277711157${sep}text=Hi%20Standard%2C%20I%27d%20like%20to%20ask%20about%20catering.`
  },
  email: 'Standardcatering777@gmail.com',
}

export const heroImage = heroPizzaStation
export const storyImage = standardTeam
export const whyStandardImage = outdoorGrill

export const gallerySources = [
  outdoorGrill,
  pizzaCloseup,
  brandedFoodCarts,
  burgerCatering,
  iceCreamStation,
  burgerStation,
]

export const menuCollectionImages = {
  streetFood: burgerStation,
  mainCourses: corporateGrill,
  desserts: dessertStation,
  drinks: fruitStation,
}

export const serviceKeys = ['buffet', 'truck', 'dessert', 'drinks', 'snack', 'live', 'full', 'recommend']
export const addonKeys = ['addon0', 'addon1', 'addon2', 'addon3', 'addon4', 'addon5']
