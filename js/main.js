// jQuery(document).ready(function($){
// 	//open-close submenu on mobile
// 	$('.cd-main-nav').on('click', function(event){
// 		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
// 	});
// });



//   <script type="text/javascript" charset="utf-8">
//     $(function() {
//       $(document).endlessScroll({
//         bottomPixels: 500,
//         fireDelay: 10,
//         callback: function(i) {
//           var last_img = $("ul#images li:last");
//           last_img.after(last_img.prev().prev().prev().prev().prev().prev().clone());
//         }
//       });
//     });
//   </script>


var backgroundClasses = ["backgroundSidePink","backgroundSideRed","backgroundSideBlue","backgroundSideGreen"];

var randomClass = backgroundClasses[Math.floor(Math.random()*backgroundClasses.length)];
$('#work-area').addClass(randomClass);
