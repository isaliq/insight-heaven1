// Insight Heavens — Global Contact, Brand & Government Registration Constants

export const BRAND = {
  name: 'Insight Heavens',
  displayName: 'Insight Heavens',
  tagline: 'Explore • Dream • Travel',
  subtagline: 'Discover Paradise on Earth with Native Kashmiri Specialists',
  governmentRegistration: 'Registered under J&K Tourism # [JKEA00005384]',
  regCode: 'JKEA00005384',
  established: '2016',
  location: 'Srinagar, Kashmir',
  fullAddress: 'Boulevard Road, Near Dal Lake Gate No. 2, Srinagar, Jammu & Kashmir 190001',
};

export const PHONE_RAW = '917051933349';
export const PHONE_NUMBER = '+91 70519 33349';
export const PHONE_TEL = 'tel:+917051933349';

export const EMAIL_ADDRESS = 'insightheavens@gmail.com';
export const EMAIL_MAILTO = 'mailto:insightheavens@gmail.com';

export const INSTAGRAM_HANDLE = '@insight.heavens';
export const INSTAGRAM_URL = 'https://www.instagram.com/insight.heavens?stkn=MXdneXU3anB1d240YQ==';

export const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_RAW}`;

export const getWhatsAppLink = (message = "Hi Insight Heavens! I'm interested in planning a Kashmir tour package.") => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const SOCIAL_LINKS = {
  instagram: INSTAGRAM_URL,
  facebook: 'https://facebook.com/insightheavens',
  whatsapp: getWhatsAppLink(),
};
