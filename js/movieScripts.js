var reviewWindow;
var imdbLink = document.querySelector(".starRating");
if (imdbLink){
	imdbLink.addEventListener("click", function(event){
		//window.location.href = "http://www.imdb.com/title/tt1375666/";
		if (reviewWindow && !reviewWindow.closed)
			reviewWindow.close();
		reviewWindow = window.open("", "Post a review", "width = 700, height = 600, resizable=no, top = 100, left = 400");
		reviewWindow.document.write(document.querySelector(".movie-title").innerHTML);
		reviewWindow.document.write("<textarea> </textarea>");
		reviewWindow.document.write("<button>Save</button> <button>Cancel</button>");
	});
}


