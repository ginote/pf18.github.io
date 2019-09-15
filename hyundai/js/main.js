$(function(){
	initmain();
})

function initmain() {
	gnb();
	family();
	allMenu();
	allLi();
	photo();
	hdFam();
}

function gnb(){
	$(".hdmenu").hide();
	var cnt = 0;
	
	$("#gnb li").click(function(e){
		cnt = $(this).index();
		$("#header").css("height","565px");
		$(".hdmenu").stop().animate({height:"500px"},100);
		$(".hdmenu").hide();
		$(".hdmenu").eq(cnt).show();
	})
	$("#gnb").on("mouseleave",function(e){
		$("#header").css("height","65px");
		$(".hdmenu").stop().animate({height:"0"},100);
	})
}

function family(){
	var isplay = false;
	$(".family").css("overflow","hidden").css("height","26px");
		$(".family img").on("click",function(e){
			if(!isplay){
				$(".family").animate({height: 308},500);
			}else{
				$(".family").animate({height: 26},500);
			}
			isplay = !isplay;	
		})
	}


function allMenu(){
	$(".all img").on("click",function(e){
		$(".sideList").animate({right:"0"},500);	
	})
	
	$(".closeBox img").on("click",function(e){
		$(".sideList").animate({right:"-350px"},500);
	})

	$(".allMenu li").removeClass();	
	$(".allMenu li").click(function(e){
		$(".allMenu li").removeClass();
		$(this).addClass("on");
		$(".allMenu img").attr("src","images/layout/down.png");
		$(this).find("img").attr("src","images/layout/classdown.png");
	})
	
	$(".all").hide();
	$(window).on("resize",function(e){
		var w=$(window).width();
		if(w<=1310){
			$(".all").show();
		}else{
			$(".all").hide();
		}
	})	
}

function allLi(){
	$(".allMenu li").children("ul").slideUp();
	$(".allMenu li").on("click",function(e){
		$(this).children("ul").stop().slideDown(500);
		$(".allMenu li").not(this).children("ul").slideUp(500);
	})
}

function photo(){
	var $span=$(".content4 li span");
	var $em=$(".content4 li em");
	var $div = "<div>" + $span.append + $span.em + "</div>"
	$span.hide();
	$em.hide();
	$(".content4 li").on("hover",function(e){
		$(this).find("span").fadeIn();
		$(this).find("em").fadeIn();
		$(this).find("div").css({backgroundColor:"#191919",opacity:0.5}).fadeIn();
	})
	$(".content4 li").on("mouseleave",function(e){
		$(this).find("span").fadeOut();
		$(this).find("em").fadeOut();
		$(this).find("div").fadeOut();
	})
	
}

function hdFam(){
	var isplay = false;	
	$(".hdFam ul").css("overflow","hidden").css("height","50px");
	$(".hdFam img").on("click",function(e){
		if(!isplay){
			$(".hdFam ul").animate({height:206},400);
		}else{
			$(".hdFam ul").animate({height:50},400);
		}
		isplay = !isplay;
		return false;
	})
}




