// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

 $(document).ready(function() {
	function moveSpk(delay){
	$(".spk")[0].setAttribute("src","https://s3-us-west-2.amazonaws.com/s1portfolio/images/animatedspk2.gif")
	};
  $("h2").fadeOut(1500).fadeIn(1000);
	$("span").delay(2500).fadeOut(600).fadeIn(800);
	$("pre").fadeOut(2000).fadeIn(1000);
  $("h3").fadeOut(2000).fadeIn(1000);
  moveSpk(3000);

$(function() {


    var $test = $('#test');
    var initText = $.trim($test.text()), ptr = 0;
    var timer = setInterval(function() {
        var ln = $.trim($test.find('.trans').text().length);
        if (ln == initText.length) {
            $test.empty();
            clearInterval(timer);
        }

        $('#test').html(function() {

            return $('<span>').addClass('removeMe')
                .html(initText.substring(ptr++ , ptr))
                .before($('<span>').addClass('trans').
                       html(initText.substring(0 , ptr-1)))
                .after(initText.substring(ptr));
        }).find('span.removeMe').animate({'opacity': 0}, 200);

    }, 300);
});
});
