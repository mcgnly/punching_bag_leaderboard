$( document ).ready(function () {

//javascript business

//import api values
//import api_keys.txt

    var relayr = RELAYR.init({
      appId: APP_ID
    });


    relayr.devices().getDeviceData({
      token: TOKEN,
      deviceId: DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)
        $(".high-score").text(data.readings[0].value + " Gs")
      }
    });
});