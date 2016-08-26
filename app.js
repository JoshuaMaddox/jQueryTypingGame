$(document).ready(function(){
	$('.keyboard').append(keys.slice(36).join(''));
	setDataAttr();
	$('button').on('click', function (){
		keyCount = 0;
		$("img").removeClass('correctKey');
	});

	$(document).on('keydown', function(event){
		var keyPressed = event.key.toUpperCase();
		if(!/[^a-zA-Z0-9]/.test(keyPressed) && !$("[data-key-value='" + keyPressed + "']").hasClass('correctKey')) {
			keyCount += 1
			$("[data-key-value='" + keyPressed + "']").addClass('correctKey');
		}
		if(keyCount === 36){
			$(".messages").show().text('');
			$('.messages').text('You Win! Click the Green Button to play again!');
		}	
	});
});

function setDataAttr(){
	for(var i = 0; i < 36; i++){
		document.getElementsByTagName("img")[i].setAttribute("data-key-value", keys[i]);	
	}
}

var keyCount = 0;

var keys = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 
	"Q","W","E","R","T","Y","U","I","O","P",
	"A","S","D","F","G","H","J","K","L",
	"Z","X","C","V","B","N","M",
	"<div class='row1 col-md-8 col-md-offset-2'><img class='key' alt='red colored key' src='http://i.imgur.com/m9NAgnC.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/ZwGXc73.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/0Xwe1B1.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/n5tilIp.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/Oe60ih5.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/Jksb80s.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/Plxintt.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/IRLPVWf.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/NLujUNN.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/h22ojqV.png'></div>",
	"<div class='row2 col-md-8 col-md-offset-2'><img class='key' alt='red colored key' src='http://i.imgur.com/lRK77Ov.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/gW6mcWD.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/avOrKrO.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/ebTN2Gz.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/dm6ov9i.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/5sEz5BG.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/lBnygEu.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/gBunrua.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/Z8JunEx.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/pId6xz3.png'></div>",
	"<div class='row3 col-md-8 col-md-offset-2'><img class='key' alt='red colored key' src='http://i.imgur.com/wg2UroS.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/lSFWuPz.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/qDkoLbj.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/V1Crv6t.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/A0i4x6a.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/S5qkAnn.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/qFVbADl.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/GWheUSB.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/AadAtl8.png'></div>",
	"<div class='row4 col-md-8 col-md-offset-2'><img class='key' alt='red colored key' src='http://i.imgur.com/QbECld4.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/GEVvXAB.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/fimXeYp.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/bXFPGF3.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/EPZWwSt.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/bBMYY4O.png'>",
	"<img class='key' alt='red colored key' src='http://i.imgur.com/SGWU0UU.png'></div>",
];


