import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#36A9E1",
          dark: "#2A2563",
          medium: "#1D71B8",
          darkBlue: "#2D2F83",
        }
      },
    },
  },
  plugins: [],
}
export default config
