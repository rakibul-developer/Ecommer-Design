# Tailwind CSS Filter Components - A responsive and customizable filtering system for web applications

This project provides a modern, responsive filtering system built with Tailwind CSS and jQuery. It features a mobile-first design with smooth animations, collapsible sections, and customizable filter options including price ranges, availability status, gender, color, and size selectors.

The filtering system offers an intuitive user interface with dual-range sliders, dropdown menus, and search functionality. It's designed to work seamlessly across different screen sizes with a special focus on mobile responsiveness. The project uses Tailwind CSS for styling, ensuring consistent design patterns and easy customization.

## Repository Structure
```
.
├── dist/                      # Distribution directory containing compiled files
│   ├── filter-components.html # Filter component implementation with gender/color/size options
│   ├── index.html            # Main entry point with navigation implementation
│   ├── tailwind.css         # Compiled Tailwind CSS styles
│   └── test.html            # Price filter implementation with range slider
├── src/                      # Source directory
│   ├── input.css            # Custom CSS styles for components
│   └── script.js            # jQuery implementation of filter functionality
├── package.json             # Project configuration and dependencies
└── tailwind.config.js       # Tailwind CSS configuration
```

## Usage Instructions
### Prerequisites
- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)
- Web browser with JavaScript enabled
- jQuery 3.6.0 or later

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Quick Start
1. Include the required files in your HTML:
```html
<link href="./dist/tailwind.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="./src/script.js"></script>
```

2. Add the filter component markup:
```html
<button id="filterOpen" class="site_filter-open">
  <span>FILTER</span>
</button>
<div class="site_filter">
  <!-- Filter content -->
</div>
```

### More Detailed Examples
1. Price Range Filter:
```html
<div class="slider">
  <div class="progress"></div>
  <div class="range-input">
    <input type="range" id="minRange" min="0" max="1000" value="0" step="10">
    <input type="range" id="maxRange" min="0" max="1000" value="1000" step="10">
  </div>
</div>
```

2. Availability Filter:
```html
<div id="availability-menu" class="custom-collapse closed">
  <div class="p-4">
    <label class="flex items-center">
      <input type="checkbox" id="onlineExclusive">
      Online Exclusive
    </label>
  </div>
</div>
```

### Troubleshooting
1. Filter not appearing on mobile:
- Check if jQuery is properly loaded
- Verify z-index values in CSS
- Ensure mobile viewport meta tag is present:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. Range slider not updating:
- Check browser console for JavaScript errors
- Verify jQuery event handlers are properly bound
- Ensure input elements have correct IDs

## Data Flow
The filter system processes user interactions and updates the UI accordingly through a series of event handlers and state management.

```ascii
User Input → Event Handlers → State Update → UI Update
[Filter Button] → [jQuery Events] → [Filter State] → [Visual Feedback]
     ↓               ↓                ↓              ↓
  Triggers     Handles Events    Updates Data    Updates DOM
```

Component interactions:
- Filter buttons trigger show/hide animations
- Range inputs update price display in real-time
- Checkbox changes update selected options display
- Search input filters available options
- Reset/Apply buttons manage filter state
- Mobile-specific handlers manage responsive behavior
- State management handles filter combinations