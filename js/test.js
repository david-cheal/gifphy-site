//6dR6cbWxKqlllKecEbptWLwsFj64ilhN

const API_KEY = '6dR6cbWxKqlllKecEbptWLwsFj64ilhN';
const QUERY_RANDOM_URL = 'https://api.giphy.com/v1/gifs/random';

//Waits for an input change to the text box,
//on return we scope to the original image url
//set the innerHTML on div images with an img
//then set the url as the source to display image
$(document).ready(function() {

    var tag = "dog";

    var result = $.get("https://api.giphy.com/v1/gifs/random?api_key=6dR6cbWxKqlllKecEbptWLwsFj64ilhN&tag=" + tag + "&rating=g&lang=en", function(response) {

        result.done(function() {
            var tag = document.getElementById("search").value;

            var url = response.data.images.original.url
            document.getElementById("image").style.backgroundImage = "url('" + url + ')";';
        });
        $("input").change(function() {
            var tag = document.getElementById("search").value;
            $.get("https://api.giphy.com/v1/gifs/random?api_key=6dR6cbWxKqlllKecEbptWLwsFj64ilhN&tag=" + tag + "&rating=g&lang=en", function(response) {
                var url = response.data.images.original.url
                document.getElementById("image").style.backgroundImage = "url('" + url + ')";';
            });
        });
    })


});