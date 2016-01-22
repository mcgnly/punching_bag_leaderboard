$( document ).ready(function () {

    var relayr = RELAYR.init({
      appId: keys.APP_ID
    });

    var your_score = 0;
    var leaderboard = {};


    relayr.devices().getDeviceData({
      token: keys.TOKEN,
      deviceId: keys.DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)
        var raw_score = text(data.readings[0].value * (5/4))
        your_score = raw_score.toFixed(1)
        $(".high-score").text(your_score)
      }
    });

	$('.btn').click(function() {
		var input_name = $('.status-box').val();
		var scores = $('.high-score').val();
		$('<li>').text(input_name).appendTo('.names');
		$('<li>').text(your_score).appendTo('.scores');
		leaderboard[input_name] = scores;
		const ordered = {};
		Object.keys(leaderboard).sort().forEach(function(key) {
  		ordered[key] = leaderboard[key];
  		console.log(JSON.stringify(ordered));
		$('.status-box').val('');
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


  });


