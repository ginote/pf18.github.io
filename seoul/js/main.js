$(function(){
	initmain();
})

function initmain() {
	visual();
	viMenu();
	menu();
	tab();
	banner();
	story();
}

function visual(){
	var cnt = 0,old = 0;
	var timer = 0;
	var delay = 3500;
	var n = 3;
	var isplay = false;
	timer = setInterval(make,delay);
	
	function make(){
		cnt++;
		if(cnt > n){cnt = 0};
		banner();
		 $(".counter span").text(cnt+1);
	}
	
	$(".back").on("click",function(e){
		cnt++;
		if(cnt > n){cnt = 0};
		banner();
	    $(".counter span").text(cnt+1);
		clearInterval(timer);
		setInterval(make,delay);
	})
	
	$(".front").on("click",function(e){
		cnt--;
		if(cnt < 0){cnt = n};
		$(".counter span").text(cnt+1);
		clearInterval(timer);
		setInterval(make,delay);
		if(cnt != old){
			$(".main-visual li").eq(cnt).css("left","-100%").animate({left:"0"},500);
			$(".main-visual li").eq(old).css("left","0").animate({left:"100%"},500);
			old = cnt;			
		}	
	})
	
	$(".pause").on("click",function(e){
		if(!isplay){
			$(".pause img").attr("src","images/main/play-button.png");
			clearInterval(timer);
		}else{
			$(".pause img").attr("src","images/main/pause-bars.png");
			make();
			timer = setInterval(make,delay);
		}
		isplay = !isplay;
	})
	
	function banner(){
		if(cnt != old){
			$(".main-visual li").eq(cnt).stop().css("left","100%").animate({left:"0"},500);
			$(".main-visual li").eq(old).stop().css("left","0").animate({left:"-100%"},500);
			old = cnt;
		}
	}
}

function viMenu(){
	var cnt = 0;
	$(".vi-menu li").removeClass("on");		
	$(".user-service").hide();
	
	$(".vi-menu li").on("click",function(e){
		cnt = $(this).index();	
		$(".user-service").hide();
		$(".user-service").eq(cnt).show();
		$(".vi-menu li").removeClass("on");
		$(this).addClass("on");
	})	
	
	$(".user-service span").on("click",function(e){
		$(".user-service").fadeOut(500);
	})
}

function menu(){
	var last = $(".menu-tab dt").eq(cnt).next(".cityTab li").last();
	cnt = $(".menu-tab dt").index();
	$(".cityTab").prepend(last);
	$(".cityTab").css("left","-=323px");
	
	var first = "";
	var timer = setInterval(make,1800);
	var cnt = 0;
	
	function make(){
		$(".cityTab").animate({left:"-=323px"},500,function(e){
			cnt = $(this).index();
			first = $(".cityTab li").first();
			$(".cityTab").append(first);
			$(".cityTab").css("left","-323px");
		})
	}	
}

function tab(){
	$(".menu-tab dd").hide().first().show();
	$(".menu-tab dt").on("click",function(e){
		$(this).next("dd").fadeIn();
		$(".menu-tab dt").not(this).next().fadeOut();
		$(".menu-tab dt").removeClass();
		$(this).addClass("on");
	})
}

function banner(){
	$(".banimg img").hide().first().show();	
	var cnt = 0;
	var timer = 0;
	var n = 5;
	var delay = 3000;
	
	$(".numcounter span").text(cnt+1);
	$(".numcounter li").removeClass("on");
	
	timer = setInterval(make,delay);
	clearInterval(timer);
	setInterval(make,delay);
	
	function make(){
		cnt++;
		if(cnt > n){cnt = 0};
		banner();
		$(".numcounter span").text(cnt+1);			
	}
	
	$(".prev").on("click",function(e){
		cnt--;
		if(cnt < 0){cnt = n};
		banner();
		$(".numcounter span").text(cnt+1);
		$(".numcounter li").removeClass("on");
		$(this).addClass("on");		
	})
	
	$(".next").on("click",function(e){
		cnt++;
		if(cnt > 5){cnt = 0};
		banner();
		$(".numcounter span").text(cnt+1);
		$(".numcounter li").removeClass("on");
		$(this).addClass("on");		
	})
	function banner(){
		$(".banimg img").hide();
		$(".banimg img").eq(cnt).show();		
	}	
}

function story(){
	$(".storyBan li").hide().first().show();
	$(".storyTab p a").removeClass();
	var cnt = 0;
	var timer = 0;
	var delay = 2500;
	timer = setInterval(make,delay);
	clearInterval(timer);
	setInterval(make,delay);
	
	function make(){
		cnt++;
		if(cnt > 1){cnt = 0};
		$(".storyBan li").stop().hide().eq(cnt).show();
		$(".storyTab p a").removeClass("on");
		$(".storyTab p a").eq(cnt).addClass("on");
	}
	$(".storyTab p a").on("click",function(e){
		make();
	})
}










