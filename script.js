        // Show main site
        function enterSite() {
            document.getElementById('landing').style.display = 'none';
            document.getElementById('main').style.display = 'block';
        }

        // Go back to landing
        function goBack() {
            document.getElementById('main').style.display = 'none';
            document.getElementById('landing').style.display = 'block';
        }

        // Show specific page
        function showPage(pageName) {
            enterSite();

            // Hide all pages
            var pages = document.getElementsByClassName('page');
            for (var i = 0; i < pages.length; i++) {
                pages[i].classList.remove('active');
            }

            // Show selected page
            document.getElementById(pageName).classList.add('active');

            // Load reviews if on reviews page
            if (pageName === 'reviews') {
                loadReviews();
            }
        }

        // Load reviews from API with error handling
        function loadReviews() {
            var container = document.getElementById('reviews-content');
            container.innerHTML = '<p>Loading reviews...</p>';

            fetch('https://randomuser.me/api/?results=2')
                .then(function(response) {
                    // Check if request worked
                    if (!response.ok) {
                        throw new Error('Server error: ' + response.status);
                    }
                    return response.json();
                })
                .then(function(data) {
                    // Get the two users
                    var person1 = data.results[0];
                    var person2 = data.results[1];

                    // Display reviews
                    container.innerHTML = 
                        '<div class="review-box">' +
                            '<img src="' + person1.picture.large + '" alt="' + person1.name.first + '">' +
                            '<div>' +
                                '<strong>"Love this place!"</strong><br>' +
                                '<small>- ' + person1.name.first + ' ' + person1.name.last + '</small>' +
                            '</div>' +
                        '</div>' +
                        '<div class="review-box">' +
                            '<img src="' + person2.picture.large + '" alt="' + person2.name.first + '">' +
                            '<div>' +
                                '<strong>"Amazing coffee!"</strong><br>' +
                                '<small>- ' + person2.name.first + ' ' + person2.name.last + '</small>' +
                            '</div>' +
                        '</div>';
                })
                .catch(function(error) {
                    // Show error message if something goes wrong
                    console.log('Error:', error);
                    container.innerHTML = 
                        '<div class="error-box">' +
                            '<strong>Could not load reviews</strong><br>' +
                            'Please check your internet connection and try again.' +
                        '</div>';
                });
        }