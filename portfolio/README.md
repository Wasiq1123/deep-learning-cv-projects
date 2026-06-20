# Portfolio Website for China University Admission

This is a modern, interactive portfolio website designed specifically for students seeking admission to Chinese universities.

## Features

### 🎨 **Interactive Design**
- Smooth scroll animations
- Hover effects on cards and buttons
- Animated statistics counter
- Progress bars for skills
- Particle effects on hero section
- Floating elements with parallax effect

### 📱 **Fully Responsive**
- Mobile-first design
- Hamburger menu for mobile devices
- Optimized for all screen sizes
- Touch-friendly interactions

### 🎯 **Sections Included**
1. **Hero Section** - Eye-catching introduction with animated elements
2. **About Me** - Personal information and goals
3. **Education** - Timeline of academic background
4. **Projects** - Filterable project showcase
5. **Skills** - Technical and soft skills with progress bars
6. **Languages** - Language proficiency display
7. **Achievements** - Awards and recognition
8. **Contact** - Contact form and social links

### ✨ **Interactive Elements**
- Project filtering (All, Research, Technical, Academic)
- Scroll-triggered animations
- Active navigation highlighting
- Back-to-top button
- Form validation
- Counter animations for statistics
- Skill bar animations

## How to Use

### 1. Customize Your Information

Open `index.html` and replace the placeholder text with your actual information:

- **Name**: Replace "Your Name" in the hero section
- **Field**: Replace "[Your Field]" with your area of study
- **Education**: Update all education details
- **Projects**: Add your actual projects with descriptions
- **Skills**: Adjust skill percentages
- **Languages**: Update language proficiencies
- **Achievements**: List your real awards and accomplishments
- **Contact**: Add your actual contact information

### 2. Add Your Photo

Replace the profile placeholder icon with your actual photo:

```html
<!-- In index.html, find the profile-placeholder div -->
<div class="profile-placeholder">
    <img src="your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

### 3. Update Social Links

Find all `href="#"` attributes and replace with your actual profiles:
- LinkedIn
- GitHub
- Twitter
- Email
- ResearchGate

### 4. Customize Colors (Optional)

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #e74c3c;    /* Main accent color */
    --secondary-color: #3498db;  /* Secondary color */
    --accent-color: #f39c12;     /* Highlight color */
    --dark-color: #2c3e50;       /* Dark text */
    --light-color: #ecf0f1;      /* Light backgrounds */
}
```

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Running Locally

### Option 1: Direct Opening
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
Using Python:
```bash
cd /workspace/portfolio
python -m http.server 8000
```

Then visit: `http://localhost:8000`

Using Node.js (if available):
```bash
npx serve
```

## Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch and save
5. Your site will be live at `https://username.github.io/repo-name`

### Netlify (Free)
1. Drag and drop the portfolio folder to Netlify
2. Instant deployment with free SSL

### Vercel (Free)
1. Install Vercel CLI
2. Run `vercel` in the portfolio directory
3. Follow prompts to deploy

## Tips for China University Admission

### Content Recommendations:

1. **Highlight Academic Excellence**
   - GPA and rankings
   - Relevant coursework
   - Academic awards

2. **Showcase Research Experience**
   - Research projects
   - Publications
   - Presentations

3. **Demonstrate Cultural Interest**
   - Mention why China
   - Language learning efforts
   - Cultural activities

4. **Include Technical Skills**
   - Programming languages
   - Software proficiency
   - Certifications

5. **Professional Presentation**
   - Use a professional photo
   - Proofread all content
   - Keep design clean and organized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization Ideas

- Add a blog section for articles
- Include video introductions
- Add testimonials from professors
- Create a downloadable CV section
- Add a timeline for future goals
- Include Chinese language version

## License

This template is free to use and modify for your personal portfolio.

## Support

If you need help customizing this portfolio:
- Check the comments in the code
- Modify CSS variables for easy theming
- Edit HTML content directly
- Add new sections following existing patterns

---

**Good luck with your university admission applications! 🎓🇨🇳**
