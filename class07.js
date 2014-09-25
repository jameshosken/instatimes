console.log("Loading...");

var nyTimesData = []
var instaData = []
function createHTML () {
	// body...

	var output = "";

			for(var i = 0; i < nyTimesData.length; i++){
				console.log(instaData[i].filter);
				console.log(nyTimesData[i].headline.main);

				output += "<div class=\"box\">"

				output += "<img src=\"" + instaData[i].images.low_resolution.url + "\">"
				output += "<p>" + nyTimesData[i].headline.main + "</p>"
				output += "</div>"
			}

			$('#response').html(output);
}



function getInstaData(instaTerm){

	console.log("Getting Instagram Data...");
	var term = instaTerm;
	console.log(term);
	var myInstaKey = "ad0de98875c5408081dbed3aafff8151";
	var instaURL = "https://api.instagram.com/v1/tags/" + term + "/media/recent?&client_id=" + myInstaKey
	console.log(instaURL)

	$.ajax({

		url: instaURL,
		cache: 'true',
		type: 'GET',
		dataType: 'jsonp',

		error: function(data){
			console.log("ERRRRRRRRRR");
		},

		success: function(data){
			//Do stuff with data
			console.log(data);

			instaData = data.data;
			createHTML();
		}

	});
}


function getNYData(nyTerm){
	console.log("Requesting Data...");
	var term = nyTerm;
	var myNYKey = "afb0baddbbe383d88fc44f15dcf4ae6e:15:69853634"
	var NYurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&page=0&sort=newest&api-key=" + myNYKey;


	//Make the ajax request

	$.ajax({

		url: NYurl,
		cache: 'true',
		type: 'GET',
		dataType: 'json',

		error: function(data){
			console.log("ERRRRRRRRRR");
		},

		success: function(data){
			//Do stuff with data
			console.log(data);

			nyTimesData = data.response.docs;

			getInstaData(term);
		}
	});
};


$(document).ready(function(){
	console.log("Page Loaded");

	$('#searchButton').click(function(){
		console.log("CLICK!");

		var searchTerm = $("#seachInput").val();

		getNYData(searchTerm)

	});
})