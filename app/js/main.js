$(function(){

  //Часы
  var timeDay = setTimeout(function time(){
  var day = new Date();
  if(day.getHours()<10){
    $('#hour').html('0'+day.getHours());  
    hourPlusZero = $('#hour').html();     
  }else{
    $('#hour').html(day.getHours());     
    hourPlusZero = $('#hour').html();     
  }  
  if(day.getMinutes()<10){
    $('#minute').html('0'+day.getMinutes());
    minPlusZero = $('#minute').html();       
  }else{
    $('#minute').html(day.getMinutes());  
    minPlusZero = $('#minute').html();         
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
      $('#rainClick').css('border','1px solid transparent'); 
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
      $('#forestClick').css('border','1px solid transparent'); 
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
      $('#bonfireClick').css('border','1px solid transparent'); 
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
      $('#seaClick').css('border','1px solid transparent'); 
    }
  }); 

  var alaram = {
    hour: 0,
    min: 0
  };

  var hourPlusZero, minPlusZero;

  var counterStartAlarm = 0;  
  var buttonStart = 'запустить';
  $('.startAlarm').html(buttonStart);

  function hourScore(){
    if(alaram.hour < 10){
      $('.hoursAlarm').html('0'+alaram.hour);
    }else{
      $('.hoursAlarm').html(alaram.hour);
    }    
  }
  hourScore();

  function minScore(){
    if(alaram.min < 10){
      $('.MinutesAlarm').html('0'+alaram.min);
    }else{
      $('.MinutesAlarm').html(alaram.min);
    }
  }
  minScore();

  $('#alaramHourPlus').mousedown(function(){
    if(alaram.hour < 23){
      alaram.hour++;
      hourScore();
    }else{
      alaram.hour = 0;
      hourScore();      
    }
  });
  $('#alaramHourMinus').mousedown(function(){
    if(alaram.hour > 0){
      alaram.hour--;
      hourScore();
    }else{
      alaram.hour = 23;
      hourScore();      
    }
  });

  $('#alaramMinutePlus').mousedown(function(){
    if(alaram.min < 59){
      alaram.min++;
      minScore();
    }else{
      alaram.min = 0;
      minScore();      
    }
  });
  $('#alaramMinuteMinus').mousedown(function(){
    if(alaram.min > 0){
      alaram.min--;
      minScore();
    }else{
      alaram.min = 59;
      minScore();     
    }
  });

  $('.startAlarm').mousedown(function(){  
    if(buttonStart == 'запустить'){
      buttonStart = 'отмена';
      $('.startAlarm').html(buttonStart);
      counterStartAlarm = 1;
      goT();
    }else if(buttonStart == 'стоп'){
      buttonStart = 'запустить';
      $('.startAlarm').html(buttonStart);
      counterStartAlarm = 0;
      $('.soundAlarm').html('');
    }else {
      buttonStart = 'запустить';
      $('.startAlarm').html(buttonStart);
      counterStartAlarm = 0;
    }
  });

  function goT(){
    if(counterStartAlarm == 1){
      var opacityTime = setTimeout(function goOpacity(){
        $('.alarmClock').css('opacity','0.5');
        setTimeout(function(){
          $('.alarmClock').css('opacity','1');
        }, 500);
        if(counterStartAlarm == 1){
          opacityTime = setTimeout(goOpacity, 1000);              
        }
      },0);
    }  
  }

  var timeA = setTimeout(function goTime(){
    if(counterStartAlarm == 1 && hourPlusZero == alaram.hour && minPlusZero == alaram.min){
      buttonStart = 'стоп';
      $('.startAlarm').html(buttonStart);
      counterStartAlarm = 0;
      $('.soundAlarm').html('<audio src="sound/alarm.mp3" loop autoplay></audio>');
    }   
    timeA = setTimeout(goTime, 1000);
  },0);


  


});