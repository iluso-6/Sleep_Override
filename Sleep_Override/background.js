
var min = 0;
var max = 1;
var selected = ["sleep_active","sleep_disabled"]
var current = min;

function updateIcon() {
  chrome.browserAction.setIcon({path:"icon/" + selected[current] + ".png"});

	if(current==max){
		chrome.power.requestKeepAwake('display');
		console.log("Keep awake: ON");
	}else{
		chrome.power.releaseKeepAwake();
		console.log("Keep awake: OFF"); 
	}
	  current++;
  if (current > max)
    current = min;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
