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


	//首焦轮播
	var i = 0;
	var $imgBox = $('#focus .focus_mid .img_box');
	var newLi = $('#focus .focus_mid .img_box li').first().clone();
	$imgBox.append(newLi);

	var size = $('#focus .focus_mid .img_box li').size();

	var $page = $('#focus .focus_mid .slide .nav_box li');
	$page.hover(function(){
		var index = $(this).index();
		i = index;
		move();
	})

	var $btn_left = $('#focus .focus_mid .slide .btn_left');
	$btn_left.click(function(){
		i++;
		move();
	})

	var $btn_right = $('#focus .focus_mid .slide .btn_right');
	$btn_right.click(function(){
		i--;
		move();
	})

	var t=setInterval(function(){
		i++;
		move()
	},2000)

	var $slide = $('#focus .focus_mid .slide');
	$imgBox.hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},2000)
	})

	function move(){
		if(i == size){
			$imgBox.css('left',0);
			i = 1;
		}
		if(i == -1){
			$imgBox.css('left',-(size-1)*560);
			i = size - 2;
		}

		$imgBox.stop().animate({left:-i*560},500);

		if(i == size){
			$page.eq(0).addClass('on').siblings().removeClass('on');
		}else{
			$page.eq(i).addClass('on').siblings().removeClass('on');
		}
	}
	


})