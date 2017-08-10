$(function(){

  //Часы
  var timeDay = setTimeout(function time(){
  var day = new Date();
  if(day.getHours()<10){
    $('#hour').html('0'+day.getHours());       
  }else{
    $('#hour').html(day.getHours());       
  }  
  if(day.getMinutes()<10){
    $('#minute').html('0'+day.getMinutes());       
  }else{
    $('#minute').html(day.getMinutes());       
  }  
  if(day.getSeconds()<10){
    $('#sec').html('0'+day.getSeconds());       
  }else{
    $('#sec').html(day.getSeconds());       
  }    
  timeDay = setTimeout(time,1000);
  },0);

  //Звуки
  var toggleSound = {
    rain: 0,
    forest: 0,
    bonfire: 0,
    sea:0
  }

  $('#rainClick').mousedown(function(){
    if(toggleSound.rain == 0){
      toggleSound.rain = 1;  
      $('.soundRain').html('<audio src="sound/rain.mp3" loop autoplay></audio>');
      $('#rainClick').css('border','1px solid #B8B5A0'); 
    }else if(toggleSound.rain == 1){
      toggleSound.rain = 0; 
      $('.soundRain').html('');
      $('#rainClick').css('border','none'); 
    }
  });  

  $('#forestClick').mousedown(function(){
    if(toggleSound.forest == 0){
      toggleSound.forest = 1;  
      $('.soundForest').html('<audio src="sound/forest.mp3" loop autoplay></audio>');
      $('#forestClick').css('border','1px solid #B8B5A0'); 
    }else if(toggleSound.forest == 1){
      toggleSound.forest = 0; 
      $('.soundForest').html('');
      $('#forestClick').css('border','none'); 
    }
  });  

  $('#bonfireClick').mousedown(function(){
    if(toggleSound.bonfire == 0){
      toggleSound.bonfire = 1;  
      $('.soundBonfire').html('<audio src="sound/bonfire.mp3" loop autoplay></audio>');
      $('#bonfireClick').css('border','1px solid #B8B5A0'); 
    }else if(toggleSound.bonfire == 1){
      toggleSound.bonfire = 0; 
      $('.soundBonfire').html('');
      $('#bonfireClick').css('border','none'); 
    }
  }); 

  $('#seaClick').mousedown(function(){
    if(toggleSound.sea == 0){
      toggleSound.sea = 1;  
      $('.soundSea').html('<audio src="sound/sea.mp3" loop autoplay></audio>');
      $('#seaClick').css('border','1px solid #B8B5A0'); 
    }else if(toggleSound.sea == 1){
      toggleSound.sea = 0; 
      $('.soundSea').html('');
      $('#seaClick').css('border','none'); 
    }
  }); 


});