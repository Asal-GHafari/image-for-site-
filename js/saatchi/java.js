$(function(){
var i=1;var c=0;
var bwidth=400;
$(".le ").click(function(){
	c=c+1;//alert(c);
	$(".slider-previw2 > div > div ").each(function(){
		if(c<11){
			$(this).animate({'top':-300*c},500,'');
		}
	});	
});
	$(".ri ").click(function(){
		if(c>10){c=0;
			$(".slider-previw2 > div > div ").each(function(){
				$(this).animate({'top':0},'slow',"");
			});
		}
	});
});	 