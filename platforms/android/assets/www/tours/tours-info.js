$( document ).ready(function(){
	
	var tour_pois = [];
	var pois = [];
	
	displayToursInfo();
	loadPois();
  	
  	$('#startTour').click(function(){
  		getTourPois();
  	});
  	
  	//Display the information for the selected tour
  	function displayToursInfo(){
		$('#tourName').append(localStorage.name);
		$('#tourDescription').append(localStorage.description);
		$('#tourDistance').append(localStorage.distance);
		$('#tourTime').append(localStorage.time);
		$('#tourCoordinates').append("Start: " + localStorage.start_lat + ", " + localStorage.start_long + "<br/>End: " + localStorage.end_lat + ", " + localStorage.end_long);
		
		$.ajax({
            url: "https://api.mlab.com/api/1/databases/edinburgh-ar-tourism/collections/tour_of_pois?apiKey=gSDJbLmGR6TY76g_31pBOWAWu-201Y7O",
        }).done(function(data){
            $.each(data, function(i, data){
                	if(data.tour_name == localStorage.name){
                		var tour_poi = {poi_name: data.poi_name, order: data.tour_order};
                		tour_pois.push(tour_poi);
                	}
            	});                                               
        });
		
  	}
  	
  	//Load in POIs
  	function loadPois(){
        $.ajax({
            url: "https://api.mlab.com/api/1/databases/edinburgh-ar-tourism/collections/points_of_interest?apiKey=gSDJbLmGR6TY76g_31pBOWAWu-201Y7O",
        }).done(function(data){
            $.each(data, function(i, data){
            
            	var poi = 	{
            					poi_name: data.poi_name, 
            					topic: data.topic, 
            					information: data.information, 
            					latitude: data.latitude, 
            					longitude: data.longitude
            				};			
            	
				pois.push(poi);
            });
        });                                               
    }
    
    function getTourPois(){
    	
    	var pois_for_tour = [];
    	
    	//Sort tour into correct order
    	tour_pois.sort(function(a, b){return a.order - b.order});
    	
    	//loop through tour pois and pois to get the correct poi information for the tour
    	for(var i = 0; i<=tour_pois.length-1; i++){
    		for(var j = 0; j<=pois.length-1; j++){
    			if(tour_pois[i].poi_name == pois[j].poi_name){
    				pois_for_tour.push(pois[j]);
    			}
    		}
    	}
    	
    	for(var i = 0; i<=pois_for_tour.length-1; i++){
    		alert("POI Name: " + pois_for_tour[i].poi_name + "\n"
    			+ "Topic: " + pois_for_tour[i].topic + "\n"
    			+ "Information: " + pois_for_tour[i].information + "\n"
    			+ "Latitude: " + pois_for_tour[i].latitude + "\n"
    			+ "Topic: " + pois_for_tour[i].longitude);
    	}
    }
  	                  
});