/*global $*/
$(function() {
//add width to intro element
const mrCont = $('.container').css('margin-left');
var box_left_w = $('.box-left').width(),
intro_box = $('.box-left .intro'),
nav_bar_box = $('.box-left .left_bar').width(),
val_wd = nav_bar_box - Number(mrCont.slice(0, mrCont.length - 3));
intro_box.css({
    width: (box_left_w - val_wd) + 'px',
    marginLeft: val_wd + 'px'
});
intro_box.find('div h1').css('width', (box_left_w - val_wd) + 'px');
// start menu 
var menu = $('.box-right .head .menu span'),
list = $('.box-right .head .list-menu');
function toglList(elt1, elt2) {
    if (elt1.hasClass('hide')) {
        elt2.css('width', '70%');
        elt1.removeClass('hide');
    } else {
        elt2.css('width', '0%');
        elt1.addClass('hide');
    }
}
menu.on('click', function () {
     toglList($(this), list);
});
// start create function for hide and show element
function showHideBoxs(elt) {
    // 11.8%
    $('#' + elt.attr('data-id')).siblings('.product').fadeOut(300).animate({
        top:100 + '%'
    }, 200)
      $('#' + elt.attr('data-id')).fadeIn(200).animate({
          top:75 + 'px'
      }, 500);
      elt.addClass('active').parent().siblings().find('a').removeClass('active');
}
$('.box-right .head .list-menu li a').on('click', function(e) {
    e.preventDefault();
    showHideBoxs($(this));
})
// start gere effecet backgound size to intro background
var intro = $('.box-left .intro');
window.onload = () => {
    intro.css('background-size', '100% 100%')
  };
// start gere hover a social web site link
 const links = $('.box-left .left_bar ul li a');
 function scaleHover1(elt) {
     elt.hover(function() {
        $(this).css({
            transform:'scale(1.1)'
        }).parent().siblings().find('a').css({
            transform: 'scale(0.9)'
        })
        
         
     }, function() {
         $(this).css({
             transform:'scale(1)'
         }).parent().siblings().find('a').css({
            transform: 'scale(1)'
        })

     });
    
 } 
 
 scaleHover1(links);



});
