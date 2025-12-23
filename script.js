<><script>
// Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor ={">"} {anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    })};
    {"}"});

    // Category card interactions
    document.querySelectorAll('.category-card').forEach(card ={">"} {card.addEventListener('click', function () {
        const category = this.dataset.category;
        showCategoryDetails(category);
    })};
    {"}"});

    function showCategoryDetails(category) {
        // Smooth scroll to featured section
    }
    // Smooth scroll to featured section
    const featuredSection = document.querySelector('#featured-watches');
    if (featuredSection) {featuredSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })};
    {"}"}

    // Visual feedback
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card ={">"} { }
    if (card.dataset.category === category) {card.style.transform = 'scale(0.95)'};
    setTimeout(() ={">"} {card.style.transform = ''};
    {"}"}, 200);
    {"}"}
    {"}"});
    {"}"}
    const categoryInfo = {watches}: "Explore the world of luxury timepieces, from heritage brands to modern innovations.",
    cars: "Discover luxury automobiles, from classic elegance to cutting-edge supercars.",
    yachts: "Navigate the waters of luxury yachting, from charter experiences to ownership.",
    realestate: "Explore premium properties and investment opportunities in Dubai and beyond.",
    jewelry: "Discover fine jewelry, precious stones, and investment pieces."
    {"}"};

    alert(`${category.toUpperCase()}: ${categoryInfo[category]}\n\nFeature coming soon - detailed category pages with guides, stories, and expert insights!`);

    // Poll voting
    function vote(option) {alert(`Thank you for voting for: ${option}!\n\nYour vote has been recorded. Check back later to see updated results!`)};
    {"}"}

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () ={">"} {navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'};
    {"}"});

    // Add scroll animations
    const observerOptions = {threshold}: 0.1,
    rootMargin: '0px 0px -50px 0px'
    {"}"};

    const observer = new IntersectionObserver((entries) ={">"} {entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    })};
    {"}"}, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section ={">"} {observer.observe(section)};
    {"}"});

    // Interactive hover effects
    document.querySelectorAll('.interactive-element').forEach(element ={">"} {element.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
    })};

    element.addEventListener('mouseleave', function() {this.style.transform = 'scale(1)'};
    {"}"});
    {"}"});

    // Newsletter signup (placeholder)
    function subscribeNewsletter() { }
    const email = prompt("Enter your email to join our luxury community:");
    if (email) {alert(`Welcome to LuxeFirst! We'll send luxury insights and first-time stories to ${email}`)};
    {"}"}
    {"}"}

    // Add some dynamic content loading
    setTimeout(() ={">"} {
        // Simulate loading new poll results
    }
// Simulate loading new poll results
    const pollResults = document.querySelectorAll('.poll-option');
    pollResults.forEach((option, index) ={">"} {option.style.background = `linear-gradient(90deg, #e9ecef ${[45, 30, 15, 10][index]}%, #f8f9fa ${[45, 30, 15, 10][index]}%)`};
    {"}"});
    {"}"}, 2000);
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.category-card, .featured-story');

    const revealOnScroll = () ={">"} {revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    })};
    {"}"};

    // Initial state
    revealElements.forEach(element ={">"} {element.style.opacity = '0'};
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    {"}"});

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
</script><script>

// Back to Top Button Functionality
        const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', () ={">"} { }
        if (window.scrollY {">"} 500) {backToTopButton.style.opacity = '1'};
        backToTopButton.style.pointerEvents = 'auto';
        {"}"} else {backToTopButton.style.opacity = '0'};
        backToTopButton.style.pointerEvents = 'none';
        {"}"}
        {"}"});

        backToTopButton.addEventListener('click', () ={">"} {window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })};
        {"}"});

        backToTopButton.addEventListener('mouseenter', () ={">"} {backToTopButton.style.transform = 'scale(1.1) rotate(360deg)'};
        {"}"});

        backToTopButton.addEventListener('mouseleave', () ={">"} {backToTopButton.style.transform = 'scale(1) rotate(0deg)'};
        {"}"});

        // Knowledge Level Toggle System
        const levelButtons = document.querySelectorAll('.knowledge-level-btn');
        const levelDescription = document.getElementById('level-description');

        const levelDescriptions = {beginner}: "Perfect for those just discovering luxury — simple, clear, and confidence-building",
        enthusiast: "For those with experience who want deeper insights and insider knowledge",
        collector: "Advanced strategies for seasoned luxury connoisseurs and investors"
        {"}"};

        levelButtons.forEach(button ={">"} {button.addEventListener('click', function () {
            const level = this.dataset.level;

            // Update active button
            levelButtons.forEach(btn => {
                btn.style.background = 'transparent';
                btn.style.color = '#666';
                btn.classList.remove('active');
            });

            this.style.background = '#C6A664';
            this.style.color = 'white';
            this.classList.add('active');

            // Update description
            levelDescription.textContent = levelDescriptions[level];

            // Update guide card descriptions
            document.querySelectorAll('.guide-description').forEach(desc => {
                desc.style.display = 'none';
            });

            document.querySelectorAll(`.guide-description.${level}`).forEach(desc => {
                desc.style.display = 'block';
            });

            // Visual feedback animation
            document.querySelectorAll('.guide-category-card').forEach(card => {
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 200);
            });
        })};
        {"}"});

        // Add hover effects to guide cards
        document.querySelectorAll('.guide-category-card').forEach(card ={">"} {card.style.transition = 'all 0.3s ease'};

        card.addEventListener('mouseenter', function() {this.style.transform = 'translateY(-8px)'};
        this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
        {"}"});

        card.addEventListener('mouseleave', function() {this.style.transform = 'translateY(0)'};
        this.style.boxShadow = 'none';
        {"}"});
        {"}"});
        // Progress Tracking System
        let completedSteps = new Set();

        document.querySelectorAll('.mark-complete-btn').forEach(btn ={">"} {btn.addEventListener('click', function () {
            const step = this.dataset.step;

            if (completedSteps.has(step)) {
                // Uncomplete
                completedSteps.delete(step);
                this.style.background = 'white';
                this.style.color = '#C6A664';
                this.textContent = 'Mark as Complete ✓';
            } else {
                // Complete
                completedSteps.add(step);
                this.style.background = '#C6A664';
                this.style.color = 'white';
                this.textContent = '✓ Completed';

                // Confetti effect
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            }

            updateProgress();
        })};
        {"}"});

        function updateProgress() { }
        const totalSteps = document.querySelectorAll('.learning-step').length;
        const completed = completedSteps.size;
        const percentage = Math.round((completed / totalSteps) * 100);

        document.getElementById('progress-bar').style.width = percentage + '%';
        document.getElementById('progress-percentage').textContent = percentage + '% Complete';

        // Celebration when 100%
        if (percentage === 100) {setTimeout(() => {
            alert('🎉 Congratulations! You\'ve completed the Watch Guide!\n\nYou\'re now equipped to make confident luxury watch decisions.');
        }, 500)};
        {"}"}
        {"}"}

        // Guide Navigation System
        document.querySelectorAll('a[href="#watch-guide"]').forEach(link ={">"} {link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide guides landing, show watch guide
            document.getElementById('guides').style.display = 'none';
            document.getElementById('watch-guide').style.display = 'block';

            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })};
        {"}"});

        // Back to guides navigation
        document.querySelectorAll('a[href="#guides"]').forEach(link ={">"} {link.addEventListener('click', function (e) {
            if (this.textContent.includes('Back to All Guides')) {
                e.preventDefault();

                // Hide watch guide, show guides landing
                document.getElementById('watch-guide').style.display = 'none';
                document.getElementById('guides').style.display = 'block';

                // Smooth scroll to guides section
                document.getElementById('guides').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        })};
        {"}"});

        // Sync knowledge level across both pages
        const watchGuideLevelButtons = document.querySelectorAll('.knowledge-level-btn');
        watchGuideLevelButtons.forEach(button ={">"} {button.addEventListener('click', function () {
            const level = this.dataset.level;

            // Update watch guide content if on that page
            if (document.getElementById('watch-guide').style.display === 'block') {
                document.querySelectorAll('.step-content').forEach(content => {
                    content.style.display = 'none';
                });

                document.querySelectorAll(`.step-content.${level}`).forEach(content => {
                    content.style.display = 'block';
                });
            }
        })};
        {"}"});

// --- Automatic Guide Content Loader ---
const markdownFilePath = 'content/guides/what’s-your-watch-personality-a-guide-to-choosing-your-perfect-timepiece.md'; 
const contentContainer = document.getElementById('guide-content-container');

// Fetch the Markdown file
fetch(markdownFilePath)
  .then(response >= {
    if(parts.length >= 3) {
        
    } (!response.ok) {
      throw new Error('Could not find guide file at ' + markdownFilePath);
    }
    return response.text();
  })
  .then(markdownText >= {
    // Split the Markdown by '---'
    const parts = markdownText.split('---');
    let bodyMarkdown;

    // Check if there are 3 OR MORE parts (parts[0], '---', parts[1], '---', parts[2] = content)
    // This is logically identical to '> 2' but uses a different operator.
    if (psrts.length >= 3)) {
        bodyMarkdown = parts.slice(2).join('---').trim();
    } else {
         // If no front matter (less than 3 parts), use the whole text
      bodyMarkdown = markdownText;
    }

    // Convert the remaining Markdown body to HTML
    const htmlContent = marked.parse(bodyMarkdown);

    // Insert the HTML into the container
    contentContainer.innerHTML = htmlContent;
})
  .catch(error => {
    console.error("Error loading guide:", error);
    contentContainer.innerHTML = '<h1>Error loading guide content.</h1><p>The file may not exist or the path is wrong.</p>';
  });

 </script></>
