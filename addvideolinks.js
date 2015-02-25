$(document).ready(function() {
	for(i = 0; i<13; i++) {
		$("ul").append(	"<li>" +
						"<a href = 'http://www.youtube.com'>" +
							"<div class = 'videopicture'>"	 +
								"<img src = 'https://i.ytimg.com/vi/mENDYhfxH-o/default.jpg'/>" +
							"</div>" +
							"<div class = 'videodescription'>" +
								"<p>This is the title of this video</p>" +
								"<p>By John and Jane Doe</p>" +
								"<p>54,454 views</p>" +
						"</div>" +
						"</a>" +
						"</li>" 
			);
	}
});