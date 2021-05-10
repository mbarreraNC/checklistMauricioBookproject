// read my input from the html file
const url = 'https://api.nytimes.com/svc/books/v3/reviews.json';
const apiKey = '3Gad9aIdbBiDllj9q79nJcIeACZuTAT5';

function execute() {

  jsonObj = [];
  item = {};

  //bookResultList =  [];
  !($.trim($('#searchISBN').val()) == '') ? item ["isbn"] = $('#searchISBN').val(): '';
  !($.trim($('#searchAuthor').val()) == '') ? item ["author"] = $('#searchAuthor').val(): '';

  item ["api-key"]=apiKey.trim();
  jsonObj.push(item);


  $.ajax({
    url: url, //NYT API with Key
    type: 'GET', //my get request for review
    dataType: 'json', //I want json
    contentType: 'text/plain',
    data: jsonObj[0],
    success: function(data) {
     // console.log(data);

      data.results.forEach(myFunction);

      function myFunction(item, index) {


        document.getElementById("searchResults").innerHTML += "Book result #"+index + " The author of the book " + item.book_author+
          " and the title of the book is '" + item.book_title +"'. The summary of the book is "+ item.summary+ "."+"<br>"
              }

    },

    error:function (){
      alert("incorrect ")
    }
  });
}


