
$(document).ready(function($){

  var nextPage = $("#nextlink")
  var prevPage = $("#prevlink")
  nextUrl = nextPage.attr("href")
  prevUrl = prevPage.attr("href")



  function leftArrowPressed() {
    window.location = prevUrl
  }

  function rightArrowPressed() {
    window.location = nextUrl
  }


 if ($("#nextlink").length) {
   document.onkeydown = function(evt) {
   evt = evt || window.event;
   switch (evt.keyCode) {
   case 37:
   leftArrowPressed();
   break;
   case 39:
   rightArrowPressed();
   break;
   }
   };
 }











  var storedTitle = document.title;

  randomImg();

  setProfileHeight();

  window.onblur=function(){
      //change favicon
      document.title="ハクショウ 斗夢";
      $("#changingFavicon").attr("href", "/images/faviconout.png");
  }
  window.onfocus=function(){
      document.title= storedTitle;
      $("#changingFavicon").attr("href", "/images/favicon.png");
  }


  Marquee3k({
    randomSpeed: true,
  });

  const b = baffle('.baffle', {
    characters: 'Sâ–â–“â–’â–‘',
    speed: 40
});

  b.start();
  b.reveal(400);

  /*
 * Replace all SVG images with inline SVG
 */
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

});


$(window).resize(function(){
  randomImg();
  setProfileHeight();
});




function randomImg(){
  if ($(".random").length) {
    $('.random .contents').each(function(i, ig) {
      if ($(ig).width() > $(ig).height()*1.5) {
        $(ig).css({'width': '50%'});
      }
      var itemWidth = $(ig).width();
      var itemHeight = $(ig).height();
      var posx = (Math.random() * ($('.random').width() - itemWidth)).toFixed();
      var posy = (Math.random() * ($('.random').height() - itemHeight)).toFixed();
      $(ig).css({'top': posy+'px', 'left': posx+'px'});
    });

  }
}

function setProfileHeight() {
  var profileWidth = $('.grainy').width();
  $('.grainy').css("height", profileWidth*1.1725+'px');
}

function runWhitewater(canvas, source, options, mobilefix = false) {

    if ($(window).width() > 800) {
      $('.wwplaceholder').css({'display': 'none'});
      $(canvas).css({'display': 'block'});
      var video = new Whitewater(canvas, source, options);
      $(window).resize(function(){
        if ($(window).width() > 800) {
          $('.wwplaceholder').css({'display': 'none'});
          $(canvas).css({'display': 'block'});
        }
        if ($(window).width() < 800) {
          $('.wwplaceholder').css({'display': 'block'});
          $(canvas).css({'display': 'none'});
        }
      });
    }


}
