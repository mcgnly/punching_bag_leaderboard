//javascript business

//import api values
import api_keys.txt

var relayr = RELAYR.init({
  appId: APP_ID
});
//If you have a token and your device ID, you can start listening to your device without going through the login process
relayr.devices().getDeviceData({
  token: TOKEN,
  deviceId:DEVICE_ID,
  incomingData: function(data){
    console.log("data from device", data)
  }
});