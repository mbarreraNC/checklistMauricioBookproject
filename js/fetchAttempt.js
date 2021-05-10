//console.log('https://api.nytimes.com/svc/books/v3/reviews.json');
fetch('https://api.nytimes.com/svc/books/v3/reviews.json')
.then(res => console.log(res))
