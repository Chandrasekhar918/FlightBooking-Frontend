import React from "react";
import "./carousel.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Carousel(){
    return(

      <div>
       
              <img src="https://fullhdpictures.com/wp-content/uploads/2016/06/Airlines-Wallpaper.jpg" 
              height="400px" width="1525px"
              class="pic"/>
  
<div>

<h3 id="w1">Travel Blog</h3>


    <Card sx={{ maxWidth: 270 }} id="c1" >
      <CardMedia
        component="img"
        
        height="120"
        image="https://www.easemytrip.com/images/offer-img/a-trip-to-dubai-hp.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          A Trip through Flavours Of Dubai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dubai, ‘the land of Gold’ is one of the most cosmopolitan cities in the world. The city is on everyone’s list and offers unforgettable experiences to all visitors.
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{ maxWidth: 270 }} id="c2">
      <CardMedia
        component="img"
        
        height="120"
        image="https://media.easemytrip.com/media/Blog/India/637975525656984536/637975525656984536ebhKpx.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
      Top 10 Must-Visit Beaches of Gujrat
        </Typography>
        <Typography variant="body2" color="text.secondary">
        As the coastline of Gujarat extends as long as 1666 Km, hence it is a warm state, therefore the winters are quite pleasant. 
        </Typography>
      </CardContent>
     
    </Card>


    <Card sx={{ maxWidth: 270 }} id="c3">
      <CardMedia
        component="img"
        
        height="120"
        image="https://media.easemytrip.com/media/Blog/India/637968615251264641/637968615251264641QbTNAV.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
  3 Reasons Why Gift Cards are Better
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In modern times, however, it has become extremely difficult to choose the right gifts for your loved ones. At such times, the concept of gift cards comes in handy.
        </Typography>
      </CardContent>
 
    </Card>

    
    <Card sx={{ maxWidth: 270 }} id="c4">
      <CardMedia
        component="img"
        
        height="120"
        image="https://media.easemytrip.com/media/Blog/India/637959048606244752/637959048606244752c4YDJr.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
Beautiful Things you shouldnt miss in Vatican City
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The seat of the Catholic Church, The Vatican City is considered the most sacred place in the Catholic Christian community. Located within Rome in Italy.
        </Typography>
      </CardContent>
 
    </Card>

    


  


</div>



              
              

      
     </div>
    );
}
export default Carousel;