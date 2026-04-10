function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}
        function enterSite() {
            document.getElementById('landing').style.display = 'none';
            document.getElementById('main').style.display = 'block';
        }
        
        function goBack() {
            document.getElementById('main').style.display = 'none';
            document.getElementById('landing').style.display = 'flex';
        }
        
        function showPage(pageName) {
            enterSite();
            // Hide all pages
            var pages = document.getElementsByClassName('page');
            for (var i = 0; i < pages.length; i++) {
                pages[i].classList.remove('active');
            }
            // Show selected page
            document.getElementById(pageName).classList.add('active');
        }
function loadReviews() {
    fetch('https://randomuser.me/api/?results=2')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Person 1
            var p1 = data.results[0];
            document.getElementById('review1').innerHTML = 
                '<img src="' + p1.picture.large + '">' +
                '<h3>"Love this place!"</h3>' +
                '<p>- ' + p1.name.first + ' ' + p1.name.last + '</p>';
            
            // Person 2
            var p2 = data.results[1];
            document.getElementById('review2').innerHTML = 
                '<img src="' + p2.picture.large + '">' +
                '<h3>"Amazing coffee!"</h3>' +
                '<p>- ' + p2.name.first + ' ' + p2.name.last + '</p>';
        });
}
