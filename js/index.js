$(document).ready(function(){
	//$(".features">a).hover(function () {
	//	$(".features">ul).show();
	//})
		 page = new Array;
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
			console.log(i);	
		}
		var a = setInterval(
			showon ,2000);
		$(".lb2 ul li").hover(function(){
			i=$(this).index();
			$(".lb2 ul li").eq(i).addClass("label").siblings().removeClass("label");
			$(".lb1 ul li").eq(i).fadeIn(500).siblings().stop(true, true).fadeOut(500);
		})
	 
		// $(".features ul li",).mouseover(function(){
		// 	$(this).parent().prev().css({"background-color":"black","color":"white"});
		// 	//$(this).prev().css({"background-color":"black","color":"white"});
		// })
		// $(".top-link").mouseleave(function(){
		// 	$(this).css({"background-color":"black","color":"white"});
		// })
		// $(".top-link" ).mouseleave(function(){
		// 	$(this).css({"background-color":"white","color":"black"});
		// })
		$(".ini").mouseenter(function(){
			$(".ini div").css("top","-270px");
			 //$(".cover").toggle("slow","swing");
		})
		$(".ini").mouseleave(function(){
			$(".ini div").css("top","0");
			//$(".cover").toggle("slow","swing");
		})
		$("#wntj").click(function(){
			$(".template-link").toggle("slow","linear");
		})
		var flag=0;
		$(".p3-category p").on({
    	'click':function(){
			$(this).siblings().css({"background-color":"white","color":"black"});
			$(this).css({"background-color":"black","color":"white"});
			flag=1;
		},
    	'mouseover':function(){$(this).css({"background-color":"black","color":"white"});},
    	'mouseout':function(){if(flag==0){$(this).css({"background-color":"white","color":"black"});}else{flag=0}}
		});
		
  })