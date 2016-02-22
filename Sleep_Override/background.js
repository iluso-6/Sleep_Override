
var keepAwake = false;

function updateIcon() {

	if(keepAwake){
		chrome.browserAction.setIcon({path:"icon/sleep_disabled.png"});	
		chrome.power.requestKeepAwake('display');
		console.log("Keep awake: ON");
	}else{
		chrome.browserAction.setIcon({path:"icon/sleep_active.png"});	
		chrome.power.releaseKeepAwake();
		console.log("Keep awake: OFF"); 
	}
	keepAwake = !keepAwake;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();

