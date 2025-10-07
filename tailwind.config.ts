import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
  		colors: {
        'brand-background': 'hsl(var(--brand-background))',
        'brand-primary': 'hsl(var(--brand-primary))',
        'brand-secondary': 'hsl(var(--brand-secondary))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
        // Childrensalon Primary Colors
        'color-white': 'hsl(var(--color-white))',
        'color-black': 'hsl(var(--color-black))',
        'color-text-primary': 'hsl(var(--color-text-primary))',
        'color-text-secondary': 'hsl(var(--color-text-secondary))',
        'color-soft-gray': 'hsl(var(--color-soft-gray))',
        'color-medium-gray': 'hsl(var(--color-medium-gray))',
        'color-light-gray': 'hsl(var(--color-light-gray))',
        'color-border-subtle': 'hsl(var(--color-border-subtle))',
        // PRD Accent Colors
        'accent-navy': 'hsl(var(--color-accent-navy))',
        'accent-sage': 'hsl(var(--color-accent-sage))',
        'accent-blush': 'hsl(var(--color-accent-blush))',
        'accent-mint': 'hsl(var(--color-accent-mint))',
        'accent-warm': 'hsl(var(--color-accent-warm))',
        // PRD Semantic Colors
        success: 'hsl(var(--color-success))',
        warning: 'hsl(var(--color-warning))',
        error: 'hsl(var(--color-error))',
        info: 'hsl(var(--color-info))',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      // PRD Spacing System (base unit: 4px)
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      // PRD Container Max-widths
      maxWidth: {
        'container-xs': '640px',
        'container-sm': '768px',
        'container-md': '1024px',
        'container-lg': '1280px',
        'container-xl': '1440px',
        'container-2xl': '1600px',
      },
      // PRD Typography Scale
      fontSize: {
        'h1-mobile': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }], // 48px
        'h1-desktop': ['4rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }], // 64px
        'h2-mobile': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }], // 36px
        'h2-desktop': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }], // 48px
        'h3-mobile': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
        'h3-desktop': ['2rem', { lineHeight: '1.3', fontWeight: '600' }], // 32px
        'h4-mobile': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }], // 18px
        'h4-desktop': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }], // 20px
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-md': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'body-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }], // 12px
        'button': ['0.875rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '0.02em' }], // 14px
      },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;