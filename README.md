# Born to Excel PLLC - Behavioral Health Residential Facility

A comprehensive behavioral health residential facility website for youth ages 14 and under, located in Arizona, USA. The facility provides 24-hour supervised care and follows ADHS and AHCCCS standards.

## Features

### Public Website
- **Home Page**: Professional hero section, service overview, mission/vision
- **About Us**: Facility description, 24/7 care explanation, licensing compliance
- **Services**: Detailed service sections (supervision, behavioral health, medication, daily living, etc.)
- **Contact**: Contact form, emergency information, location map

### Staff Portal (Private)
- **Secure Login**: Role-based authentication (Admin, Clinical Staff, Staff)
- **Dashboard**: Comprehensive staff dashboard with alerts and quick stats
- **10 Core Internal Modules**:
  1. **Personnel Management**: Staff qualifications, training, scheduling
  2. **Admission & Intake**: Resident admissions and assessments
  3. **Behavioral Health**: Treatment plans and counseling notes
  4. **Medication Management**: Medication logs and administration tracking
  5. **Incident Reporting**: Safety incident documentation
  6. **Transportation**: Appointment trips and community outings
  7. **Daily Living Program**: Routine schedules and skill development
  8. **Medical Records**: Resident files and progress notes
  9. **Safety & Emergency**: Emergency procedures and risk management
  10. **Resident Rights & Complaints**: Rights policy and grievance tracking

## Technology Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Icons**: Font Awesome
- **Storage**: LocalStorage (for demo purposes)
- **Responsive**: Bootstrap grid system

## Project Structure

```
born-to-excel-pllc/
├── index.html                    # Public home page
├── css/
│   └── style.css                # Custom healthcare styling
├── js/
│   ├── main.js                  # General scripts and auth checks
│   ├── contact.js               # Contact form handling
│   ├── staff-auth.js            # Staff authentication
│   └── dashboard.js             # Dashboard and module functionality
├── pages/
│   ├── about.html               # About Us page
│   ├── services.html            # Services page
│   ├── contact.html             # Contact page
│   ├── staff-login.html         # Staff login/registration
│   └── dashboard.html           # Staff dashboard
└── images/                      # Image assets (placeholder)
```

## Setup Instructions

1. Clone or download the project files
2. Open `index.html` in a web browser
3. The website is ready to use!

## Demo Staff Credentials

For testing the staff portal:

**Administrator Account:**
- Email: admin@borntoexcelpllc.com
- Password: admin123
- Role: admin

**Clinical Staff Account:**
- Email: clinical@borntoexcelpllc.com
- Password: clinical123
- Role: clinical

**Staff Account:**
- Email: staff@borntoexcelpllc.com
- Password: staff123
- Role: staff

## Compliance & Standards

- **ADHS (Arizona Department of Health Services)**: Licensed behavioral health residential facility
- **AHCCCS (Arizona Health Care Cost Containment System)**: Compliant with Arizona's Medicaid standards
- **24/7 Supervision**: Round-the-clock professional care
- **Youth-Focused**: Specialized care for ages 14 and under
- **Safety Protocols**: Comprehensive emergency and safety procedures

## Key Features

### Public Website
- Professional healthcare design
- Mobile responsive
- Emergency contact information
- Service transparency
- Compliance information

### Staff Portal
- Secure role-based access
- Comprehensive dashboard
- Modular system for all facility operations
- Data storage and retrieval
- Alert and notification system

## Notes

- This is a frontend-only implementation using localStorage for data persistence
- In a production environment, backend services would be required for:
  - Secure user authentication and authorization
  - Database storage for resident and staff data
  - HIPAA-compliant medical records
  - Email notifications and alerts
  - Real-time communication systems
  - Backup and disaster recovery
- Image placeholders are referenced but not included in the repository
- All forms store data locally for demonstration purposes

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

This is a demo project for a behavioral health residential facility. For production use, consider implementing:

- Backend API (Node.js, Python/Django, etc.)
- Secure database (PostgreSQL, MySQL, etc.)
- HIPAA-compliant hosting
- SSL encryption
- Regular security audits
- Staff training modules
- Integration with EHR systems
- Real-time monitoring systems

## Features

### Public Pages
- **Home Page**: Hero section with caring message, testimonials, FAQ
- **About Us**: Clinic mission, vision, and values
- **Services**: List of medical services with icons
- **Doctors & Staff**: Profiles with roles
- **Appointment Booking**: Form for scheduling appointments
- **Contact**: Contact information, form, and Google Map

### Member Area (Private)
- **Login/Registration**: Secure authentication for patients and staff
- **Dashboard**: Personalized dashboard for logged-in users
- **Patient Notes**: Staff can record and manage patient notes
- **Role-based Access**: Restricted features based on user role

### Design & Functionality
- Clean, professional medical/healthcare design
- White and soft blue/green color scheme
- Mobile responsive
- WhatsApp contact integration
- Appointment booking system
- Basic authentication system

## Technology Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Icons**: Font Awesome
- **Storage**: LocalStorage (for demo purposes)
- **Responsive**: Bootstrap grid system

## Project Structure

```
born-to-excel-clinic/
├── index.html              # Home page
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── main.js            # General scripts
│   ├── appointment.js     # Appointment booking
│   ├── contact.js         # Contact form
│   ├── auth.js            # Authentication
│   └── dashboard.js       # Dashboard functionality
├── pages/
│   ├── about.html         # About Us page
│   ├── services.html      # Services page
│   ├── doctors.html       # Doctors & Staff page
│   ├── appointment.html   # Appointment booking
│   ├── contact.html       # Contact page
│   ├── login.html         # Login/Registration
│   └── dashboard.html     # Member dashboard
└── images/                # Image assets (placeholder)
```

## Setup Instructions

1. Clone or download the project files
2. Open `index.html` in a web browser
3. The website is ready to use!

## Demo Credentials

For testing the member area:

**Patient Account:**
- Email: patient@example.com
- Password: password123
- Role: Patient

**Staff Account:**
- Email: staff@example.com
- Password: password123
- Role: Staff

## Notes

- This is a frontend-only implementation using localStorage for data persistence
- In a production environment, backend services would be required for:
  - Secure user authentication
  - Database storage
  - Email notifications
  - Appointment management
- Image placeholders are referenced but not included in the repository

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

This is a demo project. For production use, consider implementing:
- Backend API (Node.js, PHP, etc.)
- Database (MySQL, MongoDB, etc.)
- Secure authentication (JWT, sessions)
- Email service integration
- Real image assets