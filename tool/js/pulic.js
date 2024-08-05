(function(){
        var  $$ = window.jQuery; 
        if($$ == undefined){console.error('jQuery is not undefined');return;}
        var _sdot = $$('.sdot'),
            _sclose = $$('.sclose'),
            _index_ban = $$('.index_ban'),
            _search = $$('.search');

   
        // 当_sdott被点击时，显示搜索框
        _sdot.on('click',function(){$$('.search').show()})   
         // 当_sclose被点击时，隐藏搜索框
         _sclose.on('click',function(){ $$('.search').hide()})

        //搜索框添加esc事件
         function RemoveOff(){$(document).off('keydown',KeyEsc)}
        var  KeyEsc = function(eventValue){
            if (eventValue.keyCode == 27) {
                $$('.text1').val('');$$('.search').hide();RemoveOff();
             }
        }
         _search.on('mouseenter',function(){$$(document).on('keydown',KeyEsc)})

        //幻灯
         if(_index_ban.length>0){
            new Swiper('.index_ban', {
                spaceBetween: 0,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                }, 
                loop:true,
            });
         }

       
})()

