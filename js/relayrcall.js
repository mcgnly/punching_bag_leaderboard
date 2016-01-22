$( document ).ready(function () {

    var relayr = RELAYR.init({
      appId: keys.APP_ID
    });

    var your_score = 0;


    relayr.devices().getDeviceData({
      token: keys.TOKEN,
      deviceId: keys.DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)
        var raw_score = text(data.readings[0].value* (5/4))
        var your_score = raw_score.toFixed(1)
        $(".high-score").text(your_score)
      }
    });

	$('.btn').click(function() {
		var input_name = $('.status-box').val();
		var scores = $('.high-score').val();
		$('<li>').text(input_name).appendTo('.names');
		$('<li>').text(your_score).appendTo('.scores');
		$('.status-box').val('');
	});

// $("div").data("stack", []); //This sets the data key "stack" to an empty array
// $("div").data("stack").push(your_score); //This retrieves the array and pushes a number to the array
// console.log($("div").data("stack")); //This prints the array

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


