    // React Components
        const PlacementStats = () => {
            const [stats, setStats] = React.useState({
                totalPlacements: 0,
                companiesVisited: 0,
                placementRate: 0,
                highestPackage: 0
            });

            React.useEffect(() => {
                // Animate counters
                const animateCounter = (target, key, max) => {
                    let current = 0;
                    const increment = max / 100;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= max) {
                            current = max;
                            clearInterval(timer);
                        }
                        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
                    }, 20);
                };

                animateCounter(15000, 'totalPlacements', 15000);
                animateCounter(500, 'companiesVisited', 500);
                animateCounter(95, 'placementRate', 95);
                animateCounter(50, 'highestPackage', 50);
            }, []);

            return (
                <div className="react-stats">
                    <div className="react-stat-item">
                        <h3>{stats.totalPlacements.toLocaleString()}+</h3>
                        <p>Students Placed</p>
                    </div>
                    <div className="react-stat-item">
                        <h3>{stats.companiesVisited}+</h3>
                        <p>Companies</p>
                    </div>
                    <div className="react-stat-item">
                        <h3>{stats.placementRate}%</h3>
                        <p>Placement Rate</p>
                    </div>
                    <div className="react-stat-item">
                        <h3>₹{stats.highestPackage} LPA</h3>
                        <p>Highest Package</p>
                    </div>
                </div>
            );
        };

        const NewsUpdates = () => {
            const [news, setNews] = React.useState([
                {
                    id: 1,
                    title: "Microsoft Campus Drive 2024",
                    date: "2024-01-15",
                    description: "Microsoft will be conducting on-campus recruitment for Software Engineering roles."
                },
                {
                    id: 2,
                    title: "Google Summer Internship Program",
                    date: "2024-01-10",
                    description: "Applications open for Google Summer Internship Program 2024."
                },
                {
                    id: 3,
                    title: "TCS Digital Campus Hiring",
                    date: "2024-01-05",
                    description: "TCS Digital is hiring for multiple technical positions across various domains."
                }
            ]);

            return (
                <div className="news-updates">
                    <h3>Latest Updates</h3>
                    {news.map(item => (
                        <div key={item.id} className="news-item">
                            <h4>{item.title}</h4>
                            <p className="news-date">{item.date}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            );
        };

        // Don't render React components as they're embedded examples
        // ReactDOM.render(<PlacementStats />, document.getElementById('reactApp'));
 
 
        // Vanilla JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');

            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                    navMenu.classList.remove('active');
                });
            });

            // Scroll indicator
            window.addEventListener('scroll', function() {
                const scrollIndicator = document.getElementById('scrollIndicator');
                const scrollTop = window.pageYOffset;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = (scrollTop / documentHeight) * 100;
                scrollIndicator.style.width = scrollPercentage + '%';
            });

            // Form submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                // Simulate form submission
                alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email}.`);
                contactForm.reset();
            });

            // Animate elements on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all cards for animation
            document.querySelectorAll('.stat-card, .feature-card, .company-logo').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });

            // Dynamic typing effect for hero section
            const heroTitle = document.querySelector('.hero h2');
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            setTimeout(typeWriter, 1000);

            // Counter animation for statistics
            const animateCounters = () => {
                const counters = document.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
                    let current = 0;
                    const increment = target / 100;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        
                        // Format the number based on original text
                        const originalText = counter.textContent;
                        if (originalText.includes('₹')) {
                            counter.textContent = '₹' + Math.floor(current) + ' LPA';
                        } else if (originalText.includes('%')) {
                            counter.textContent = Math.floor(current) + '%';
                        } else if (originalText.includes('+')) {
                            counter.textContent = Math.floor(current).toLocaleString() + '+';
                        } else {
                            counter.textContent = Math.floor(current).toLocaleString();
                        }
                    }, 20);
                });
            };

            // Trigger counter animation when stats section is visible
            const statsSection = document.querySelector('.stats');
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            statsObserver.observe(statsSection);

            // Add loading animation
            window.addEventListener('load', function() {
                document.body.style.opacity = '1';
                document.body.style.transition = 'opacity 0.5s ease';
            });

            // Parallax effect for hero section
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                if (hero) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });
        });


        // Modal Functions
        function openModal() {
            document.getElementById('authModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('authModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function switchTab(tabName) {
            // Remove active class from all tabs
            document.querySelectorAll('.form-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.form-content').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to selected tab
            event.target.classList.add('active');
            document.getElementById(tabName + 'Form').classList.add('active');
        }

        function selectApplicantType(type) {
            // Remove selected class from all applicant types
            document.querySelectorAll('.applicant-type').forEach(applicant => {
                applicant.classList.remove('selected');
            });

            // Add selected class to clicked type
            event.target.classList.add('selected');
            document.getElementById('applicantType').value = type;

            // Show/hide specific fields
            const indianFields = document.getElementById('indianFields');
            const internationalFields = document.getElementById('internationalFields');
            const indianSpecificInputs = indianFields.querySelectorAll('input, select');
            const internationalSpecificInputs = internationalFields.querySelectorAll('input, select');

            if (type === 'indian') {
                indianFields.style.display = 'block';
                internationalFields.style.display = 'none';
                // Make Indian fields required
                indianSpecificInputs.forEach(input => {
                    if (input.id === 'class10Marks' || input.id === 'class12Marks') {
                        input.setAttribute('required', 'required');
                    }
                });
                // Remove required from international fields
                internationalSpecificInputs.forEach(input => {
                    if (input.id === 'passportNumber' || input.id === 'nationality') {
                        input.removeAttribute('required');
                    }
                });
            } else {
                indianFields.style.display = 'none';
                internationalFields.style.display = 'block';
                // Make international fields required
                internationalSpecificInputs.forEach(input => {
                    if (input.id === 'passportNumber' || input.id === 'nationality') {
                        input.setAttribute('required', 'required');
                    }
                });
                // Remove required from Indian fields
                indianSpecificInputs.forEach(input => {
                    input.removeAttribute('required');
                });
            }
        }

        function handleLogin(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const email = formData.get('loginEmail');
            const password = formData.get('loginPassword');

            // Simulate login process
            showNotification('Login successful! Welcome back.', 'success');
            closeModal();
            
            // Here you would typically send the data to your backend
            console.log('Login attempt:', { email, password });
        }

        function handleRegister(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            // Validate password confirmation
            const password = formData.get('password');
            const confirmPassword = formData.get('confirmPassword');
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match!', 'error');
                return;
            }

            // Collect all form data
            const registrationData = {
                applicantType: formData.get('applicantType'),
                personalInfo: {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    dob: formData.get('dob'),
                    gender: formData.get('gender')
                },
                address: {
                    address: formData.get('address'),
                    city: formData.get('city'),
                    state: formData.get('state'),
                    country: formData.get('country'),
                    pincode: formData.get('pincode')
                },
                education: {
                    course: formData.get('course'),
                    specialization: formData.get('specialization'),
                    yearOfStudy: formData.get('yearOfStudy'),
                    cgpa: formData.get('cgpa'),
                    expectedGraduation: formData.get('expectedGraduation')
                },
                documents: formData.get('documents')
            };

            // Add type-specific data
            if (formData.get('applicantType') === 'indian') {
                registrationData.indianSpecific = {
                    aadhar: formData.get('aadhar'),
                    class10Marks: formData.get('class10Marks'),
                    class12Marks: formData.get('class12Marks'),
                    jeeRank: formData.get('jeeRank'),
                    category: formData.get('category')
                };
            } else {
                registrationData.internationalSpecific = {
                    passportNumber: formData.get('passportNumber'),
                    nationality: formData.get('nationality'),
                    visaStatus: formData.get('visaStatus'),
                    englishProficiency: formData.get('englishProficiency'),
                    testScore: formData.get('testScore'),
                    previousEducation: formData.get('previousEducation')
                };
            }

            // Simulate registration process
            showNotification('Registration successful! Please check your email for verification.', 'success');
            closeModal();
            
            // Here you would typically send the data to your backend
            console.log('Registration data:', registrationData);
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('authModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Additional utility functions
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 2rem;
                background: ${type === 'success' ? '#4CAF50' : '#f44336'};
                color: white;
                border-radius: 5px;
                z-index: 1002;
                animation: slideIn 0.5s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Add CSS for notifications
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            body {
                opacity: 0;
            }
        `;
        document.head.appendChild(style);