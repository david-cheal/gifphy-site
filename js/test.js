//6dR6cbWxKqlllKecEbptWLwsFj64ilhN

const API_KEY = '6dR6cbWxKqlllKecEbptWLwsFj64ilhN'; // Put your API KEY HERE
const QUERY_RANDOM_URL = 'https://api.giphy.com/v1/gifs/random'; // URL FOR GETTING RANDOM GIF

//Waits for an input change to the text box,
//on return we scope to the original image url
//set the innerHTML on div images with an img
//then set the url as the source to display image
$(document).ready(function() {

    var tag = "dog"; // Default is dog so the background isn't blank until you update

    var result = $.get(QUERY_RANDOM_URL + "?api_key=" + API_KEY + "&tag=" + tag + "&rating=g&lang=en", function(response) {

        result.done(function() {
            tag = document.getElementById("search").value;
            document.getElementById("image").style.backgroundImage = "url('" + response.data.images.original.url + ')";';
        });
        $("input").change(function() {
            tag = document.getElementById("search").value;
            $.get("https://api.giphy.com/v1/gifs/random?api_key=6dR6cbWxKqlllKecEbptWLwsFj64ilhN&tag=" + tag + "&rating=g&lang=en", function(response) {
                document.getElementById("image").style.backgroundImage = "url('" + response.data.images.original.url + ')";';
            });
        });
    })


});