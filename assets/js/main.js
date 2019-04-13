// プロフィールコンテンツアコーディオン
$(document).ready(function() {
  // 名前がクリックされたら
  $(".header-wrapper").click(function() {
    // プロフィールコンテンツを選択
    var content = $("#profile");
    // プロフィールコンテンツが非表示の場合は
    if (!content.is(":visible")) {
      // プロフィールコンテンツを表示
      content.slideDown();
      $("#tag").html("▲");
    }
    return false;
  });
  // プロフィールコンテンツ以外がクリックされたら
  $("div:not(#profile,.header-wrapper)").click(function() {

    var content = $("#profile");
    // プロフィールコンテンツが表示されている場合は
    if (content.is(":visible")) {
      // プロフィールコンテンツを非表示
      content.slideUp();
      $("#tag").html("▼");
    }
    // return false;
  });
});

// サイドバー移動機能

$(document).ready(function() {
  // updateButton();


  // topへ移動
  $("#to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    },
    600
    );
    return false;
  });
  // aboutへ移動
  $("#to-about").click(function() {
    $("html, body").animate({
      scrollTop: $("#about").offset().top
    },
    600
    );
    return false;
  });
  // worksへ移動
  $("#to-works").click(function() {
    $("html, body").animate({
      scrollTop: $("#works").offset().top
    },
    600
    );
    return false;
  });
  // contactへ移動
  $("#to-contact").click(function() {
    $("html, body").animate({
      scrollTop: $("#contact").offset().top
    },
    600
    );
    return false;
  });
})

// waypointsで浮かび上がらせる
$(document).ready(function() {
  // aboutを浮かび上がらせる
  $("#about,#works,#contact").waypoint({
    handler: function(direction) {
      // 下がっているときにfadeInUpがつく
      if (direction === "down") {
        $(this.element).addClass("fadeIn");
        // 一度きり
        this.destroy();
      }
    },
    // 残り70%でフェードイン
    offset: "70%"
  })
})
// 文字アニメーション
// $(document).ready(function(){
  // hoverする
  // $(".top-img").hover(function(){
    // hoverした画像のみに適用
    // $(".top-img:hover").parent().parent().find(".title").show();
    // $(".top-img:hover").parent().parent().find(".title").letterfx({"fx":"spin"});
    // $(".top-img:not(:hover)").parent().parent().find(".title").hide();
  // });
  // カーソルホバーでアニメーション
// });
$(document).ready(function(){
  // hoverする
  $(".top-img").hover(function(){
    // hoverした画像のみに適用
    $(".top-img:hover").parent().parent().find(".title").css({opacity: "0"}).animate({opacity: "1"}, 1500);
    $(".top-img:hover").parent().parent().find(".title").letterfx({"fx":"spin","fx_duration":"2000ms"});
    // hoverしていないものは非表示
    $(".top-img:not(:hover)").parent().parent().find(".title").animate({opacity: "0"}, 500);
  });
  // カーソルホバーでアニメーション
});

// // モーダル
$('.modal').modaal();


// カルーセル

// 現在表示中のスライドが何番目か（0から数え始める）
var currentSlide = 0;

// スライドの全枚数
var numSlides;
// スライド1枚当たりの幅・高さ

var slideWidth
// index（0から始まる）番目のスライドを表示する関数
function showSlide(index) {
  slideWidth = $(".carousel img")[0].clientWidth;
  
  // 1番目のスライドでは左矢印を非表示
  if (index === 0) {
    $(".carousel-control-prev").hide();
  }
  else {
    $(".carousel-control-prev").show();
  }

  // 最後のスライドでは右矢印を非表示
  if (index === numSlides - 1) {
    $(".carousel-control-next").hide();
  }
  else {
    $(".carousel-control-next").show();
  }

  // 実行中のアニメーションがあればキャンセルした後、
  // leftを変化させるアニメーションを開始
  $(".slides").stop().animate({
    left: -slideWidth * currentSlide + "px"
  },
  600
  );
}

$(document).ready(function() {
  // スライドが全部で何枚あるか取得
  numSlides = $(".slides > li").length;
  // 最初のスライドを表示
  showSlide(currentSlide);

  // 左矢印がクリックされたら1つ前のスライドを表示
  $(".carousel-control-prev").click(function() {
    currentSlide--;
    showSlide(currentSlide);
    return false;
  });

  // 右矢印がクリックされたら1つ後のスライドを表示
  $(".carousel-control-next").click(function() {
    currentSlide++;
    showSlide(currentSlide);
    return false;
  });
  console.log(slideWidth);
  console.log($(".carousel img"));
  // console.log(slideWidth);
});

