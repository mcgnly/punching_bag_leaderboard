$( document ).ready(function () {

    var relayr = RELAYR.init({
      appId: keys.APP_ID
    });


    relayr.devices().getDeviceData({
      token: keys.TOKEN,
      deviceId: keys.DEVICE_ID,
      incomingData: function(data){
        console.log("data from device", data)
        $(".high-score").text(data.readings[0].value + " Gs")
      }
    });
});