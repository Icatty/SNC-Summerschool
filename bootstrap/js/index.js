$(document).ready(function(){
	//$(".features">a).hover(function () {
	//	$(".features">ul).show();
	//})
		 page = new Array;//大轮播
		for (var i = 4; i > 0; i--) {
			page[i]=$("#page"+i);
		}
		console.log(page);
		var point =new Array;
		for (var i = 4; i > 0; i--) {
			point[i]=$("#point"+i);
		}
		var i=1;
		function showon() {

			
			if (i==4) {
				i=1;
			}else{
				i++;
			}
			$(".lb1 ul li").eq(i-1).fadeIn(1000).siblings().stop(true, true).fadeOut(1000);
			//console.log(i);	
		}
		var a = setInterval(
			showon ,2000);
		$(".lb2 ul li").hover(function(){
			i=$(this).index();
			$(".lb2 ul li").eq(i).addClass("label").css({"height":"65px","width":"178px"}).siblings().removeClass("label").css({"height":"85px","width":"198px"});
			$(".lb1 ul li").eq(i).fadeIn(500).siblings().stop(true, true).fadeOut(500);
		})
		$(".ini").mouseenter(function(){//滚动动画
			$(this).children().css("top","-270px");
			 //$(".cover").toggle("slow","swing");
		})
		$(".ini").mouseleave(function(){
			$(this).children().css("top","0");
			//$(".cover").toggle("slow","swing");
		})
		$("#wntj").click(function(){
			$(".template-link").toggle("slow","linear");
		})
		var flag=0;//选项卡
		$(".p3-category p").on({
    	'click':function(){
			$(this).siblings().css({"background-color":"white","color":"black"});
			$(this).css({"background-color":"black","color":"white"});
			flag=1;
		},
    	'mouseover':function(){$(this).css({"background-color":"black","color":"white"});},
    	'mouseout':function(){if(flag==0){$(this).css({"background-color":"white","color":"black"});}else{flag=0}}
		});
		// function mediat(){
		var j=1;
			function showon() {
			if (j==7) {
				j=1;
			}else{
				j++;
			}
			$(".media-text").eq(j-1).fadeIn(300).siblings().fadeOut(300);
			//console.log(j);	
		}
		var timer = setInterval(showon,50000);
		$(".media-nav-btn.left").click(function(){
			$(".media-text").eq(j-1).fadeIn(300).siblings().fadeOut(300);
		})
		$(".media-nav-btn.right").click(function(){
			$(".media-text").eq(j+1).fadeIn(300).siblings().fadeOut(300);
		})
		$(".media-wrapper").mouseenter(clearInterval(timer));
		$(".media-wrapper").mouseleave(setInterval(timer));
  })