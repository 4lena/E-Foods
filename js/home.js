let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
  /*                                 */
  
  var themebutton= document.getElementById("icon");
  
  if(localStorage.getItem("theme") == null){
	 localStorage.setItem("theme", "light"); 
  }
  
  let localData = localStorage.getItem("theme");
  
  if(localData == "light"){
	  themebutton.src="images/moon.png";
	  document.body.classList.remove("dark-theme");
  }else if(localData == "dark"){
	  themebutton.src="images/sun.png";
	  document.body.classList.add("dark-theme");
	  
	  
  }



	themebutton.onclick = function(){
	document.body.classList.toggle("dark-theme");
	
	if(document.body.classList.contains("dark-theme")){
		themebutton.src="images/sun.png";
		localStorage.setItem("theme", "dark");
		
	}else{
		themebutton.src="images/moon.png";
		localStorage.setItem("theme", "light");
	}		
}



    $(document).ready(function(){
        $(".x").mouseover(function(){
            var current= $(this);
            $(".x").each(function(index){
                $(this).addClass("hoverd");
                if(index == current.index())
                {
                    return false;
                }
            });
        });
		
		
        $(".x").mouseleave(function(){
            $(".x").removeClass("hoverd");
        });
        $(".x").click(function(){
            $(".x").removeClass("clicked");
            $(".hoverd").addClass("clicked");  
			$("#message").html("Thank you! the average raitng is: " +
			$(".clicked").length*20 + "%")
        });
    });
	
