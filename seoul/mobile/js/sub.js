$(function(){
	initsub();
})

function initsub() {
	board();
	news();
	newsPage();
	choose();
	quick();
	notice();
	research_center();
	facility();
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
	
	$(".previous").on("click",function(e){
		cnt--;
		if(cnt < 0){cnt = n};
		make();
	})
	$(".end").on("click",function(e){
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

function quick(){
	var isplay = false;
	$(".quick-menu ul").css("overflow","hidden").css("height","27px");
	$(".quick-menu ul li").on("click",function(e){
	 if(!isplay){
	 	 $(this).parent("ul").animate({height:"140px"},400);
	 }else{
	 	 $(this).parent("ul").animate({height:"27px"},400);
	 }
	 isplay = !isplay;
	return false;
	}) 
}
function notice(){
	var cnt = 0;
	$(".school-notice").hide().first().show()
	$(".notice-page li").on("click",function(e){
		cnt = $(this).index();
		$(".school-notice").hide();
		$(".school-notice").eq(cnt).fadeIn();
		$(".notice-page li").removeClass();
		$(this).addClass("on");
	})
}
function research_center(){
	$(".additional").hide().first().show();
	$(".center h3").on("click",function(e){
		$(".center h3").not(this).next().slideUp();
		$(this).next().slideDown();
		$(".center h3").removeClass();
		$(this).addClass("on");
	})
}
function facility(){
	var cnt = 0;
	$(".cau-facility").hide().first().show();
	$(".facility-tab li").on("click",function(e){
		cnt = $(this).index();
		$(".cau-facility").hide();
		$(".cau-facility").eq(cnt).fadeIn();
		$(".facility-tab li").removeClass();
		$(this).addClass("on");
	})
}