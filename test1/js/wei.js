/*  
* @description: js
* @author: 段亮  
* @update: 段亮(2015-03-26 10:21)  
*/ 
$(function(){ 

	var oBtn = $('#uesrname-btn');
	var oDiv = $('#header-box');
	var oLi = $("#nav-head li");
	oBtn.click(function(){ 
	  	if(oDiv.css("display") != 'none'){ 
	  	
	  		oDiv.slideUp();
	  	
	  	}else{ 

	  		oDiv.slideDown();
		}

	});
	oLi.click(function(){ 
	  	var _index = $(this).index();
	  	oLi.eq(_index).addClass('active').siblings().removeClass('active');
	  	$('.content-text1').eq(_index).show().siblings('div').hide();	

	  	});
	});
