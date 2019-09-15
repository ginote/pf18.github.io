$(function(){
	slideMenu();
	sideBanner();
	board();
	news();
	newsPage();
	choose();
})

function slideMenu() {
	$(".currentMenu").removeClass();
	$(".sideTop li").children("ul").slideUp();
	
	$(".sideTop li").on("click",function(e){
		$(this).children("ul").stop().slideDown(500);
		$(".sideTop li").not(this).children("ul").slideUp(500);
		$(".currentMenu").removeClass();
		$(this).next(".currentMenu").addClass();
	})
}

function sideBanner(){
	$(".myseoul li").removeClass("on");
	$(".myseoul li").on("click",function(e){
		$(".myseoul li").removeClass("on");
		$(this).addClass("on");
	})
}

function board(){
	$(".citizenBoard dd").hide().first().show();
	
	$(".citizenBoard dt").on("click",function(e){
		$(this).next("dd").show();
		$(".citizenBoard dt").not(this).next("dd").hide();
		$(".citizenBoard dt").removeClass();
		$(this).addClass("on");
	})
}

function news(){
	var cnt = 0;
	$(".newsList").hide().first().show();
	$(".number li").removeClass("on");
	
	$(".number li").on("click",function(e){
		cnt = $(this).index();
		$(".newsList").hide();
		$(".newsList").eq(cnt).show();
		$(".number li").removeClass("on");		
		$(this).addClass("on");
		$(".newsPage span").text(cnt+1);
	})	
}

function newsPage(){
	var cnt = 0;
	var n =$(".number li").index();
	cnt = $(".number li").index();
	
	$(".prev").on("click",function(e){
		cnt--;
		if(cnt < 0){cnt = n};
		make();
	})
	$(".next").on("click",function(e){
		cnt++;
		if(cnt > n){cnt = 0};
		make();
	})
	
	function make(){	
		$(".newsList").hide();
		$(".newsList").eq(cnt).show();
		$(".number li").removeClass("on");		
		$(".number li").eq(cnt).addClass("on");
		$(".newsPage span").text(cnt+1);
	}	
}

function choose(){
	var isplay = false;
	$(".choose").css("height","20px");
	$(".choose img").on("click",function(e){
		if(isplay){
			$(".choose").animate({height:80},400)
		}else{
			$(".choose").animate({height:20},400)
		}
		isplay = !isplay;
	})
}








