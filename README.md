# Salman Ali - Game Developer Portfolio

A modern, responsive portfolio website showcasing my game development work and experience.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Project showcase section
- Contact form
- Social media integration
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (Vanilla)
- Font Awesome for icons

## Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser to view the website locally.

## Customization

### Adding Projects

Edit the `projects` array in `js/main.js` to add your own projects:

```javascript
const projects = [
    {
        title: "Your Project Title",
        description: "Project description goes here",
        image: "path/to/your/image.jpg",
        tags: ["Tag1", "Tag2", "Tag3"],
        link: "https://your-project-link.com"
    },
    // Add more projects...
];
```

### Modifying Styles

The main styles are defined in `css/style.css`. The color scheme can be modified by changing the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #2a2a72;
    --secondary-color: #009ffd;
    --text-color: #333;
    --light-bg: #f5f5f5;
    --dark-bg: #1a1a1a;
}
```

## Deployment on GitHub Pages

1. Go to your repository settings on GitHub
2. Scroll down to the GitHub Pages section
3. Select the `main` branch as the source
4. Your site will be published at `https://yourusername.github.io/portfolio`

## Contact Form

The contact form currently uses a simple alert for demonstration. To make it functional:

1. Add your email handling logic in the form submission event listener in `js/main.js`
2. Consider using services like FormSpree or Netlify Forms for easy form handling

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Salman Ali - Game Developer

## Acknowledgments

- Font Awesome for icons
- Placeholder images from placeholder.com 