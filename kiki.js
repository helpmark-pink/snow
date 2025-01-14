

//logoの表示
$(window).on('load',function(){
	$("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

  
particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 500,//この数値を変更すると雪の数が増減できる
		"density": {
		  "enable": true,
		  "value_area": 800
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "image",//形状は画像を指定
		"stroke": {
		  "width": 3,
		  "color": "#fff"
		},
		"image": {
		  "src": "img/snow.png",//画像を指定
		  "width": 120,
		  "height": 120
		}
	  },
	  "opacity": {
		"value": 0.7,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 5,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 20,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": false,
	  },
	  "move": {
		"enable": true,
		"speed": 2,//この数値を小さくするとゆっくりな動きになる
		"direction": "bottom",//下に向かって落ちる
		"random": true,//動きはランダム
		"straight": false,//動きをとどめない
		"out_mode": "out",//画面の外に出るように描写
		"bounce": false,//跳ね返りなし
		"attract": {
		  "enable": true,
		  "rotateX": 300,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": false,
		},
		"onclick": {
		  "enable": false,
		},
		"resize": true
	  }
	},
	"retina_detect": true
  });	
  
  
