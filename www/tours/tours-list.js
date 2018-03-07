$( document ).ready(function(){
	
	readInTours();
  	
  	function readInTours(){
  		$.ajax({
    		url: "https://api.mlab.com/api/1/databases/edinburgh-ar-tourism/collections/tours?apiKey=gSDJbLmGR6TY76g_31pBOWAWu-201Y7O"
    	}).done(function(data){
                                   
        	$.each(data, function(key,data){ 
        		
        		jQuery('<a/>', {
    				id: data.tour_name,
    				href: 'tour-info.html',
    				rel: 'external',
    				class: "button",
    				text: data.tour_name
				}).click(function(){
					setTourInfo(data.tour_name, data.description, data.distance, data.est_time, data.start_latitude, data.start_longitude, data.end_latitude, data.end_longitude);
				}).appendTo('#theTours');
					
				$('#theTours').append('<br/>');
        	});                              
    	});
  	}
  	
  	function setTourInfo(name, description, distance, time, start_lat, start_long, end_lat, end_long){
  		localStorage.name = name;
  		localStorage.description = description;
  		localStorage.distance = distance;
  		localStorage.time = time;
  		localStorage.start_lat = start_lat;
  		localStorage.start_long = start_long;
  		localStorage.end_lat = end_lat;
  		localStorage.end_long = end_long;
  	}
  	                  
});



