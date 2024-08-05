jQuery(function(){
	
	var navBool = true;
	boolrespimg();
	boolwapscreen();
	setTimeout(function(){boolrespimg();},300);
	jQuery(window).resize(function(){
        setTimeout(function(){boolrespimg();},300);
		boolwapscreen();
	});
	
	/*screen*/
	function boolwapscreen(){
		var screenWidth=jQuery(window).width();
		if(screenWidth>=768){
			navBool=true;
		}else if(screenWidth>=320&&screenWidth<768){
			navBool=false;
		}
	}
	
	boolwapnav(navBool);
	if(!navBool){
			jQuery(".hx_navBox li.hx_child").click(function(){
		        jQuery(this).next(".childcont").slideToggle(500).siblings(".childcont").slideUp(500);
		    })	
	
	}
	function boolwapnav(navBool){
		if(navBool){
				jQuery(".hx_navBox li.hx_child").unbind("click").bind("mouseover",function(){
					navIndex=jQuery(".hx_navBox li.hx_child").index(jQuery(this));
					jQuery(this).find(".childcont").stop().slideDown('');
					jQuery.each(jQuery(this).find(".childcont li"),function(i,n){
						var stime=0.5+0.1*i;
						anClasAdd(jQuery(".hx_navBox .hx_child:eq("+navIndex+") .childcont li:eq("+i+")"),"rightOpacityShow",stime+"s","0s","ease-in-out","both");
					});
				}).bind("mouseleave",function(){
					var navIndex=jQuery(".hx_navBox .hx_child").index(jQuery(".hx_navBox .hx_child.cur"));
					jQuery(this).find(".childcont").stop().slideUp('');
				});
			}
	}
			
	// 手机导航
	var navbool=false,navTimeout;
	jQuery(".wapNavBtn").unbind("click").bind("click",function(){
		if(!navbool){
			jQuery(".hx_navBox").show().removeClass("out").addClass("in");
			setTimeout(function(){jQuery(".wapNavBtn").addClass("on")},200);
			clearTimeout(navTimeout);
			navbool=true;
		}else{
			jQuery(".hx_navBox").removeClass("in").addClass("out");
			setTimeout(function(){jQuery(".wapNavBtn").removeClass("on")},300);
			navTimeout = setTimeout(function(){jQuery(".hx_navBox").hide();},100);
			navbool=false;
		}
	});
	

	
//导航固定头部	
	jQuery(window).scroll(function(){
		if(jQuery(this).scrollTop()>=100){
			jQuery('.header').addClass('fix-head');
			jQuery('.sect_sub').addClass('fix-sub');
		}else{
			jQuery('.header').removeClass('fix-head');
			jQuery('.sect_sub').removeClass('fix-sub');
		}
	});
	
	//招聘
    jQuery(".subNav").click(function(){
        //jQuery(this).toggleClass("on").siblings(".subNav").removeClass("on")
        jQuery(this).toggleClass("open").siblings(".subNav").removeClass("open")
        // 修改数字控制速度， slideUp(500)控制卷起速度
        //jQuery(".navContent").slideUp(500);
        jQuery(this).next(".navContent").slideToggle(500).siblings(".navContent").slideUp(500);
    })	
    //鼠标经过
    jQuery(".box").mouseover(function () {
					jQuery(".box").removeClass("active");
					jQuery(this).addClass("active");
				});
		
	// 手机二级导航-new
	jQuery(".module_cate .cate_tit").click(function() {
        if (jQuery('.subCate').is(':hidden')) {
            jQuery(".subCate").slideUp();
            jQuery('.subCate').slideDown();
            jQuery(this).addClass('on');
        }else{
            jQuery('.subCate').slideUp();
            jQuery(this).removeClass('on');
        }
    });
    
    //pc三级
	jQuery(".module_cate li").click(function() {
        jQuery(this).toggleClass('open');
    });
	
	//TOP
	jQuery(".tiao,.fixedTop").click(function(){
		jQuery('body,html').animate({scrollTop:300},500);
	});
	
	 jQuery('.sdot').on('click',function (event) {
		event.stopPropagation();//阻止事件冒泡
		jQuery('.search').toggle();
		//点击空白处，下拉框隐藏-------开始
		var tag = jQuery('.search');
		var flag = true;
		jQuery(document).bind("click",function(e){//点击空白处，设置的弹框消失
			var target = jQuery(e.target);
			if(target.closest(tag).length == 0 && flag == true){
				jQuery(tag).hide();
				flag = false;
			}
		});
		//点击空白处，下拉框隐藏-------结束
	});
	jQuery('.sclose').click(function(){
		jQuery('.search').hide();
	})
	
	jQuery(".search").click(function(){
				   jQuery('.search_in').slideToggle();
				  });
				  jQuery(".search_in").click(function(){
				   jQuery('search').slideUp();
				  });
				  
    		
    		
    	
		
		jQuery('.navBox').hover(function () {
		    jQuery('.er_nav').addClass('on');
		})

		jQuery('.er_nav').mouseleave(function () {
		    jQuery('.er_nav').removeClass('on');
		})
				
//自主荣誉弹出
jQuery(function(){
	//图库弹出层
	jQuery(".mskeLayBg").height(jQuery(document).height());
	jQuery(".mskeClaose").click(function(){
		jQuery(".mskeLayBg,.mskelayBox").hide()
	});
	jQuery(".msKeimgBox .box_w3").click(function(){
		jQuery(".mske_html").html(jQuery(this).find(".hidden").html());
		jQuery(".mskeLayBg").show();
		jQuery(".mskelayBox").fadeIn(300)
	});
	jQuery(".mskeTogBtn").click(function(){
		jQuery(".msKeimgBox").toggleClass("msKeimgBox2");
		jQuery(this).toggleClass("mskeTogBtn2")
	});
});
	
	
	
	//留言弹出层
	
	jQuery('.msg').click(function(){
		jQuery('.sy-msg').show();
	})
	jQuery('.close').click(function(){
		jQuery('.sy-msg').hide();
	})
	
	var jQuerynavs = jQuery('.menu a'),          // 导航
	jQuerysections = jQuery('.section'),       // 模块
	jQuerywindow = jQuery(window),
	navLength = jQuerynavs.length - 1;
	   
	jQuerywindow.on('scroll', function() {
	  var scrollTop = jQuerywindow.scrollTop(),
	    len = navLength;
	 
	  for (; len > -1; len--) {
	    var that = jQuerysections.eq(len);
	    if (scrollTop >= that.offset().top) {
	       jQuerynavs.removeClass('current').eq(len).addClass('current');
	       break;
	    }
	  }
	});
	
	jQuerynavs.on('click', function(e) {
	  e.preventDefault();
	  jQuery('html, body').animate({
	    'scrollTop': jQuery(jQuery(this).attr('href')).offset().top
	  }, 400);
	});
	
	/*水平垂直居中*/
    function boolrespimg(){
	  jQuery('.js-respimg').each(function(i){
	  	var ratioW = jQuery(this).attr("data-ratioW"),
	  		ratioH = jQuery(this).attr("data-ratioH"),
	  		fludwth = jQuery(this).parent().width();
	  	var ratio = ratioW/ratioH;
        jQuery(this).width(parseInt(fludwth));
        jQuery(this).height(parseInt(fludwth/ratio));
      
        var isFirefox = navigator.userAgent.toUpperCase().indexOf("FIREFOX")>0?true:false;
        // if(isFirefox){
        //     jQuery(this).find('img').width(fludwth*0.8);
        // }
       });
    }
    
    /*移动端底部组件*/
    var b = jQuery("#mob-home");
	if( jQuery('#mob-call') && jQuery('#mob-call').length && !jQuery('#mob-call').is(':hidden')){
			jQuery('body').css('paddingBottom','50px');
			b.click(function(){
				window.location.href="index.php"
			})
			
	}
	
    
    /*animateClassAdd*/
	function anClasAdd(e,keyframes,stime,dtime,an,status){
		jQuery(e).css({
			"animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
			"-moz-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
			"-webkit-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
			"-o-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		});
	}
	
	

})

