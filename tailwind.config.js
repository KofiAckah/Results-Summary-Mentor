/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary :{
        LightRed: 'hsl(0, 100%, 67%)',
        OrangeYellow: 'hsl(39, 100%, 56%)',
        GreenTeal: 'hsl(166, 100%, 37%)',
        CobaltBlue: 'hsl(234, 85%, 45%)',
        },
        gradients :{
          LightSlateBlue: 'hsl(252, 100%, 67%)',
          LightRoyalBlue: 'hsl(241, 81%, 54%)',
          VioletBlue: 'hsla(256, 72%, 46%, 1)',
          PersianBlue: 'hsla(241, 72%, 46%, 1)',
          100 : 'linear-gradient(0deg, hsla(241, 72%, 46%, 1) 0%, hsla(256, 72%, 46%, 1) 74%)',
        },
        // neutral
        odd : {
          White: 'hsl(0, 0%, 100%)',
          PaleBlue: 'hsl(221, 100%, 96%)',
          LightLavender: 'hsl(241, 100%, 89%)',
          DarkGrayBlue: 'hsl(224, 30%, 27%)',
        },
      },
      fontFamily: {
        body: ['Hanken Grotesk'],
      },
    },
  },
  plugins: [],
}

