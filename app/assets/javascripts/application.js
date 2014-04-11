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
  $("h2").fadeOut(1500).fadeIn(1000);
       $("span").delay(2500).fadeOut(600).fadeIn(800);
       $("pre").fadeOut(2000).fadeIn(1000);
       $("h3").fadeOut(2000).fadeIn(1000);
     $(".bio").hide();
            (function() {
                    $("#burn-a").show().animate({top: "0"}, 800, function() {
                      $("#burn-b").fadeIn(1500, function(){
                            $("#burn-c").fadeIn(1500, function(){
                              $("#burn-d").fadeIn("slow", function(){
                                $("#burn-e").fadeIn("slow", function(){
                                  $("#burn-f").fadeIn("slow", function(){
                                    $("#burn-g").fadeIn("slow", function(){
                                      $("#burn-h").fadeIn("slow", function(){
                                        $("#burn-i").fadeIn("slow", function(){
                                          $("#burn-j").fadeIn("slow", function(){
                                            $("#burn-k").fadeIn("slow", function(){
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                      });
                    });
             })();

    function moveSpk(delay){
       $(".spk")[0].setAttribute("src", "https://s3-us-west-2.amazonaws.com/s1portfolio/images/animatedspk2.gif")};

      moveSpk(3000);

});
