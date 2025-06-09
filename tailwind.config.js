/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./layout/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(214.3 31.8% 91.4%)",
        primary: {
          DEFAULT: '#0F0F1A', // Dark blue-black (LanderX inspired)
          50: '#1E1E2F', // Slightly lighter
          100: '#2D2D44',
          200: '#3C3C59',
          300: '#4B4B6E',
          400: '#5A5A83',
          500: '#696998',
          600: '#7878AD',
          700: '#8787C2',
          800: '#9696D7',
          900: '#A5A5EC',
        },
        secondary: {
          DEFAULT: '#1A1A2E', // Slightly lighter dark blue
          50: '#2A2A3E',
          100: '#3A3A4E',
          200: '#4A4A5E',
          300: '#5A5A6E',
          400: '#6A6A7E',
          500: '#7A7A8E',
          600: '#8A8A9E',
          700: '#9A9AAE',
          800: '#AAAABE',
          900: '#BABACE',
        },
         accent: {
          DEFAULT: '#6C63FF',
          50: '#F5F4FF',
          100: '#E9E8FF',
          200: '#D6D4FF',
          300: '#B8B5FF',
          400: '#948FFF',
          500: '#6C63FF', // Main accent color
          600: '#5D54F0',
          700: '#4C43D6',
          800: '#3F37AE',
          900: '#37318A',
          light: '#8B85FF', // Adding the specific light variant
          dark: '#4A42CC', // Adding the specific dark variant
        },
        dark: {
          DEFAULT: '#000000',
          50: '#0A0A0A',
          100: '#141414',
          200: '#1E1E1E',
          300: '#282828',
          400: '#323232',
          500: '#3C3C3C',
          600: '#464646',
          700: '#505050',
          800: '#5A5A5A',
          900: '#646464',
        },
        light: {
          DEFAULT: '#FFFFFF',
          50: '#F5F5F5',
          100: '#EAEAEA',
          200: '#E0E0E0',
          300: '#D6D6D6',
          400: '#CCCCCC',
          500: '#C2C2C2',
          600: '#B8B8B8',
          700: '#AEAEAE',
          800: '#A4A4A4',
          900: '#9A9A9A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'gradient-x': 'gradientX 10s ease infinite',
        'gradient-y': 'gradientY 10s ease infinite',
        'gradient-xy': 'gradientXY 10s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-5deg)' },
          '20%': { transform: 'rotate(10deg)' },
          '30%': { transform: 'rotate(-5deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        gradientX: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        gradientY: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          }
        },
        gradientXY: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236C63FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'gradient-primary': 'linear-gradient(135deg, #6C63FF 0%, #8B85FF 100%)',
        'gradient-accent': 'linear-gradient(135deg, rgba(108,99,255,0.8) 0%, rgba(139,133,255,0.8) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(108, 99, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(108, 99, 255, 0.3)',
        'neumorphic': '8px 8px 16px #0d0d17, -8px -8px 16px #11111d',
        'neumorphic-sm': '4px 4px 8px #0d0d17, -4px -4px 8px #11111d',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
        'all': 'all',
      },
    },
  },
  plugins: [
    import('tailwindcss-animate'),
  ],
}