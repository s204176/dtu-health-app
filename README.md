# DTU Health Resources App

A mobile-optimized web application that showcases all available health and wellbeing resources at the Technical University of Denmark (DTU).

## Features

### Core Features

- **Home Screen**: Clean, organized list of all health resources with category filtering
- **Resource Categories**:
  - Medical Services (Vaccination, Health Checkups)
  - Mental Health Support
  - Academic Support (Study Guidance)
  - Special Support (SPS)
  - Physical Health (DTU Fitness Center)
  - Social Activities (Clubs)

- **Detail Pages**: Complete information for each resource including:
  - Full description
  - Location on campus
  - Contact information
  - Opening hours
  - Quick action buttons (call/email)
  - External website links

- **Category Filtering**: Easy filtering by resource category on the home screen

### Design Features

- **DTU Branding**: Uses official DTU colors (red: #990000)
- **Mobile-First**: Fully responsive layout optimized for mobile devices
- **Clean UI**: Modern, accessible design with clear navigation
- **Icons**: Visual icons for each resource category
- **Smooth Navigation**: React Router for seamless page transitions

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **React Router v6**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Mobile-First Design**: Responsive layout that works on all devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd dtu-health-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
dtu-health-app/
├── src/
│   ├── data/
│   │   └── healthResources.js    # Static data for all health resources
│   ├── pages/
│   │   ├── Home.jsx               # Home page with resource list
│   │   └── ResourceDetail.jsx    # Detail page for individual resources
│   ├── App.jsx                    # Main app with routing
│   ├── index.css                  # Global styles and Tailwind
│   └── main.jsx                   # App entry point
├── public/                        # Static assets
├── index.html                     # HTML template
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js                # Vite configuration
└── package.json                  # Dependencies and scripts
```

## Available Health Resources

The app includes information about:

1. **Vaccination Services** - Health room in Ballerup
2. **Health Checkup Services** - Blood pressure, BMI, fitness tests
3. **Student Counseling** (Studenterrådgivningen)
4. **Study Guidance** (Studievejledningen)
5. **SPS Support** - Special educational support
6. **DTU Fitness Center** - Gym and fitness facilities
7. **DTU Clubs** - Sports and social activities
8. **Mental Health Resources** - 24/7 support and counseling

## Customization

### Adding New Resources

Edit `src/data/healthResources.js` to add new resources:

```javascript
{
  id: 'unique-id',
  title: 'Resource Name',
  category: 'Category Name',
  icon: '🏥',
  shortDescription: 'Brief description',
  description: 'Full description',
  location: 'Campus location',
  contact: 'Contact information',
  hours: 'Opening hours',
  link: 'https://website.com'
}
```

### Updating DTU Colors

Modify `tailwind.config.js` to update brand colors:

```javascript
colors: {
  'dtu-red': '#990000',
  'dtu-dark-red': '#660000',
  // Add more colors as needed
}
```

## Mobile Optimization

The app is fully optimized for mobile devices with:

- Responsive grid layout that adapts to screen size
- Touch-friendly buttons and navigation
- Horizontal scrolling category filter on mobile
- Mobile-first CSS approach
- Fast loading and smooth transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

To contribute to this project:

1. Make your changes
2. Test on both desktop and mobile
3. Ensure all resources display correctly
4. Submit your changes

## License

This project is for use by DTU students and staff.

## Contact

For questions about DTU health services:
- Phone: +45 45 25 25 25
- Email: info@dtu.dk
- Website: https://www.dtu.dk

## Future Enhancements

Potential features for future versions:

- Search functionality
- Bookmark favorite resources
- Map integration for campus locations
- Appointment booking system
- Push notifications for important updates
- Multi-language support (Danish/English)
- Dark mode
- Offline support with PWA
