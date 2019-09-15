$(function(){
	initmain();
})

function initmain() {
 visual();
 viMenu();
 tab();
 banner();
 today();
 service();
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

function tab(){
	$(".menu-tab dd").hide().first().show();
	$(".menu-tab dt").on("click",function(e){
		$(".menu-tab dt").not(this).find("dd").hide();
		$(this).find("dd").show();
		
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

function today(){
	var $btn = $(".cau-today ul li");
	var $span = $(".cau-today span");
	var delay = 3000,current = 0,old = 0;
	var n = $(".cau-today ul li").length;
	var timer = 0;
	timer = setInterval(make,delay);
	
	$btn.css("left","-100%").first().css("left","0");
	$btn.css("overflow","hidden");
	
	function make(){
		current++;
		if(current > n-1){current = 0};
		banner();
	}
	$(".prev").on("click",function(e){
		current--;
		if(current < 0){current =  n-1};
		if(current != old){
			$btn.eq(current).stop().css("left","-100%").animate({left:"0"},400);
			$btn.eq(old).stop().css("left","0").animate({left:"100%"},400);
			for(var i = 0; i < n; i++){
				$span.eq(i).delay(i*100+400).animate({left:40,opacity:1},400);
			}
			old = current;
		}
		
	})
	$(".next").on("click",function(e){
		current++;
		if(current > n-1){current = 0};
		banner();			
	})	
	
	function banner(){
		if(current != old){
		$btn.eq(current).stop().css("left","100%").animate({left:0},800);
		$btn.eq(old).stop().css("left","0").animate({left:"-100%"},800);
		$span.css({opacity:0,left:-100});
		for(var i = 0; i < n; i++){
			$span.eq(i).delay(i*100+400).animate({left:40,opacity:1},400);
		}		
		old = current;
	}	
	return false;
	}
}
	
function service(){
	$(".allSeoul dd").hide().first().show();
	$(".allSeoul dt").on("click",function(e){
		$(this).next("dd").show();
		$(".allSeoul dt").not(this).next().hide();
		$(".allSeoul dt").removeClass();
		$(this).addClass("on");
	})
}	
	