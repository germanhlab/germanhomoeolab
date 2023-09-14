import image1 from './img1.jpg'
import image2 from './img2.jpg'
import image3 from './img3.jpg'
// import image4 from '../images/slide-4.jpg'

export const images = [image1, image2, image3, ]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex