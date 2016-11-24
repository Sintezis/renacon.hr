$(document).ready(function(){


	

	var menuButtonHoverActive =  {"color": "white" , "background-color" : " #333"};
	var menuButtonHoverDeactive = {"color": "#666" , "background-color" : " rgba(0, 0, 0, 0)"};


	$(".solutions-menu").hide();
	$(".products-menu").hide();
	$(".knowledge-menu").hide();
	$(".support-menu").hide();
	$(".about-menu").hide();
	$(".news-menu").hide();


/*solutions  */ 
	 $(".solutions-button").click(function(){
	 	 $(".products-button , .knowledge-button , .support-button, .about-button, .news-button ").css(menuButtonHoverDeactive);	 	 
        $(".solutions-button").css(menuButtonHoverActive);
        $(".solutions-menu").slideDown();
	 	$(".products-menu , .knowledge-menu , .support-menu , .about-menu , .news-menu").slideUp();
          });

    $(".menu-close").click(function(){
        $(".solutions-menu").slideUp();
        $(".solutions-button ").css(menuButtonHoverDeactive);
          });


/*products  */ 
    	 $(".products-button").click(function(){
    	 	$(".solutions-button ,.knowledge-button , .support-button ,.about-button , .news-button").css(menuButtonHoverDeactive);
	        $(".products-button").css(menuButtonHoverActive);
	    	$(".solutions-menu , .knowledge-menu , .support-menu , .about-menu , .news-menu").slideUp();
	        $(".products-menu ").slideDown();
          });

    $(".menu-close").click(function(){
        $(".products-menu").slideUp();
        $(".products-button ").css(menuButtonHoverDeactive);
          });



/*knowledge  */ 
     $(".knowledge-button").click(function(){
    	 	$(".solutions-button , .products-button , .support-button , .about-button , .news-button").css(menuButtonHoverDeactive);
	        $(".knowledge-button").css(menuButtonHoverActive);
	    	$(".solutions-menu, .products-menu , .support-menu , .about-menu , .news-menu").slideUp();
	        $(".knowledge-menu").slideDown();
          });

    $(".menu-close").click(function(){
        $(".knowledge-menu").slideUp();
        $(".knowledge-button ").css(menuButtonHoverDeactive);
          });


/*support  */ 
     $(".support-button").click(function(){
    	 	$(".solutions-button , .products-button , .knowledge-button ,.about-button , .news-button").css(menuButtonHoverDeactive);
	        $(".support-button").css(menuButtonHoverActive);
	    	$(".solutions-menu, .products-menu , .support-menu, .knowledge-menu , .about-menu , .news-menu").slideUp();
	        $(".support-menu").slideDown();
          });

    $(".menu-close").click(function(){
        $(".support-menu").slideUp();
        $(".support-button ").css(menuButtonHoverDeactive);
          });

/*about  */ 
     $(".about-button").click(function(){
    	 	$(".solutions-button , .products-button , .knowledge-button ,.support-button , .news-button ").css(menuButtonHoverDeactive);
	        $(".about-button").css(menuButtonHoverActive);
	    	$(".solutions-menu, .products-menu , .support-menu, .knowledge-menu , .support-menu , .news-menu").slideUp();
	        $(".about-menu").slideDown();
          });

    $(".menu-close").click(function(){
        $(".about-menu").slideUp();
        $(".about-button ").css(menuButtonHoverDeactive);
          });


/*news  */ 
     $(".news-button").click(function(){
    	 	$(".solutions-button , .products-button , .knowledge-button ,.support-button ,.about-button").css(menuButtonHoverDeactive);
	        $(".news-button").css(menuButtonHoverActive);
	    	$(".solutions-menu, .products-menu , .support-menu, .knowledge-menu , .support-menu , .about-menu").slideUp();
	        $(".news-menu").slideDown();
          });

    $(".menu-close").click(function(){
        $(".news-menu").slideUp();
        $(".news-button ").css(menuButtonHoverDeactive);
          });





});