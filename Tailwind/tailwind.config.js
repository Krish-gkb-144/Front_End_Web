module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'serif': ['Space Grotesk'],
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(-3deg)' },
        '100%': { transform: 'rotate(3deg)' },
      }
    },
    keyframes: {
      circle: {
        '0%': { transform: 'scale(1)'},
        '50%': { transform: 'scale(0.5)' },
        '100%': { transform: 'scale(1)' },
      }
    }
  },
  plugins: [],
}

