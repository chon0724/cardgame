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

function cardset(){ //카드 깔기
   var mixup = shuffle();
      for(var i=0; i<mixup.length; i++){
         var createcard = "<img src='./pic/backimg.jpg' class="+mixup[i]+" width='100px' height='150px'>&nbsp"
         $("#cardground").append(createcard);
      }
}

cardset();

var count = 0;
var checkcard = [];

$(document).ready(function(){
   $(document).on("click","img",function(){ //클릭시 id 값 가져와서 사진 매치 시키기
         if($(this).hasClass($(this).attr('class')) === true){

            $(this).attr('src','./pic/'+$(this).attr('class')+'.jpg');
            checkcard.push($(this).attr('class'));
            count ++;
            console.log(count);

            if(count < 0){
            	document.getElementById(this).onclick = null;
            }












            /*
            if(checkcard.length > 1){
            	if(checkcard[0] === checkcard[1]){
            		console.log(checkcard[0],checkcard[1]);
            		checkcard = [];
            	}
            	else{
            		console.log('false',checkcard[0],checkcard[1]);
            		checkcard = [];
            	}
            }*/
         }
   });
});