import heroEvent from '../assets/WhatsApp Image 2026-08-21 at 7.35.58 PM.webp'
import openBuffetBanner from '../assets/media/open-buffet-banner.jpg'
import image1 from '../assets/media/image 1.jpeg'
import image2 from '../assets/media/image 2.jpeg'
import image3 from '../assets/media/image 3.jpeg'
import image4 from '../assets/media/image 4.jpeg'
import image5 from '../assets/media/image 5.jpeg'
import image6 from '../assets/media/image 6.jpeg'
import image7 from '../assets/media/image 7.jpeg'
import image8 from '../assets/media/image 8.jpeg'
import image9 from '../assets/media/image 9.jpeg'
import image10 from '../assets/media/image 10.jpeg'
import image11 from '../assets/media/image 11.jpeg'
import image12 from '../assets/media/image 12.jpeg'
import image13 from '../assets/media/image 13.jpeg'
import image14 from '../assets/media/image 14.jpeg'
import image15 from '../assets/media/WhatsApp Image 2026-09-01 at 10.56.20 PM.jpeg'
import image16 from '../assets/media/image 16.jpeg'
import image17 from '../assets/media/image 17.jpeg'
import image18 from '../assets/media/image 18.jpeg'
import image19 from '../assets/media/image 19.jpeg'
import image20 from '../assets/media/image 20.jpeg'
import iceCreamStation from '../assets/media/WhatsApp Image 2026-08-21 at 7.36.00 PM.webp'
import grillStation from '../assets/media/WhatsApp Image 2026-09-01 .jpeg'
import saladStation from '../assets/media/WhatsApp Image 2026-09-01 at 12.36.49 PM.jpeg'
import teamAtWork from '../assets/media/WhatsApp Image 2026-09-01 at 12.36.50 PM.jpeg'
import buffetService from '../assets/media/WhatsApp Image 2026-09-01 at 12.36.51 PM.jpeg'
import servingStation from '../assets/media/WhatsApp Image 2026-09-01 at 12.36.52 PM.jpeg'
import platedEvent from '../assets/media/WhatsApp Image 2026-09-01 PM.jpeg'
import tableService from '../assets/media/WhatsApp Image 2026-09-01.jpeg'

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

export const heroImage = heroEvent
export const whyStandardImage = image13

export const gallerySources = [
  image1,
  image2,
  image3,
  image4,
  image6,
  image7,
  image8,
  image12,
  image14,
  image15,
  image20,
  grillStation,
]

export const storyImages = [teamAtWork, buffetService, servingStation]

export const aboutGallerySources = [
  image9,
  image11,
  image16,
  image17,
  image18,
  saladStation,
  platedEvent,
  tableService,
]

export const menuCollectionImages = {
  streetFood: image5,
  mainCourses: image19,
  desserts: image10,
  drinks: iceCreamStation,
}

export const openBuffetImage = openBuffetBanner
export const serviceKeys = ['buffet', 'truck', 'dessert', 'drinks', 'snack', 'live', 'full', 'recommend']
export const addonKeys = ['addon0', 'addon1', 'addon2', 'addon3', 'addon4', 'addon5']
