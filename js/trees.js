;(function($){
// ----------------------引导页--------------------------------------
// ----------------------引导页--------------------------------------
// ----------------------引导页--------------------------------------
	var index=0,
		len=$(".yindao").find("div").size(),

		H=$(window).height();	
	// 让第一页的文字显示
	$(".yindao>div:eq(0)").find("h1").show();
	// 给top添加滑过事件
	$(".yindao")
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
				$("#yindao").remove();
				$("#all")
					.css({"-webkit-transform":"translate3d(0,0,0)"});
				$("#music").remove();
				$("#btn").remove();				
		})		
		// 封装改变包括图片的盒子的位置
		function changeImg(){
			// 图片位置变化	
			$(".yindao").css({
				// 改变translate3d
				"-webkit-transform":"translate3d(0,"+-H*index+"px,0)",
				// 加动画
				"-webkit-transition":"transform .5s"
			})
			// 小圆点变化
			$("#btn").find("li").eq(index).addClass("on").siblings().removeClass("on");
			//字体动画
			$(".yindao h1").css("display","none");
			$(".yindao>div").eq(index).find("h1").css("display","block");			
		}
// ----------------------主页面--------------------------------------
// ----------------------主页面--------------------------------------
// ----------------------主页面--------------------------------------

	// 调用初始化函数
	init();
	// 初始化函数
	function init(){
		// 给所有的a添加单击事件
		addEvent();
	}
// 先让gunag_top下的第一个a的图片变一下
$("#guang_top>a:eq(0)").find("img").attr("src","images/gg1.jpg");
$("#guang>div").eq(0).css("display","block");
	function addEvent(){
		$("#container")
			.on("click","a",function(e){
				// 取消默认行为
				e.preventDefault();
			})
			.on("tap","a",function(){
				var curHref=$(this).attr("href");
				//alert(curHref)
				$(curHref)
					.css({"-webkit-transform":"translate3d(0,0,0)"})
					.siblings()
					.css({"-webkit-transform":"translate3d(100%,0,0)"});
				// 黑块跟随着移动
				if($(this).parent().is("nav")){
					var index=$(this).index();
					$("#black").animate({"left":index*20+"%"},300);
					$(this).css("color","#24a2a8").siblings().css("color","#fff");
				}
				if(curHref=="#loginmain"){
					// 进行登陆判断
					$("#deng").on("tap",function(){
						panduanlogin();
					})				
				}
				// 让尾部发生改变
				changeFooter($(this));
				// 让头部发生改变
				changeHeader($(this));
				// 逛逛
				if($(this).parent().is("#guang_top")){
					var idx=$(this).index();
					$(this).addClass("_color").siblings().removeClass("_color");
					//$(this).find("img").attr("src","images/gg"+idx+".jpg");
					$(this).parents("#guang").find("div").eq(idx).show().siblings("div").hide();
				}

				
			})

			// 点击设置里的退出登录的时候让登录页面显示
			$("#out").on("tap",function(){
				$("#loginmain")
					.css({"-webkit-transform":"translate3d(0,0,0)"})
					.siblings()
					.css({"-webkit-transform":"translate3d(100%,0,0)"});
			})
	}

	// 判断登陆
	function panduanlogin(){
		var text=$("#text").val(),
			pwd=$("#pwd").val();		
		if(text=="胡娇娇" && pwd=="1"){
			alert("登陆成功");
			$("#mainpage")
				.css({"-webkit-transform":"translate3d(0,0,0)"})
				.siblings()
				.css({"-webkit-transform":"translate3d(100%,0,0)"});
			$("#footer").show();
			$("#headerlogin").show();
			// 改变黑块的位置
			$("#black").animate({"left":"40%"},300)
		}
	}

	// 改变头部
	function changeHeader(that){
		var title=that.data("tit");
		$("#headtitle").text(title);
		var Href=that.attr("href");
		$("#headerlogin").hide();
		$("#back").hide();
		$("#shezhi").hide();
		$("#people").hide();
		$("#photo").hide();
		$("#book").hide();
		if(Href=="#mainpage"){
			// 追加了一张图片
			$("#headtitle").prepend("<img src='images/sy2.png'>");
			$("#headerlogin").show();
			$("#back").hide();
		}else if(Href=="#my"){
			$("#shezhi").show();
			$("#people").show();
		}else if(Href=="#ariy"){
			$("#photo").show();
		}else if(Href=="#hotel"){
			$("#back")
				.show()
				.attr("data-tit","单车旅行")
				.attr("href","#mainpage");
			$("#book").show();
		}else if(Href=="#set"){
			$("#back")
				.show()
				.attr("data-tit","设置")
				.attr("href","#my");
		}else if(Href=="#order_hotel"){
			$("#back")
				.show()
				.attr("data-tit","订单")
				.attr("href","#orders");
		}else if(Href=="#hotelContent"){
			$("#back")
				.show()
				.attr("data-tit","酒店订单")
				.attr("href","#order_hotel");
		}else if(Href=="#hotel2"){
			$("#back")
				.show()
				.attr("data-tit","酒店")
				.attr("href","#hotel");
		}else if(Href=="#my_mine"){
			$("#back")
				.show()
				.attr("data-tit","我的")
				.attr("href","#my");
		}

	}

	// 让尾部发生改变
	function changeFooter(that){
		$("#footer").show();
		// 获得点击的href属性
		var Href=that.attr("href");
		
		if(Href=="#loginmain"){
			$("#footer").hide();	
		}else if(Href=="#set"){		
			$("#footer").hide();
		}
		

	};


	// 逛逛


})(Zepto)