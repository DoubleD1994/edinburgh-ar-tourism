$( document ).ready(function(){
	
	var pois = [];
	
	loadPois();
	
	$('#takeMeThere').click(function(){
  		takeMeThere();
  	});

	function loadPois(){
        $.ajax({
            url: "https://api.mlab.com/api/1/databases/edinburgh-ar-tourism/collections/points_of_interest?apiKey=gSDJbLmGR6TY76g_31pBOWAWu-201Y7O",
        }).done(function(data){
            $.each(data, function(i, data){
				
				jQuery('<a/>', {
    				id: data.poi_name,
    				href: '#',
    				rel: 'external',
    				class: "poiButton",
    				text: data.poi_name
				}).click(function(){
					takeMeThere(data.poi_name, data.topic, data.information, data.latitude, data.longitude);
				}).appendTo('#thePois');
					
				$('#thePois').append('<br/>');
				
            });
        });                                               
    }
    
    function takeMeThere(poiName, poiTopic, poiInfo, poiLat, poiLong){
    	alert("Name: " + poiName + "\n" 
    		+ "Topic: " + poiTopic + "\n"
    		+ "Information: " + poiInfo + "\n"
    		+ "Latitude: " + poiLat + "\n"
    		+ "Longitude: " + poiLong);
    }
    
});