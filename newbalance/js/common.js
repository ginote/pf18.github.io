$(function(){
	init();
})

function init() {
	gnb();
}

function gnb(){
	$(".subBox").hide();
	$("#gnb > li").removeClass("on");
	var isplay = false;

	$("#gnb > li").on("click",function(e){
		if(isplay){
			$(".subBox").hide();
			$(this).children(".subBox").show();
			$("#gnb > li").removeClass("on");
			$(this).addClass("on");	
		}else{
			$(".subBox").hide();
			$("#gnb > li").removeClass("on");
		}
		isplay=!isplay;
	})
}

