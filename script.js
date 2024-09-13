// Add event listener to read more button
document.querySelector('.read-more').addEventListener('click', function() {
    // Get the blog post content
    var blogPostContent = document.querySelector('.blog-post-content');
    
    // Check if the content is hidden
    if (blogPostContent.classList.contains('hidden')) {
      // Show the content
      blogPostContent.classList.remove('hidden');
      this.textContent = 'Read Less';
    } else {
      // Hide the content
      blogPostContent.classList.add('hidden');
      this.textContent = 'Read More';
    }
  });
  
  // Add event listener to sidebar links
  document.querySelectorAll('.sidebar a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Prevent default link behavior
      event.preventDefault();
      
      // Get the link text
      var linkText = link.textContent;
      
      // Get the blog post titles
      var blogPostTitles = document.querySelectorAll('.blog-post h2');
      
      // Find the matching blog post title
      var matchingTitle = Array.prototype.find.call(blogPostTitles, function(title) {
        return title.textContent === linkText;
      });
      
      // If a matching title is found, scroll to the blog post
      if (matchingTitle) {
        matchingTitle.scrollIntoView();
      }
    });
  });
  
  // Add event listener to header nav links
  document.querySelectorAll('header nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Prevent default link behavior
      event.preventDefault();
      
      // Get the link text
      var linkText = link.textContent;
      
      // Get the sections
      var sections = document.querySelectorAll('main section');
      
      // Find the matching section
      var matchingSection = Array.prototype.find.call(sections, function(section) {
        return section.querySelector('h2').textContent === linkText;
      });
      
      // If a matching section is found, scroll to the section
      if (matchingSection) {
        matchingSection.scrollIntoView();
      }
    });
  });