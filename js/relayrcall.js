$( document ).ready(function () {

    var relayr = RELAYR.init({
      appId: keys.APP_ID
    });


    relayr.devices().getDeviceData({
      token: keys.TOKEN,
      deviceId: keys.DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)
        $(".high-score").text(data.readings[0].value *5/4)
      }
    });

	$('.btn').click(function() {
		var input_name = $('.status-box').val();
		$('<li>').text(input_name).appendTo('.names');
		// $('.status-box').val('');
		// $('.counter').text('140');
		$('.btn').addClass('disabled'); 
  	});


});