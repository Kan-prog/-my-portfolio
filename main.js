
// プロフィールコンテンツアコーディオン
$(document).ready(function(){
  // 名前がクリックされたら
  $(".header-wrapper").click(function(){
    // プロフィールコンテンツを選択
    var content = $("#profile");
    // プロフィールコンテンツが非表示の場合は
    if (!content.is(":visible")){
      // プロフィールコンテンツを表示
      content.slideDown();
      $("#tag").html("▲");
    }
    return false;
  });
  // プロフィールコンテンツ以外がクリックされたら
  $("div:not(#profile,.header-wrapper)").click(function(){
    
    var content = $("#profile");
    // プロフィールコンテンツが表示されている場合は
    if (content.is(":visible")){
    // プロフィールコンテンツを非表示
      content.slideUp();
      $("#tag").html("▼");
    }
    // return false;
  });
});

// // サイドバー移動機能
// function updateButton(){
//   if ($(this).scrollTop()>=300){
//     $("#gnav").fadeIn();
//   }else{
//     $("#gnav").fadeOut();
//   }
// }

$(document).ready(function(){
  // updateButton();

  // // スクロールされる度にupdateButtonを実行
  // $(window).scroll(updateButton);

  // topへ移動
  $("#to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });
  // aboutへ移動
  $("#to-about").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      600
    );
    return false;
  });
  // worksへ移動
  $("#to-works").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#works").offset().top
      },
      600
    );
    return false;
  });
  // contactへ移動
  $("#to-contact").click(function() {
    $("html, body").animate(
      {
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
    handler: function(direction){
      // 下がっているときにfadeInUpがつく
      if (direction === "down"){
        $(this.element).addClass("fadeIn");
        // 一度きり
        this.destroy();
      }
    },
    // 残り70%でフェードイン
    offset: "70%"    
  })
})












