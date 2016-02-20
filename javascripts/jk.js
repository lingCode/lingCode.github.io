/*javascript document*/

$(function(){

	var $nav_word_a = $("#navigation .nav_box .nav .nav_word > a");
	var $pop_li = $("#navigation .nav_box .nav .nav_word .popup li");
	$nav_word_a.each(function(index){
		if(index>0){
			$(this).mouseover(function(){
				$pop_li.css({'background':"#fff"});
				$pop_li.eq(index-1).css({'background':"#f7f7f7"});

				$pop_li.find(".arrow").css({'display':'none'});
				$pop_li.eq(index-1).find(".arrow").css({'display':"block"});
			})
		}
		

	})

})