$('#home').html(`
	<br><br><br><br><br><br><br><br><br>

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
			url: "http://www.omdbapi.com/?t=Logan"
			
				}).done(function(res){
					console.log(res);
					let html = `
						<a href ="/">
						<div id="exo-italic" style="color:red"> Honest Movie Trailers </div>
						</a>
					<br>
					<ul>
					
						<li><a class="active" href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/logan">Logan(2017)</a></li>
						<li><a href="/wolverine2013">The Wolverine (2013)</a></li>
						<li><a href="/wolverineorigins">X-Men Origins: Wolverine</a></li>
						<li><a href="/xmenlast">X-Men: Last Stand</a></li>
						<li><a href="/xmen">X-Men: First Class</a></li>
						</ul>
					<br>
				
						<a href="/logan">
						<img id="myImg" src="img/logan.jpg" a href="logan.html" alt="Trolltunga, Norway" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/> 
						<div id="myModal" class="modal">
							<span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
							<img class="modal-content" id="img01">
							<div id="caption"></div>
						</div>
						<script type="text/javascript" src = "javascript/modal-image.js"></script>

						<a href="/wolverine2013">
						<img id="myImg" src="img/wolverine(2013).jpg" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/> 
						<div id="myModal" class="modal">
							<span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
							<img class="modal-content" id="img01">
							<div id="caption"></div>
						</div>
						<script type="text/javascript" src = "javascript/modal-image.js"></script>


						<a href="/wolverineorigins">
						<img id="myImg" src="img/wolverine origins.jpg" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/> 
						<div id="myModal" class="modal">
							<span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
							<img class="modal-content" id="img01">
							<div id="caption"></div>
						</div>
						<script type="text/javascript" src = "javascript/modal-image.js"></script>

						<a href="/wolverineorigins">
						<center><img id="myImg" src="img/xmenlast.jpg" align="middle" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/></center> 
						<div id="myModal" class="modal">
							<span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
							<img class="modal-content" id="img01">
							<div id="caption"></div>
						</div>
						<script type="text/javascript" src = "javascript/modal-image.js"></script>

						<a href="/xmen">
						<center><img id="myImg" src="img/xmenfc.jpg" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/> </center>
						<div id="myModal" class="modal">
							<span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
							<img class="modal-content" id="img01">
							<div id="caption"></div>
						</div>
						<script type="text/javascript" src = "javascript/modal-image.js"></script>

					`;
					$('#home').html(html);
		});

		
}


// function y(){
// 			$.ajax({
// 			url: "http://www.omdbapi.com/?t=The Wolverine"
// 			}).done(function(ter){
// 			console.log(ter);
// 			let html = `

// 			<img src="${ter.Poster}" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/>


// 			`;
// 			$('#y').html(html);
// 		});
// }

// 			$.ajax({
// 			url: "http://www.omdbapi.com/?t=X-Men Origins: Wolverine"
// 			}).done(function(ret){
// 			console.log(ret);
// 			let html = `

// 			<img src="${ter.Poster}" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/>


// 			`;
// 			$('#x').html(html);
// 		});

// 			$.ajax({
// 			url: "http://www.omdbapi.com/?t=X-Men: The Last Stand"
// 			}).done(function(ter){
// 			console.log(ter);
// 			let html = `

// 			<img src="${ter.Poster}" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/>


// 			`;
// 			$('#z').html(html);
// 		});

// 			$.ajax({
// 			url: "http://www.omdbapi.com/?t=X-Men: First Class"
// 			}).done(function(ter){
// 			console.log(ter);
// 			let html = `

// 			<img src="${ter.Poster}" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;" height="500" width="500"/>


// 			`;
// 			$('#h').html(html);
// 		});

// }
