'use strict';

const form = document.querySelector('#search-form');
const resultsContainer = document.querySelector('#results');

// Add event listener to the form
form.addEventListener('submit', async function(evt) {
    // 1. Stop the form from reloading the page
    evt.preventDefault();

    // 2. Get the value from the input field
    const query = document.querySelector('#query').value;

    try {
        // 3. Send request to TVMaze API
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();

        // Log to console (Required for Task 2)
        console.log(jsonData);

        // 4. Clear old results
        resultsContainer.innerHTML = '';

        // 5. Loop through each show in the results
        for (const item of jsonData) {
            const show = item.show;

            // Create <article> element
            const article = document.createElement('article');

            // --- Name (h2) ---
            const h2 = document.createElement('h2');
            h2.textContent = show.name;
            article.appendChild(h2);

            // --- Link (a) ---
            const link = document.createElement('a');
            link.href = show.url;
            link.textContent = 'Go to details';
            link.target = "_blank"; // Open in new tab
            article.appendChild(link);

            // Add a line break for spacing
            article.appendChild(document.createElement('br'));

            // --- Image (img) ---
            const img = document.createElement('img');
            // Use ternary operator to handle missing images (Task 4 style robustness)
            img.src = show.image?.medium ? show.image.medium : 'https://placehold.co/210x295?text=Not+Found';
            img.alt = show.name;
            article.appendChild(img);

            // --- Summary (div) ---
            const summaryDiv = document.createElement('div');
            // The API returns summary with HTML tags (<p>, <b>), so we use innerHTML
            summaryDiv.innerHTML = show.summary;
            article.appendChild(summaryDiv);

            // Append the finished article to the results container
            resultsContainer.appendChild(article);
        }

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
});