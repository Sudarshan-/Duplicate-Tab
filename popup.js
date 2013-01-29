safari.application.addEventListener("command",commandHandler,false);
safari.application.addEventListener("validate",validateHanlder,false);
function commandHandler(event){
  console.log("Command Handler");
	//console.log(event);
	if(event.command = "duplicate"){
		var url = safari.application.activeBrowserWindow.activeTab.url;
		console.log("Url "+url);
		console.log(safari.application.activeBrowserWindow.activeTab);
		safari.application.activeBrowserWindow.openTab().url= url;
	}
}
function validateHanlder(event){
	//console.log("Validate Event");
	//console.log(event);
}
