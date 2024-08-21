import React, { useState } from 'react';

// Sample articles array
const articles = [
  {
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    content: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template and grid-auto properties..."
},
  {
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Nov 12, 2019",
    content: "Learn how to use CSS Grid Layout to recreate the GitHub Contribution Graph from scratch..."
  },
  {
    title: "CSS Flexbox vs Grid: Which One Should You Use?",
    date: "Mar 15, 2020",
    content: "Both CSS Flexbox and Grid offer powerful layout tools. But how do you choose which one to use in your project? This article breaks down the strengths and weaknesses of each..."
  },
  {
    title: "Responsive Design with CSS Grid",
    date: "Apr 08, 2021",
    content: "Creating responsive layouts with CSS Grid is simpler than ever. This guide will walk you through creating a layout that adapts seamlessly to different screen sizes..."
  },
  {
    title: "How to Center Elements with CSS Grid",
    date: "Jul 23, 2020",
    content: "Centering elements vertically and horizontally in CSS Grid can be a bit tricky. This article shows different methods to achieve perfect centering in your grid layout..."
  },
  {
    title: "A Complete Guide to CSS Grid Areas",
    date: "Feb 10, 2021",
    content: "CSS Grid Areas allow you to name parts of your grid and refer to them by name in your layout. This guide will show you how to define and use grid areas effectively..."
  },
  {
    title: "Building Complex Layouts with CSS Grid",
    date: "May 30, 2020",
    content: "Learn how to build complex, multi-dimensional layouts using CSS Grid. This tutorial covers advanced techniques and best practices..."
  },
  {
    title: "CSS Grid vs Bootstrap: A Detailed Comparison",
    date: "Jan 12, 2022",
    content: "Bootstrap is a popular framework for responsive design, but how does it compare to CSS Grid? This article examines the pros and cons of using each..."
  },
  {
    title: "Animating with CSS Grid",
    date: "Sep 15, 2021",
    content: "Did you know that you can animate elements within a CSS Grid layout? This article explores the possibilities of creating dynamic, animated grid layouts..."
  },
  {
    title: "Creating Asymmetrical Layouts with CSS Grid",
    date: "Dec 19, 2020",
    content: "Asymmetrical layouts can add visual interest to your designs. Learn how to create unique and engaging layouts using CSS Grid's flexible structure..."
  },
  {
    title: "CSS Grid and Accessibility: Best Practices",
    date: "Jun 11, 2021",
    content: "Ensuring that your CSS Grid layouts are accessible to all users is crucial. This guide covers best practices for making your grids work for everyone, including screen readers..."
  },
  {
    title: "Combining CSS Grid with Flexbox for Ultimate Control",
    date: "Aug 28, 2021",
    content: "Flexbox and Grid don't have to be mutually exclusive. Discover how to combine these two powerful layout tools to create more complex and responsive designs..."
  }
];

// Main functional component of the app
const App = () => {
  // useState hook to manage the search term state
  const [searchTerm, setSearchTerm] = useState('');

  // Filter articles based on the search term
  // Filters articles whose title or content contains the search term (case insensitive)
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to highlight the search term in the article's title or content
  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    // Splits the text by the search term and wraps the matching parts in a span with a yellow background
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  // Function to clear the search input
  const handleClearSearch = () => {
    setSearchTerm(''); // Resets the search term to an empty string
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Search</h2>
      <div style={{ position: 'relative' }}>
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '1000px',
            fontSize: '16px',
            borderRadius: 10,
            paddingRight: '30px' // Adds padding to accommodate the clear button
          }}
        />
        {/* Clear search button, shown only if there is a search term */}
        {searchTerm !== '' && (
          <button
            style={{
              position: 'relative', // Positioning button on top of the input field
              top: 0,
              right: 0,
              height: '100%',
              padding: '10px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={handleClearSearch}
          >
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>&times;</span> {/* '×' symbol as a clear button */}
          </button>
        )}
      </div>
      {/* Displays the number of articles found */}
      <p><b>{filteredArticles.length} posts </b> were found.</p>
      <div>
        {/* Renders each filtered article */}
        {filteredArticles.map((article, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{highlightText(article.title, searchTerm)}</h3>
            <p><i>{article.date}</i></p>
            <p>{highlightText(article.content, searchTerm)}</p>
            {index < filteredArticles.length - 1 && <hr style={{ margin: '20px 0' }} />} {/* Adds a horizontal line between articles */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;