jQuery(function(){

var swiper_ban = new Swiper('.index_ban', {
	        spaceBetween: 0,
			autoplay: {
		        delay: 3000,
		        disableOnInteraction: false,
		    }, 
	        loop:true,
			pagination: {
				el: '.ban-pagination',
				clickable :true,
				//type:'fraction',
			},
		    navigation: {
		        nextEl: '.inext',
		        prevEl: '.iprev',
		    },
	});
	
	var ilist = new Swiper('#ilist-1', {
		    spaceBetween: 0,
//		    centeredSlides: true,
            slidesPerView: 5,
		    autoplay:true,
		    observer: true, //开启动态检查器，监测swiper和slide
		    observeParents: true,
		    loop:true,
		    pagination: {
				    el: '.ho-pagination',
				    clickable :true,
				  },
			navigation: {
			nextEl: '.ho-next',
			prevEl: '.ho-prev',
		},
		    on:{
	            init: function(swiper){ //console.log(Date.parse(new Date()))
	              jQuery('#ilist-1 .js-respimg').each(function(i){
	                var ratioW = jQuery(this).attr("data-ratioW"),
	                    ratioH = jQuery(this).attr("data-ratioH"),
	                    fludwth = jQuery(this).parent().width();
	                var ratio = ratioW/ratioH;
	                jQuery(this).width(parseInt(fludwth));
	                jQuery(this).height(parseInt(fludwth/ratio));
	               });
	            },
		    },
            breakpoints: {
		        1024: {
		          slidesPerView: 3,
		        },
		        640: {
		          slidesPerView: 1,
		        }
		        
		    }
    });
	
	jQuery('.tab a').hover(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active1').siblings().removeClass('active1');
		jQuery('.tablist1 .tlist1').eq(index).addClass('active1').siblings().removeClass('active1');
	});
	
	var ilist2 = new Swiper('#ilist-2', {
		    speed: 1000,
		    spaceBetween: 20,
            slidesPerView: 5,
		    autoplay:true,
		    observer: true, //开启动态检查器，监测swiper和slide
		    observeParents: true,
		    loop:true,
//		    navigation: {
//			nextEl: '.ho-next',
//			prevEl: '.ho-prev',
//		},
		    on:{
	            init: function(swiper){ //console.log(Date.parse(new Date()))
	              jQuery('#ilist-2 .js-respimg').each(function(i){
	                var ratioW = jQuery(this).attr("data-ratioW"),
	                    ratioH = jQuery(this).attr("data-ratioH"),
	                    fludwth = jQuery(this).parent().width();
	                var ratio = ratioW/ratioH;
	                jQuery(this).width(parseInt(fludwth));
	                jQuery(this).height(parseInt(fludwth/ratio));
	               });
	            },
		    },
            breakpoints: {
		        1024: {
		          slidesPerView: 4,
		        },
		        640: {
		          slidesPerView: 1,
		        }
		        
		    }
    });
	
	
	jQuery('.tabs a').click(function() {
		var index = jQuery(this).index();
		jQuery(this).addClass('active').siblings().removeClass('active');
		jQuery('.tablist .tlist').eq(index).addClass('active').siblings().removeClass('active');
	});
	
	var ilisth1 = new Swiper('#ilist-h1', {
		    speed: 1000,
		    spaceBetween: 0,
            slidesPerView: 1,
		   // autoplay:true,
		    observer: true, //开启动态检查器，监测swiper和slide
		    observeParents: true,
		    loop:true,
 		    pagination: {
				    el: '.ho-ilist1',
				    clickable :true,
				  }, 
		    on:{
	            init: function(swiper){ //console.log(Date.parse(new Date()))
	              jQuery('#ilist-h1 .js-respimg').each(function(i){
	                var ratioW = jQuery(this).attr("data-ratioW"),
	                    ratioH = jQuery(this).attr("data-ratioH"),
	                    fludwth = jQuery(this).parent().width();
	                var ratio = ratioW/ratioH;
	                jQuery(this).width(parseInt(fludwth));
	                jQuery(this).height(parseInt(fludwth/ratio));
	               });
	            },
		    },
    });
	
	var ilisth2 = new Swiper('#ilist-h2', {
		    speed: 1000,
		    spaceBetween: 0,
            slidesPerView: 1,
		   // autoplay:true,
		    observer: true, //开启动态检查器，监测swiper和slide
		    observeParents: true,
		    loop:true,
 		    pagination: {
				    el: '.ho-ilist2',
				    clickable :true,
				  }, 
		    on:{
	            init: function(swiper){ //console.log(Date.parse(new Date()))
	              jQuery('#ilist-h2 .js-respimg').each(function(i){
	                var ratioW = jQuery(this).attr("data-ratioW"),
	                    ratioH = jQuery(this).attr("data-ratioH"),
	                    fludwth = jQuery(this).parent().width();
	                var ratio = ratioW/ratioH;
	                jQuery(this).width(parseInt(fludwth));
	                jQuery(this).height(parseInt(fludwth/ratio));
	               });
	            },
		    },
    });
    
    	var ilisth3 = new Swiper('#ilist-h3', {
		    speed: 1000,
		    spaceBetween: 0,
            slidesPerView: 1,
		   // autoplay:true,
		    observer: true, //开启动态检查器，监测swiper和slide
		    observeParents: true,
		    loop:true,
 		    pagination: {
				    el: '.ho-ilist3',
				    clickable :true,
				  }, 
		    on:{
	            init: function(swiper){ //console.log(Date.parse(new Date()))
	              jQuery('#ilist-h3 .js-respimg').each(function(i){
	                var ratioW = jQuery(this).attr("data-ratioW"),
	                    ratioH = jQuery(this).attr("data-ratioH"),
	                    fludwth = jQuery(this).parent().width();
	                var ratio = ratioW/ratioH;
	                jQuery(this).width(parseInt(fludwth));
	                jQuery(this).height(parseInt(fludwth/ratio));
	               });
	            },
		    },
    });
    
    
    var ilisth4 = new Swiper('#ilist-h4', {
		    speed: 1000,
		    spaceBetween: 0,
            slidesPerView: 1,
		   // autoplay:true,
		    observer: true, //开启动态检查器，监测swiper和slide
		    observeParents: true,
		    loop:true,
 		    pagination: {
				    el: '.ho-ilist4',
				    clickable :true,
				  }, 
		    on:{
	            init: function(swiper){ //console.log(Date.parse(new Date()))
	              jQuery('#ilist-h4 .js-respimg').each(function(i){
	                var ratioW = jQuery(this).attr("data-ratioW"),
	                    ratioH = jQuery(this).attr("data-ratioH"),
	                    fludwth = jQuery(this).parent().width();
	                var ratio = ratioW/ratioH;
	                jQuery(this).width(parseInt(fludwth));
	                jQuery(this).height(parseInt(fludwth/ratio));
	               });
	            },
		    },
    });

    var ilisth5 = new Swiper('#ilist-h5', {
		    speed: 1000,
		    spaceBetween: 0,
            slidesPerView: 1,
		   // autoplay:true,
		    observer: true, //开启动态检查器，监测swiper和slide
		    observeParents: true,
		    loop:true,
 		    pagination: {
				    el: '.ho-ilist5',
				    clickable :true,
				  }, 
		    on:{
	            init: function(swiper){ //console.log(Date.parse(new Date()))
	              jQuery('#ilist-h5 .js-respimg').each(function(i){
	                var ratioW = jQuery(this).attr("data-ratioW"),
	                    ratioH = jQuery(this).attr("data-ratioH"),
	                    fludwth = jQuery(this).parent().width();
	                var ratio = ratioW/ratioH;
	                jQuery(this).width(parseInt(fludwth));
	                jQuery(this).height(parseInt(fludwth/ratio));
	               });
	            },
		    },
    });
	   
/*end*/    
})


