
// var flip = 0;
// $( "button" ).on( "click", function() {
//   $( ".image" ).toggle( flip++ % 2 === 0 );
// });

$( function() {
  $( "#tabs" ).tabs();
} );

var flip = 0;
$( "button" ).on( "click", function() {
$( ".image" ).toggle( flip++ % 2 === 0 );
//   $(".image").css("display", "flex");
//   $(".image").css("flex-direction", "column");
});