$( document ).ready(function () {

    // var relayr = RELAYR.init({
    //   appId: keys.APP_ID
    // });

    var your_score = 0;
    var leaderboard = [];
    var scores = 1;


    // relayr.devices().getDeviceData({
    //   token: keys.TOKEN,
    //   deviceId: keys.DEVICE_ID,
    //   incomingData: function(data){
    //     console.log("data from device", data)
        //var raw_score = text(data.readings[0].value * (5/4))
       // your_score = raw_score.toFixed(1)
        //$(".high-score").text(your_score)
        // uncomment me to get data from relayr
        // $(".high-score").text(data.readings[0].value)
    //   }
    // });

    $('#punch-button').click(function() {
		//generate random number to simulate a punch
		your_score = Math.floor((Math.random() * 10) + 1);
		$('.high-score').text(your_score)
		// console.log("punch value: ", your_score)
		});	

// when you click the button:
	$('#save-button').click(function() {
		//it takes the name out of the box and the score,
		var input_name = $('.status-box').val();
		var scores = $('.high-score').text();
		var name_score = [scores, input_name]
		//clear out the old list
		$('.names').empty();

		leaderboard.push(name_score)
		ordered = leaderboard.sort();
		console.log(JSON.stringify(ordered));
		$('.status-box').val('');

		// loop through the ordered index and make a list of them
		for (var index = ordered.length; index-- > 0; ) {
			$('<li>').text(ordered[index][1]+ "   :   " + ordered[index][0]).appendTo('.names');
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





