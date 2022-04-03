module.exports = {
  isProduction: process.env.ELEVENTY_ENV === 'production',
  title: 'Islesford Boatworks',
  description: 'We are a 501(c)(3) non-profit community-based summer boatbuilding program for children ages 7 to 97 years young situated on Little Cranberry Island, Maine',
  url: 'https://www.islesfordboatworks.org',
  author: 'Daniel Box',
  meta: {
    default_social_image: '/static/images/social-image.jpg',
    facebook: 'https://facebook.com/eastslopestudio',
    twitter: '@dbox',
  },
  currentYear: new Date().getFullYear(),
}
