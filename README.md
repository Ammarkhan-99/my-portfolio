# Portfolio Website

A modern, responsive portfolio website built with Python Flask. Features a dark theme with cyan accents, smooth animations, and an interactive portfolio section.

## Features

- ✨ Modern, dark-themed design with cyan accents
- 📱 Fully responsive layout
- 🎨 Smooth animations and transitions
- 💼 Interactive portfolio section with clickable project images
- 🔗 Projects open in new tabs when clicked
- 📝 Image descriptions displayed below each project
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🌟 Animated typing effect
- 📊 Skills showcase section

## Installation

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

Run the Flask application:
```bash
python app.py
```

The application will be available at `http://localhost:5000`

## Project Structure

```
portfolio/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css     # Stylesheet
│   └── js/
│       └── script.js     # JavaScript functionality
└── README.md             # This file
```

## Customization

### Adding New Projects

Edit the `portfolio_projects` list in `app.py`:

```python
portfolio_projects = [
    {
        'id': 1,
        'title': 'Your Project Title',
        'description': 'Your project description',
        'image': 'image_url_here',
        'url': 'project_url_here'
    },
    # Add more projects...
]
```

### Changing Colors

Edit the CSS variables in `static/css/style.css`:

```css
:root {
    --primary-color: #00d9ff;    /* Main accent color */
    --secondary-color: #00a8cc;  /* Secondary color */
    --bg-dark: #0a0a0a;          /* Background color */
    /* ... */
}
```

## Technologies Used

- **Backend:** Python, Flask
- **Frontend:** HTML5, CSS3, JavaScript
- **Icons:** Font Awesome

## License

This project is open source and available for personal use.

