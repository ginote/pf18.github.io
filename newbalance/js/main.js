$(function(){
	initmain();
})

function initmain() {
	puffer();
	luxe();
	side();
}
function puffer(){
	var last = $(".downjacket li").last();
	$(".downjacket").prepend(last);
	$(".downjacket").css("left","-=511px");
	
	var first = "";
	var timer = setInterval(make,2500);
	
	function make(){
		$(".downjacket").animate({left:"-=511px"},500,function(e){
			first = $(".downjacket li").first();
			$(".downjacket").append(first);
			$(".downjacket").css("left","-511px");
		})
	}
}

function luxe(){
	$(".detail img").hide().first().show();
	var timer = setInterval(make,600);
	var cnt = 0;
	cnt = $(".detail img").index();
	
	function make(){
		cnt++;
		if(cnt > 4){cnt = 0};
		banner();
	}	
	
	function banner(){
		$(".detail img").hide().eq(cnt).show();
	}
}

function side(){
	$(".sideMenu li").removeClass("on");
	$(".sideMenu li").find("strong").hide();
	
	var top = 0;
	var posY = [];
	for(var i = 0; i <= 5; i++){
		posY[i] = $("#section" + i).offset().top;
	}
	$(window).on("scroll",function(e){
		top = $(window).scrollTop();
		for(var i = 0; i <= 5; i++){
			if(top >= posY[i]){
				$(".sideMenu li").removeClass("on");
				$(".sideMenu li").eq(i).addClass("on");
				$(".sideMenu li").find("strong").hide();
				$(".sideMenu li").eq(i).find("strong").show();
			}
		}
	})
	
	var ty = 0;
	$(".sideMenu li").on("click",function(e){
		var href = $(this).attr("href");
		ty = $(href).offset().top;
		$("html,body").animate({scrollTop:ty},500);
		$(".sideMenu li").removeClass("on");
		$(this).addClass("on");
		return false;
	})
}




