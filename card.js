function gamerestart(){//게임 다시 시작 (페이지 다시 로딩)
	window.location.reload(true);
}

function shuffle(){// 카드 섞기
	var carddeck = [
	'card1',
	'card2',
	'card3',
	'card4',
	'card5',
	'card1',
	'card2',
	'card3',
	'card4',
	'card5',
	]
	var j,x,i;
	for(i = carddeck.length; i; i -= 1) {
		j = Math.floor(Math.random() * i);
		x = carddeck[i - 1];
		carddeck[i-1] = carddeck[j];
		carddeck[j] = x;
	}
	return carddeck;
}

for(var i=0; i<shuffle().length; i++){//카드 깔기
	var createcard = "<img src='./pic/backimg.jpg' class=deck id="+shuffle()[i]+" width='100px' height='150px'>&nbsp"
	$("#cardground").append(createcard);
}


$(document).ready(function(){ 
	$(document).on("click",".deck",function(){ //클릭시 id 값 가져와서 사진 바꿔치기
		var id_check = $(this).attr("id");
		console.log(id_check);
	});
});


