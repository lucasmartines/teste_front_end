$(document).foundation();


let menu_open = false;




$(document).ready( function () {



	
	if( window.screen.width < 640 ){
		$("#menu_header").hide();	
	}
	

	$("#button_menu_header").click( function(){
		 
		menu_open = !menu_open;

		if(menu_open){
			$("#menu_header").show();	
		}else{
			$("#menu_header").hide();	
		} 
		
	})
})


