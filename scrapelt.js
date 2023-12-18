// scrapeIt.js

const axios = require('axios');
const cheerio = require('cheerio');

// URL of the website to scrape
const url = 'https://www.scrapeit.com';

// Make an HTTP GET request to the website
axios.get(url)
  .then((response) => {
    // Load the HTML content of the page into Cheerio
    const $ = cheerio.load(response.data);

    // Example: Extracting titles of articles
    const articleTitles = [];
    $('.article-title').each((index, element) => {
      const title = $(element).text();
      articleTitles.push(title);
    });

    console.log('Article Titles:', articleTitles);
  })
  .catch((error) => {
    console.error('Error fetching the webpage:', error.message);
  });
