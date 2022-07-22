$(".menu").hover(
function(){
    $(".sub-menu").slideDown("slow");
},
function(){
    $(".sub-menu").slideUp("fast");
}
);


var slide = $(".slide > img"); //slide 변수는 header 아래에 있는 이미지들이다.
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoslide()",3000);   //3초만에 이미지 자동 슬라이드 

function autoslide() {
	$(slide[sno]).stop().animate({
		left: "100%"
	},1000,function(){
		$(this).css({left:"-100%"});
	});
	sno++;
	if(sno > eno) sno = 0;
	$(slide[sno]).stop().animate({
		left: "0"
	},1000);
} 


function openPop() {
    $("#pop").show("slow");
}

function closePop() {
    $("#pop").hide("fast");
}

