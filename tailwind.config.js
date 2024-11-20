/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		
		  fontFamily: {
		'Aclonica-Regular': ['Aclonica-Regular', 'sans-serif'],
		'ArchivoBlack-Regular': ['ArchivoBlack-Regular', 'sans-serif'],
		'Blackbeard-ld7V' : ['Blackbeard-ld7V', 'cursive'],
		'BlackOpsOne-Regular': ['BlackOpsOne-Regular', 'cursive'],
		'Borel-Regular': ['Borel-Regular', 'sans-serif'],
		'Caprasimo-Regular': ['Caprasimo-Regular', 'cursive'],
		'Caprasimo': ['Caprasimo', 'cursive'],
		'Changa-Regular': ['Changa-Regular', 'sans-serif'],
		'Changa-VariableFont_wght': ['Changa-VariableFont_wght', 'sans-serif'],
		'ChunkFive-Regular': ['ChunkFive-Regular', 'sans-serif'],
		'Creepster-Regular': ['Creepster-Regular', 'cursive'],
		'DMSerifDisplay-Italic': ['DMSerifDisplay-Italic', 'serif'],
		'DMSerifDisplay-Regular': ['DMSerifDisplay-Regular', 'serif'],
		'DMSerifDisplay': ['DM Serif Display-italic', 'serif'],
		'EmilysCandy-Regular': ['EmilysCandy-Regular', 'cursive'],
		'HoltwoodOneSC-Regular': ['HoltwoodOneSC-Regular', 'sans-serif'],
		'HoltwoodOneSC': ['Holtwood One SC', 'sans-serif'],
		'Iceberg-Regular': ['Iceberg-Regular', 'cursive'],
		'Itim-Regular': ['Itim-Regular, cursive'],
		'Kingthings_Petrock': ['Kingthings_Petrock', 'cursive'],
		'Kranky-Regular': ['Kranky-Regular', 'cursive'],
		'LibreBaskerville-Bold': ['LibreBaskerville-Bold', 'serif'],
		'LibreBaskerville-Italic': ['LibreBaskerville-Italic', 'serif'],
		'LibreBaskerville-Regular': ['LibreBaskerville-Regular', 'serif'],
		'MedievalSharp-Regular': ['MedievalSharp-Regular', 'cursive'],
		'MetalMania-Regular': ['MetalMania-Regular', 'cursive'],
		'Metamorphous-Regular': ['Metamorphous-Regular', 'cursive'],
		 'Nosifer-Regular': ['Nosifer-Regular', 'cursive'],
		 'NotoSans-Italic-VariableFont_wdth,wght': ['NotoSans-Italic-VariableFont_wdth,wght', 'sans-serif'],
		 'NotoSans-VariableFont_wdth,wght': ['NotoSans-VariableFont_wdth,wght', 'sans-serif'],
		 'NovaCut-Regular': ['NovaCut-Regular', 'sans-serif'],
		 'Orbitron-Regular': ['Orbitron-Regular', 'sans-serif'],
		 'Orbitron-VariableFont_wght': ['Orbitron-VariableFont_wght', 'sans-serif'],
		 'PermanentMarker-Regular': ['PermanentMarker-Regular', 'cursive'],
		 'PTSerif-Bold': ['PTSerif-Bold', 'serif'],
		 'PTSerif-BoldItalic': ['PTSerif-BoldItalic', 'serif'],
		 'PTSerif-Italic': ['PTSerif-Italic', 'serif'],
		 'PTSerif-Regular': ['PTSerif-Regular', 'serif'],
		 'Rye-Regular': ['Rye-Regular', 'cursive'],
		 'Sansita-Italic': ['Sansita-Italic', 'sans-serif'],
		 'Sansita-Regular': ['Sansita-Regular', 'sans-serif'],
		  'Sixtyfour-Regular-VariableFont': ['Sixtyfour-Regular-VariableFont', 'cursive'],
		  'Sixtyfour-Regular': ['Sixtyfour-Regular', 'cursive'],
		  'Yellowtail-Regular': ['Yellowtail-Regular', 'cursive'],
		
		
		},
		  screens: {
			
		     
			  
			widescreen: { 'raw': '(min-aspect-ratio: 3/2)' },
			tallscreen: { 'raw': '(max-aspect-ratio: 13/20)' },
			 xxs: '320px',
			 xs: '420px',
			 sm: '640px',
			 md: '768px',
			 lg: '1024px',
			 xl: '1280px',
			 xxl: '1536px',
			 xxxl: '1920px',

		  },
		  

  		colors: {
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
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  

};	

