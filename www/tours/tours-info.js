$( document ).ready(function(){
	
	displayToursInfo();
  	
  	function displayToursInfo(){
		$('#tourName').append(localStorage.name);
		$('#tourDescription').append(localStorage.description);
		$('#tourDistance').append(localStorage.distance);
		$('#tourTime').append(localStorage.time);
		$('#tourCoordinates').append("Start: " + localStorage.start_lat + ", " + localStorage.start_long + "<br/>End: " + localStorage.end_lat + ", " + localStorage.end_long);
  	}
  	                  
});