$(function(){
	init();
})

function init() {
 gnb(); 
 search_bar();
}

function gnb(){
	var isplay = false;	
	$(".barButton img").on("mouseover",function(e){
		if(isplay){
			$(".information").css("display","block");
		}else{
			$(".information").css("display","none");
		}
		isplay = !isplay;
	})
}
function search_bar(){
	var isplay = false;
	$(".search img").on("mouseover",function(e){
		if(isplay){
			$(".search-bar").css("display","block");
		}else{
			$(".search-bar").css("display","none");
		}
		isplay = !isplay;
	})
}

