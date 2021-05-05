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
      console.log(data);


      var stringIt = JSON.stringify(data);
      var myArr = JSON.parse(stringIt);
      //var i,x = "";

      console.log(myArr.results.length);

      //for(i=0; i<myArr.results.length;i++)
      const booklist = {bookTitle: myArr.results[0].book_title, bookAuthor: myArr.results[0].book_author, bookSum: myArr.results[0].summary};

      console.log(booklist);
     /* myArrList();
      function myArrList(){
        for(i = 0; i<myArr.results.length; i++){
          booklistAdd.push(myArr.results[i].book_title,myArr.results[i].book_author, myArr.results[i].summary, myArr.results[i].url);
        }
        booklist = booklist+booklistAdd;
      }

        console.log(booklist);
    */
    },

    error:function (){
      alert("incorrect ")
    }
  });
}
