jQuery(function() {

	new WOW().init();
	var cate_len = 10;
	var screenWidth = jQuery(window).width();
	if(screenWidth <= 1366) {
		cate_len = 7;
	} else if(screenWidth < 1024) {
		cate_len = 6;
	} else if(screenWidth < 768) {
		cate_len = 5;
	}
	
	jQuery('.info_tabs a').click(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active').siblings().removeClass('active');
		jQuery('.tab_info .tlist').eq(index).addClass('active').siblings().removeClass('active');
	});
	
	

	 //产品相册
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        navigation: {
	        nextEl: ".inext1",
	        prevEl: ".iprev1",
	    },
      });
      
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
		navigation: {
	        nextEl: ".inext6",
	        prevEl: ".iprev6",
	    },
      });
	  swiper.controller.control = swiper2;//Swiper1控制Swiper2，需要在Swiper2初始化后
	  swiper2.controller.control = swiper;//Swiper2控制Swiper1，需要在Swiper1初始化后
	
	var swiper_1 = new Swiper('.swiper_1', {
		spaceBetween: 25,
		slidesPerView: 7,
		autoplay: true,
		loop:true,
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('.swiper_1 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			}

		}
	});

	var swiper_2 = new Swiper('#swiper_2', {
		spaceBetween: 25,
		effect: 'slide',
		slidesPerView: 7,
		initialSlide:4,
		autoplay: true,
		 centeredSlides : true,
		navigation: {
			nextEl: '.inext2',
			prevEl: '.iprev2',
		},
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_2 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			}

		}
	});
    
    	var swiper_5 = new Swiper('#swiper_5', {
		speed: 1000,
		spaceBetween: 20,
		effect: 'slide',
		slidesPerView: 5,
		autoplay: true,
		loop:true,
		navigation: {
			nextEl: '.inext5',
			prevEl: '.iprev5',
		},
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_5 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});

    var support1 = new Swiper(".support1", {
		spaceBetween: 30,
		slidesPerView: 5,
		direction: "vertical",
		leftedSlides: true,
		watchSlidesProgress: true,
		breakpoints: {
			1024: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	});
	var support = new Swiper(".support", {
		spaceBetween: 0,
		thumbs: {
			swiper: support1,
		},
	});


   jQuery(".ds_content4 div").click(function(){
				jQuery(this).children('div').addClass("xians");
				jQuery(".gbs").addClass("xians")
				event.stopPropagation();
			})
			jQuery(".gb").click(function(){
				jQuery('.xq_rex').removeClass("xians");
				jQuery(".gbs").removeClass("xians");
				event.stopPropagation();
			})

	var swiper_news = new Swiper('#swiper_news', {
		speed: 1000,
		spaceBetween: 10,
		effect: 'slide',
		slidesPerView: 1,
		autoplay: true,
		pagination: {
			el: '.news-pagination',
			clickable: true,
		},
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_news .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	
	
	
	var swiper_down1 = new Swiper('#swiper_down1', {
		speed: 1000,
		spaceBetween: 20,
		effect: 'slide',
		slidesPerView: 12,
		autoplay: true,
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_down1 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 10,
				spaceBetween: 10,
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 10,
			}

		}
	});

	
	
	var news_info = new Swiper('#news_info', {
		speed: 1000,
		spaceBetween: 70,
		effect: 'slide',
		slidesPerView: 3,
		autoplay: true,
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#news_info .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	
	var about_1 = new Swiper('#about_1', {
		speed: 1000,
		spaceBetween: 25,
		slidesPerView: 4,
		autoplay: true,
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('.about_1 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			}

		}
	});
	
	var about_2 = new Swiper('#about_2', {
		speed: 1000,
		spaceBetween: 25,
		slidesPerView: 5,
		autoplay: true,
		navigation: {
			nextEl: '.inext1',
			prevEl: '.iprev1',
		},
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('.about_2 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	
	
	var swiper_x2 = new Swiper('#swiper_x2', {
		speed: 1000,
		spaceBetween: 0,
		effect: 'slide',
		slidesPerView: 4,
		autoplay: true,
		navigation: {
			nextEl: '.inext1',
			prevEl: '.iprev1',
		},
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_x2 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	
	

	
	
	var swiper_6 = new Swiper('#swiper_6', {
		speed: 1000,
		spaceBetween: 40,
		effect: 'slide',
		slidesPerView: 4,
		loop:true,
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_6 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	
	var swiper_6 = new Swiper('#swiper_6', {
		speed: 1000,
		spaceBetween: 40,
		effect: 'slide',
		slidesPerView: 4,
		loop:true,
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_6 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	
	var swiper_j6 = new Swiper('#swiper_j6', {
		speed: 1000,
		spaceBetween: 40,
		effect: 'slide',
		slidesPerView: 6,
		loop:true,
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_j6 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	


	var swiper_prod = new Swiper('#swiper_prod', {
		speed: 1000,
		spaceBetween: 40,
		slidesPerView: 3,
		loop:true,
		navigation: {
			nextEl: '.inext5',
			prevEl: '.iprev5',
		},
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_prod .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}

		}
	});
	
	 jQuery('.prodBox1 .hd li').mouseover(function(){
             jQuery(this).addClass('on').siblings().removeClass('on');
           swiper_prod.slideTo(jQuery(this).index());
         })
        var swiper_prod = new Swiper('#swiper_prod1', {
            //autoHeight: true,
            autoplay: 3000,
            effect: 'fade',
	        fadeEffect: {
			      crossFade: true,
			    },
            initialSlide :0,
            slidesPerView: 1,
            spaceBetween: 10,
            onlyExternal: false,
            lazyLoading : true,
            onSlideChangeStart: function() {
               jQuery('.prodBox1 .hd li').removeClass('on');
               jQuery('.prodBox1 .hd li').eq(swiper_prod.activeIndex).addClass('on');
            },
            onAutoplay:function(){
                var tieW = jQuery('.tie').eq(0).height();
                jQuery('.tie').height(tieW);
            }
        });
	

	//业务展示
	
	var mySwiper4 = new Swiper(".mySwiper4", {
		spaceBetween: 30,
		slidesPerView: 4,
		direction: "vertical",
		leftedSlides: true,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			1024: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	});
	var mySwiper3 = new Swiper(".mySwiper3", {
		spaceBetween: 0,
		thumbs: {
			swiper: mySwiper4,
		},
	});
	
	//shipin
	var mySwiper5 = new Swiper(".mySwiper5", {
		autoplay:true,
		spaceBetween: 0,
		slidesPerView: 4,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 0,
			}
		}
	});
	var mySwiper6 = new Swiper(".mySwiper6", {
		autoplay:true,
		mousewheel: true,
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: mySwiper5,
		},
	});
	
	//kechengjieshao
	var mySwiper7 = new Swiper(".mySwiper7", {
		slidesPerView: 4,
		//autoplay: {
		   // delay: 2000,
		   // stopOnLastSlide: false,
		    //: true,
		   // },
		direction: 'vertical',
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			640: {
				slidesPerView: 3,
				direction: 'horizontal',
			}
			
		}
	});
	var mySwiper8 = new Swiper(".mySwiper8", {
		direction: 'vertical',
		//autoplay: {
		    //delay: 2000,
		    //stopOnLastSlide: false,
		    //disableOnInteraction: true,
		    //},
		mousewheel: true,
		spaceBetween: 0,
		pagination: {
		    el: '.swiper_kc',
		  },
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('.mySwiper8 .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		
		thumbs: {
			swiper: mySwiper7,
		},
	});
	
var swiper_qy = new Swiper('#swiper_qy', {
		speed: 1000,
		spaceBetween: 25,
		effect: 'slide',
		 slidesPerView:5,
      slidesPerColumnFill:'row',
      slidesPerColumn:2,
		autoplay: true,
		pagination: {
		    el: '.swiper_qy',
		  },
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_qy .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			}

		}
	});


	var swiper_a1 = new Swiper('#swiper_a1', {
		speed: 1000,
		loop:true,
		//autoplay: true,
		spaceBetween: 5,
		slidesPerView:4,
		navigation: {
			nextEl: ".inext5",
			prevEl: ".iprev5",
		},
		on: {
			init: function(swiper) { //console.log(Date.parse(new Date()))
				jQuery('#swiper_anli .js-respimg').each(function(i) {
					var ratioW = jQuery(this).attr("data-ratioW"),
						ratioH = jQuery(this).attr("data-ratioH"),
						fludwth = jQuery(this).parent().width();
					var ratio = ratioW / ratioH;
					jQuery(this).width(parseInt(fludwth));
					jQuery(this).height(parseInt(fludwth / ratio));
				});
			},
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 0,
			}

		}
	});
	jQuery(function () {
    jQuery("#swiper_a1 .swiper-slide").mouseenter(function () {
        jQuery(this).addClass("active1");
        jQuery(this).siblings().removeClass("active1");
    });
    jQuery("#swiper_a1 .swiper-slide").mouseleave(function () {
        jQuery(this).removeClass("active1");
        jQuery(this).siblings().removeClass("active1");
    });
});

var swiper_down = new Swiper('#swiper_down', {
		spaceBetween: 0,
		slidesPerView: 1,
		pagination: {
			el: '.news-down',
		},

		breakpoints: {
			1024: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 0,
			}

		}
	});

//图片放大效果
	var mySwiper20 = new Swiper('.swiper-container2', {
        loop: false,
		slidesPerView: 1,
        navigation: {
		        nextEl: '.big-next',
		        prevEl: '.big-prev',
		},
    })
    jQuery(".tlist").on("click", ".icon", 
    function() {
        var imgBox = jQuery(this).parents(".tlist").find(".icon");
        var i = jQuery(imgBox).index(this);
        //alert(i);
        //console.log(imgBox);
        jQuery(".big_img .swiper-wrapper").html("")
        for(var j = 0 ,c = imgBox.length; j < c ;j++){
         jQuery(".big_img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + imgBox.eq(j).attr("data-img") + '" / ></div></div>');
        }
        mySwiper20.updateSlides();
        mySwiper20.pagination.update();
        jQuery(".big_img").css({
            "z-index": 1000000,
            "opacity": "1"
        });
        mySwiper20.slideToLoop(i, 0, false);
        return false;
    });
    
    jQuery('.tabs a').click(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active1').siblings().removeClass('active1');
		jQuery('.tablist .tlist').eq(index).addClass('active1').siblings().removeClass('active1');
	});
	
	jQuery('.job-tit a').click(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active1').siblings().removeClass('active1');
		jQuery('.tablist .tlist').eq(index).addClass('active1').siblings().removeClass('active1');
	});
	
	
	jQuery('.t_list li').mouseover(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active_t').siblings().removeClass('active_t');
		jQuery('.tablist .tlist').eq(index).addClass('active_t').siblings().removeClass('active_t');
	});
	
	jQuery('.t_list1 li').mouseover(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active_t').siblings().removeClass('active_t');
		jQuery('.tablist_1 .tlist').eq(index).addClass('active_t').siblings().removeClass('active_t');
	});
	
	jQuery('.t_list2 li').mouseover(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active_t').siblings().removeClass('active_t');
		jQuery('.tablist_2 .tlist').eq(index).addClass('active_t').siblings().removeClass('active_t');
	});
	
	jQuery('.t_list3 li').mouseover(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active_t').siblings().removeClass('active_t');
		jQuery('.tablist_3 .tlist').eq(index).addClass('active_t').siblings().removeClass('active_t');
	});
	
	jQuery('.t_list4 li').mouseover(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active_t').siblings().removeClass('active_t');
		jQuery('.tablist_4 .tlist').eq(index).addClass('active_t').siblings().removeClass('active_t');
	});
    
     jQuery(".close,.cell img").on("click", 
    function() {
        jQuery('.big_img').css({
            "z-index": "-1",
            "opacity": "0"
        });

    });


	//alert(cate_len);
	jQuery(window).resize(function() {

		if(screenWidth <= 1366) {
			cate_len = 7;
		} else if(screenWidth < 1024) {
			cate_len = 6;
		} else if(screenWidth < 768) {
			cate_len = 5;
		}

		if(jQuery(".cate_bk a").length >= cate_len) {

			jQuery('.sub-open').css({
				display: 'block'
			});
		}

	});

})