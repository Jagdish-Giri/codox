# 🎓 LearnHub - Digital Course Selling Platform

A modern, responsive course selling platform built with React for the **GitHub Copilot CLI Challenge**.

![LearnHub Banner](https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=300&fit=crop)

## 🚀 Features

### For Students
- **Browse Courses**: Explore 6 featured courses across different categories
- **Course Details**: View comprehensive course information, instructor details, and curriculum
- **Shopping Cart**: Add multiple courses to cart and checkout
- **Student Dashboard**: Track enrolled courses and learning progress
- **Progress Tracking**: Monitor your completion percentage for each course

### Platform Features
- ✨ Modern, responsive UI design
- 🎨 Beautiful gradient themes and animations
- 📱 Mobile-friendly interface
- 🛒 Smart shopping cart with discount calculations
- 📊 Learning analytics dashboard
- 💳 Mock enrollment system

## 🛠️ Built With GitHub Copilot CLI

This project was developed using **GitHub Copilot CLI** to enhance the development process:

### How Copilot CLI Helped:
1. **Component Generation**: Used Copilot to generate React components
   ```bash
   gh copilot "Create a React course card component with image, title, and price"
   ```

2. **Routing Setup**: Got help with React Router configuration
   ```bash
   gh copilot "Set up React Router with multiple pages"
   ```

3. **Styling Assistance**: Generated inline styles for components
   ```bash
   gh copilot "Create responsive grid layout for course cards"
   ```

4. **Bug Fixing**: Debugged issues quickly with Copilot
   ```bash
   gh copilot "Fix React useState not updating cart items"
   ```

## 🏗️ Tech Stack

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Inline CSS with modern design patterns

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── CourseCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── Cart.jsx
│   │   └── Dashboard.jsx
│   ├── data/
│   │   └── coursesData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🎯 Key Features Showcase

### 1. **Home Page**
- Display all available courses in a responsive grid
- Beautiful course cards with hover effects
- Quick add-to-cart functionality

### 2. **Course Detail Page**
- Comprehensive course information
- Instructor profiles
- What you'll learn section
- Sticky price card with enrollment options

### 3. **Shopping Cart**
- View all selected courses
- See total price and savings
- Remove courses from cart
- Quick checkout process

### 4. **Student Dashboard**
- Track enrolled courses
- View learning statistics
- Monitor course progress
- Quick access to continue learning

## 💡 Course Categories

- Web Development
- Programming (Python)
- Digital Marketing
- UI/UX Design
- Data Science & Machine Learning
- Mobile App Development

## 🎨 Design Highlights

- **Color Scheme**: Dark blue (#1a1a2e) with cyan accents (#00d4ff)
- **Typography**: Clean, modern fonts with proper hierarchy
- **Layout**: Responsive grid system that works on all devices
- **Animations**: Smooth hover effects and transitions
- **Icons**: Beautiful Lucide React icons throughout

## 🚀 GitHub Copilot CLI Usage Examples

Throughout development, GitHub Copilot CLI was used extensively:

### Component Creation
```bash
# Generated Navbar component
gh copilot "Create a sticky navbar with cart icon and badge"

# Generated CourseCard component
gh copilot "Design a course card with image, ratings, price, and CTA button"
```

### State Management
```bash
# Set up cart functionality
gh copilot "Implement add to cart functionality with React useState"

# Handle enrollment
gh copilot "Create enrollment function that moves cart items to enrolled courses"
```

### Styling
```bash
# Responsive layouts
gh copilot "Make grid layout responsive for mobile devices"

# Hover effects
gh copilot "Add smooth hover animations to cards"
```

## 📊 Platform Statistics

- **6 Featured Courses**: Across various categories
- **50,000+ Students**: Combined enrollment
- **300+ Hours**: Of learning content
- **1,600+ Lessons**: Total course material

## 🎓 Sample Courses

1. **Complete Web Development Bootcamp** - ₹4,999
2. **Python Programming Masterclass** - ₹3,999
3. **Digital Marketing Complete Course** - ₹2,999
4. **UI/UX Design Fundamentals** - ₹3,499
5. **Data Science & Machine Learning** - ₹5,999
6. **Mobile App Development** - ₹4,499

## 🔮 Future Enhancements

- [ ] Real payment gateway integration
- [ ] User authentication system
- [ ] Video player for course content
- [ ] Course reviews and ratings
- [ ] Search and filter functionality
- [ ] Wishlist feature
- [ ] Coupon code system
- [ ] Email notifications

## 👨‍💻 Developer

Built by **Jagdish** for the GitHub Copilot CLI Challenge

## 📝 License

This project is open source and available for learning purposes.

## 🙏 Acknowledgments

- **GitHub Copilot CLI** for AI-powered development assistance
- **Unsplash** for beautiful course images
- **Lucide** for amazing icon library
- **Vite** for lightning-fast build tool

---

## 🎯 Challenge Submission

This project was built as part of the **GitHub Copilot CLI Challenge** running from January 22 to February 15, 2026.

**Key Highlights:**
- ✅ Built entirely using GitHub Copilot CLI assistance
- ✅ Modern React application with routing
- ✅ Fully functional course selling platform (demo)
- ✅ Responsive design for all devices
- ✅ Clean, maintainable code structure

### How to Test:
1. Browse courses on the home page
2. Click on any course to view details
3. Add courses to cart
4. Go to cart and enroll
5. Check your enrolled courses in the dashboard

---

**Made with ❤️ and GitHub Copilot CLI**
