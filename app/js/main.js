$(function(){

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

});