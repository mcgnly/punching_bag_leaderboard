# Punching-Bag Frontend Instructions:

Welcome to the relayr connected punching bag! In order to get your punching bag to work, there are a few things you should do:

STEP 1: Download and install bootstrap and jquery. You may want to use a client like bower to manage this, or just install them locally in the folders for JS and CSS provided in the project. Either is good, as long as you know where they are. 

STEP 2: Create a .js file to hold your api keys. It should be called **api_keys.js**, and should look like this: 

	   var keys = new Object;

	keys.APP_ID = "YOUR APP ID FROM THE RELAYR CLOUD";
	keys.TOKEN = "YOUR GENERATED API TOKEN FROM THE RELAYR CLOUD";
	keys.DEVICE_ID = "YOUR DEVICE ID FROM THE RELAYR CLOUD";
	
STEP 3: At a couple of places in the html file, it will ask you to point it to your bootstrap and jquery installations. fill this out with the paths to bootstrap.min and jquery, wherever you put them. 

OPTIONAL: You can find the background image as well as a few alternatives files used to creat the background in the IMG folder. Feel free to rephotoshop to fit your screen's needs, just don't forget to update the link to the background image in the CSS/my-css.css file to point to the correct background image. 