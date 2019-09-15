$(function(){
	var isplay = false;
	$(".fa-bars").on("click",function(e){
		if(!isplay){
			$("#nav").animate({left:"0%"},400);
			$(".search-bar").animate({right:"-100%"},400);
		}else{
			$("#nav").animate({left:"-100%"},400);
		}
		 isplay  = !isplay
	})
	
	$(".close").on("click",function(e){
		$("#nav").animate({left:"-100%"},400);
	})	
})

$(function(){
	$(".infoMenu li").removeClass();
	$(".infoMenu li").on("click",function(e){
		$(".infoMenu li").removeClass();
		$(this).addClass();		
	})
})

$(function(){
	var isplay = false;
	$(".infoMenu ul li").hide();
	$(".infoMenu li i").on("click",function(e){
		if(!isplay){
			$(".infoMenu ul li").show();
		}else{
			$(".infoMenu ul li").hide();
		}
		isplay = !isplay;
	})
})

$(function(){
	var isplay=false;
	$(".search").on("click",function(e){
		if(!isplay){
			$(".search-bar").animate({right:"0"},400);
			$("#nav").animate({left:"-100%"},400);	
		}else{
			$(".search-bar").animate({right:"-100%"},400);
		}
		isplay = !isplay;
	})
	$(".hideBar").on("click",function(e){
		$(".search-bar").animate({right:"-100%"},400);
	})
})

$(function(){
	var $li = $("#gnb li");
	$li.children("ul").hide();
	$li.on("click",function(e){
		$(this).children("ul").stop().slideDown();
		$li.stop().not(this).children("ul").slideUp();	
		$li.removeClass();
		$(this).addClass("on");
	})
})


