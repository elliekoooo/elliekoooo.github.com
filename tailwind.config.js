/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      moon: 'url(/images/moon.png)',
      astronaut: 'url(/images/astronaut.png)',
      hud: 'url(/images/hud.png)',
      galaxy: 'url(images/galaxy.jpg)',
      map: 'url(images/map.png)',
      hud2: 'url(/images/hud2.png)',
      spaceship: 'url(/images/spaceship.jpg)',
      earth: 'url(/images/earth.jpg)',
      neon: 'url(/images/neon.png)'
    },
    extend: {
      colors: {
        neonBlue: "#00FFFF",
        neonPurple: "#8A2BE2",
        neonGreen: "#00FF00",
        nightSky: "#0a0f1e",
        neonRed: "#FF3131", 
        cyberRed: "#FF073A", 
        alertRed: "#FF1100",
        crimsonRed: "#DC143C",
        bloodRed: "#8B0000",
        deepScarlet: "#B22222",
        black: "rgb(255,255,255,0.5)",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        vt323: ["VT323", "monospace"],
        raleway: ["Raleway", "monospace"],
        tiltNeon: ["Tilt Neon", "sans-serif"],
        audioWide: ["Audiowide", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
        exo2: ["Exo2", "sans-serif"]
      },
      boxShadow: {
        "neon-blue": "0 0 10px #00FFFF",
        "neon-purple": "0 0 10px #8A2BE2",
      },
      dropShadow: {
        "text-border": "0 1.2px 1.2px rgba(0,0,0,0.8)",
        "text-border2": "0 2.5px 2.5px rgb(255,255,255,0.5)"
      },
      animation: {
        "glitch": "glitch 0.2s infinite",
        "glitchColor": "glitchColor 0.5s infinite alternate",
        "slide": "slide 1s ease-in-out forwards",
        "blink": "blink 1s infinite",
        "scanLine": "scanLine 5s ease-in-out infinite",
        "scanLine2": "scanLine 7s ease-in-out infinite",
        "selected": "selected 0.2s infinite",
        "fadeInScale": "fadeInScale 0.5s ease-out",
        "driftIn": "driftIn 0.8s ease-out",
        "typing": "typing 3s steps(30, end) forwards"
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "20%": { transform: "translate(-2px, 2px)", opacity: "0.8" },
          "40%": { transform: "translate(2px, -2px)", opacity: "0.9" },
          "60%": { transform: "translate(-2px, -2px)", opacity: "0.8" },
          "80%": { transform: "translate(2px, 2px)", opacity: "0.9" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
        glitchColor: {
          "0%": { color: "grey" }, // 빨간색
          "50%": { color: "#00FFFF" }, // 초록색
          "100%": { color: "#8A2BE2" }, // 파란색
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100vw)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        scanLine: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        scanLine2: {
          "0%": { opacity: "0.2", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(100%)" },
        },
        selected: {
          "60%": { transform: "translate(-0.5, -0.5)", opacity: "0.5" },
          "80%": { transform: "translate(0.5, 0.5)", opacity: "0.6" },
          "100%": { transform: "translate(0, 0)", opacity: "1" }
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        driftIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        }
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')]
}

