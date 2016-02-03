$( document ).ready(function () {

//connect to cloud
    var relayr = RELAYR.init({
      appId: keys.APP_ID
    });

//init some variables
    var your_score = "";
    var leaderboard = [];
    var scores = 1;

//more connecting to cloud things
    relayr.devices().getDeviceData({
      token: keys.TOKEN,
      deviceId: keys.DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)

    //real relayr cloud data, scaled to be out of 10
        var raw_score = text(data.readings[0].value * (5/4))
    //fake number to test rounding when not connected to cloud
        // var raw_score = 2.5647356567456 * 5/4

    //round scaled number to one decimal, output is a string  
       your_score = raw_score.toFixed(1)
       // //plug it into high-score div of front-end
        $(".high-score").text(your_score)
      }
    });

// //simulate a punch when the cloud isn't connected
//     $('#punch-button').click(function() {
// 		//generate random number to simulate a punch
// 		your_score = Math.floor((Math.random() * 10));
// 		$(".high-score").text(your_score)
// 		});	

	//reset button to set back to 0
	$('#reset-button').click(function() {
		//set score back to 0
		your_score = 0;
		$(".high-score").text(your_score)
	});	


// when you click the save button:
	$('#save-button').click(function() {
		//it takes the name out of the box and the score,
		var input_name = $('.status-box').val();
		var scores = $('.high-score').text();
		//throw it into an array to save
		var name_score = [scores, input_name]
		//clear out the old top-score list to redisplay later
		$('.names-scores').empty();
console.log($('.names-scores').text());
		//puts the array into our list of name/score arrays
		leaderboard.push(name_score)
		//sorts it to ascending scores
		ordered = leaderboard.sort();
		console.log(JSON.stringify(ordered));
		//clears out the old score as well
		$('.status-box').val('');

		// loop through the list of name/score arrays backwards, to get a DESCENDING order list
		for (var index = ordered.length; index-- > 0; ) {
			//shove the array with name and score into the 
			$('<li>').text(ordered[index][1]+ "   :   " + ordered[index][0]).appendTo('.names-scores');
			};

	});	
});

// 
// I want to have the button disabled if the text field empty, not working right now
	// $('.status-box').keyup(function() {
	// 	var name_length = $(this).val().length;
	// if(name_length.length <= 0) {
 //      $('.btn').addClass('disabled'); }
 //    else {
 //      $('.btn').removeClass('disabled');
 //    	}
 //  	});





