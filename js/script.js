// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan); 

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50

	 }, 1250, 'easeOutQuad'); //swing dan linear

	// bisa divariasikan di jquery easing gsgd.co.uk

	e.preventDefault();

});

// Parallax
// 1. Jumbotron dikenakan efek : fixed background scrolling body
// 2. Jumbotron dikenakan efek : kecepatan yang berbeda pada elemen-elemen jumbotron
// 3. Portfolio : efek landing elemen;

// About
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
})

$(window).scroll(function(){
	var wScroll=$(this).scrollTop();

// Jumbotron
	$(".jumbotron img").css({
		"transform" : "translate(0px, "+ wScroll/4 +"%)"
	});

	$(".jumbotron h1").css({
		"transform" : "translate(0px, "+ wScroll/2 +"%)"
	});

	$(".jumbotron p").css({
		"transform" : "translate(0px, "+ wScroll/3 +"%)"
	});

//portfolio
 if (wScroll > $('.portfolio').offset().top - 250) {
    $('.portfolio .thumbnail').each(function(i){
    	setTimeout(function(){
    		$('.portfolio .thumbnail').eq(i).addClass('muncul');
    	}, 300 * (i+1));
    });
  }
});

