$('#app').html(`
	<div class="cssload-loader">Loading</div>
	`);
// $('#app').html(`<link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css">
// 	<div class="w3-light-grey">
//   <div class="w3-container w3-padding-large w3-red w3-center" style="width:50%">50%</div>
// </div><br>`);

setTimeout(function(){
		x();
},3000);

function x(){
		$.ajax({
			url: "http://www.omdbapi.com/?t=The Wolverine"
				}).done(function(res){
					console.log(res);
					let html = `
					
					
					<div id="exo-italic" style="color:red">
						${res.Title} (${res.Year})
					</div>
					
					<br>
					
					<div id="extra-light" style="color:white">| ${res.Rated}  |  ${res.Runtime}  |  ${res.Genre}  |  ${res.Released}  | IMDB rating: ${res.imdbRating} 
					</div>
					 <br>
					 
					 <ul>
						<li><a class="active" href="/">Home</a></li>
						<li><a href="/logan">Logan(2017)</a></li>
						<li><a href="/wolverine2013">The Wolverine (2013)</a></li>
						<li><a href="/wolverineorigins">X-Men Origins: Wolverine</a></li>
						<li><a href="/xmenlast">X-Men: Last Stand</a></li>
						<li><a href="/xmen">X-Men: First Class</a></li>
					</ul>
					
					<br>
					<img src="${res.Poster}" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/> 
					<iframe width="950" height="500" src="https://www.youtube.com/embed/toLpchTUYk8" frameborder="0" allowfullscreen></iframe>
					<br>
					<br>
					<div id="exo-italic" style="color:red"> Synopsis: </div>
					<div id="extra-light" style="color:white"> ${res.Plot}</div>
					<br>
					<br>
					<div id="exo-italic" style="color:red"> Actors </div>
					<div id="extra-light" style="color:white"> ${res.Actors} </div>
					

					

					
					`;
					$('#app').html(html);
		});
}


// let app = document.getElementById("app");
// app.innerHTML = "<h1>Miguel</h1>"