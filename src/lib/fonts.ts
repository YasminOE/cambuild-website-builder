import localFont from 'next/font/local';

// Main font for the entire website - Nata Sans from Google Fonts
export const nataSans = {
  className: 'font-nata-sans',
  variable: '--font-nata-sans',
  style: {
    fontFamily: '"Nata Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
};

// Humane font only for logo/branding
export const humane = localFont({
  src: [
    {
      path: '../font/Web-TT/Humane-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-humane',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
}); 