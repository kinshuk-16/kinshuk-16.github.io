(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var pro_cat = ['ui','ux','dv','da']

var toggle =function(chip_id,card_class){
	if($(chip_id).hasClass('red')){
		//selected case, unselect it
		$(chip_id).removeClass('red darken-4 white-text')
		//$(card_class).css('display','none')
		$(card_class).each(function(){ //hide all with card_class name
			//if it has any class and that class is selected then let it be else hide
			var flag = true;
			for(var i=0 ;i<pro_cat.length;i++){
				if($(this).hasClass(pro_cat[i]) && $("#"+pro_cat[i]).hasClass('red')){
					flag = false;
				}
			}
			if(flag){
				$(this).css('display','none')
			}
		})

	}else{
		//unselected case, select it
		$(chip_id).addClass('red darken-4 white-text')
		//$(card_class).css('display','block')
		$(card_class).each(function(){ //show all with card_class name
			$(this).css('display','block')
		})
		// for(var i=0 ;i<pro_class.length;i++){
		// 	if(pro_class[i] != card_class){
		// 		$(pro_class[i]).css('display','none')
		// 	}
		// }
	}
	
}

$('#ux').click(function(){
	toggle('#ux','.ux')
});

$('#dv').click(function(){
toggle('#dv','.dv')
	
});

$('#da').click(function(){
toggle('#da','.da')
	
});

$('#ui').click(function(){
toggle('#ui','.ui')
	
});


