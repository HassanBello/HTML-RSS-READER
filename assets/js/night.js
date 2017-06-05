(function toggleNightMode() {
 
  var backgroundColor = document.getElementById('rss').rssfeed.item.bgcolor;
  
    
  if (backgroundColor == "white") {
        //document.getElementById('mydiv').style.color="white";
        document.getElementById('rss').rssfeed.item.bgcolor="black";
        //document.getElementById('mydiv').style.fontFamily="Arial";
        
    } else {
       /* document.getElementById('mydiv').style.color="black"; */
        document.getElementById('rss').rssfeed.item.bgcolor="white";
//        document.getElementById('mydiv').style.fontFamily="Times New Roman";
    }
}
) (jquery);