const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    mode: 'production',
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ['127.0.0.1', 'localhost', 'www.smart-gardening.kro.kr', 'www.nihhs.go.kr'],
  },
});
