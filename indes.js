var btn=document.querySelector("#get_result");
btn.addEventListener("click",function()
{
	var search=document.getElementById("input").value;
	movie_database(search);

});
function movie_database(movie_name) 
{
	var result=null;
	var req=new XMLHttpRequest();
	var url="http://www.omdbapi.com/?t="+movie_name+"&apikey=87597966";
	req.open("GET",url);
	req.send();
	req.onload = function()
	{
		if(req.status == 200)
		{
			result = req.response;
			print_data(result);
		}
		else
		{
			console.log("Error Code is: " +req.status);
		}
	}
}
var print_data = function(input)
{
	if(input==null)
	{
		display.textContent = "Error! No movie data Present";
	}
	else
	{
		var json=JSON.parse(input);	
		var child_name=document.createElement("h2");
		var parent_ele=document.querySelector(".data-from-json");
		parent_ele.innerHTML=" "
        parent_ele.appendChild(child_name);
        var child_imdb=document.createElement("h2");
        parent_ele.appendChild(child_imdb);
        var child_date=document.createElement("h2");
        parent_ele.appendChild(child_date);
        var child_rating=document.createElement("h2")
        parent_ele.appendChild(child_rating);
        var child_genre=document.createElement("h2")
        parent_ele.appendChild(child_genre);
        var child_director=document.createElement("h2")
        parent_ele.appendChild(child_director);
        var child_runtime=document.createElement("h2")
        parent_ele.appendChild(child_runtime);
        var child_actors=document.createElement("h2")
        parent_ele.appendChild(child_actors);
        var child_lang=document.createElement("h2")
        parent_ele.appendChild(child_lang);
        var child_awards=document.createElement("h2")
		parent_ele.appendChild(child_awards);
		child_name.textContent="MOVIE NAME:"+ " " +json.Title;
		child_imdb.textContent="IMDB ID:"+ " " +json.imdbID;
		child_date.textContent="RELEASED DATE:"+ " " +json.Released;
		child_rating.textContent="RATING GIVEN: "+ " " +json.Rated;
        child_genre.textContent="GENRE: "+ " " +json.Genre;
		child_director.textContent="DIRECTOR : "+ " " +json.Director;
		child_runtime.textContent="RUNTIME OF MOVIE:"+ " " +json.Runtime;  
		child_actors.textContent="ACTORS:"+ " " +json.Actors;
        child_lang.textContent="LANGUAGES:"+ " " +json.Language;
        child_awards.textContent="AWARDS:"+ " " +json.Awards;
    }
}