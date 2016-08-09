;(function($){
	var index=0,
		len=$(".page1").find("div").size(),
		H=$(window).height();
	
	// 让第一页的文字显示
	$(".page1>div:eq(0)").find("h1").show();

	// 给top添加滑过事件
	$(".page1")
		.on("swipeUp",function(){
			index++;
			if(index>=len) index=len-1;
			changeImg();

		})
		.on("swipeDown",function(){
			index--;
			if(index<0) index=0;
			changeImg();
		})

		// 点击开始履行的时候让登录页面显示
		$("#begin").on("tap",function(){
				$(".container").hide();
				$(".page2").show();				
		})		
		// 封装改变包括图片的盒子的位置
		function changeImg(){
			// 图片位置变化	
			$(".page1").css({
				// 改变translate3d
				"-webkit-transform":"translate3d(0,"+-H*index+"px,0)",
				// 加动画
				"-webkit-transition":"transform .5s"
			})
			// 小圆点变化
			$("#btn").find("li").eq(index).addClass("on").siblings().removeClass("on");
			$(".page1 h1").css("display","none");
			$(".page1>div").eq(index).find("h1").css("display","block");			
		}

		// 点击登陆的时候
		$("#deng").on("tap",function(){
			var text=$("#text").val(),
				pwd=$("#pwd").val();
				
			//if(txt=="胡娇娇" && pwd=="123"){
				$("#page2").hide();
				$(".my").show();
			//}
		})

})(Zepto)