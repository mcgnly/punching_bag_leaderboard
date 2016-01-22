$( document ).ready(function () {

    var relayr = RELAYR.init({
      appId: keys.APP_ID
    });

    var your_score = 0;
    var leaderboard = {};
    var scores = 1;


    relayr.devices().getDeviceData({
      token: keys.TOKEN,
      deviceId: keys.DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)
        //var raw_score = text(data.readings[0].value * (5/4))
       // your_score = raw_score.toFixed(1)
        //$(".high-score").text(your_score)
        $(".high-score").text(data.readings[0].value)
      }
    });

// when you click the button:
	$('.btn').click(function() {
		//it takes the name out of the box and the score,
		var input_name = $('.status-box').val();
		//var scores = $('.high-score').val();
		scores = scores + 1;
		//clear out the old list
		$('.names').empty();
		//it also makes a k/val pair in the object named leaderboard
		leaderboard[input_name] = scores;
		//makes a second object of the ordered leaderboard
		const ordered = {};
		//and sorts it. Alphabetically at the moment. 
		Object.keys(leaderboard).sort().forEach(function(key) {
  			ordered[key] = leaderboard[key]});
  			//right now it prints it to console
  			console.log(JSON.stringify(ordered));
  		//and clears out the name input box for the next person
		$('.status-box').val('');
		//loop through the ordered index and make a list of them
		for (var index in ordered) {
			$('<li>').text(index+ "  :   " + ordered[index]).appendTo('.names');
			//$('<li>').text(ordered[]).appendTo('.scores');
		};
	});	
	});


// example of how to create an object that acts as a dictionary and add to it
// var data = {
//     'manager': ["Prateek","Rudresh","Prashant"], 
//     'employee': ["namit","amit","sushil"], 
//     'hr': ["priya"]
// };
// data["key3"] = "value3";


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





