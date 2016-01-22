$( document ).ready(function () {

    var relayr = RELAYR.init({
      appId: keys.APP_ID
    });


    relayr.devices().getDeviceData({
      token: keys.TOKEN,
      deviceId: keys.DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)
        $(".high-score").text(data.readings[0].value.toFixed(1) * (5/4))
      }
    });

	$('.btn').click(function() {
		var input_name = $('.status-box').val();
		var scores = $('.high-score').val();
		$('<li>').text(input_name).appendTo('.names');
		$('<li>').text(String(scores)).appendTo('.scores');
		$('.status-box').val('');
	});


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


