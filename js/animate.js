$(document).ready(function(){
  
  $('#element').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#element').addClass('processor');
      $('#element').removeClass('processo');
    } else if (direction === 'up') {
      // hide our content
      $('#element').addClass('processo');
      $('#element').removeClass('processor');
    }
 
  }, { offset: '15%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
 
  $('#ram').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#ram').addClass('ram');
      $('#ram').removeClass('ra');
      $('#lr').addClass('latch-right');
      $('#lr').removeClass('lr');
      $('#ll').addClass('latch-left');
      $('#ll').removeClass('ll');
    } else if (direction === 'up') {
      // hide our content
      $('#ram').addClass('ra');
      $('#ram').removeClass('ram');
      $('#lr').addClass('lr');
      $('#lr').removeClass('latch-right');
      $('#ll').addClass('ll');
      $('#ll').removeClass('latch-left');
    }
 
  }, { offset: '70%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
 
  $('#cool').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#cool').addClass('cool');
      $('#cool').removeClass('cooler');
      $('#scr').addClass('screw');
      $('#scr').removeClass('screws');
      $('#pl').addClass('plate');
      $('#pl').removeClass('pl'); 
    } else if (direction === 'up') {
      // hide our content
      $('#cool').addClass('cooler');
      $('#cool').removeClass('cool');
      $('#scr').addClass('screws');
      $('#scr').removeClass('screw');
      $('#pl').addClass('pl');
      $('#pl').removeClass('plate');
    }
 
  }, { offset: '20%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
 
  $('#pb').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#sd').addClass('sid');
      $('#sd').removeClass('side');
      $('#pob').addClass('pb');
      $('#pob').removeClass('power-block');
    } else if (direction === 'up') {
      // hide our content
      $('#sd').addClass('side');
      $('#sd').removeClass('sid');
      $('#pob').addClass('power-block');
      $('#pob').removeClass('pb');
    }
 
  }, { offset: '38%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
 
  $('#b-hor').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#mb-b').addClass('mb-body');
      $('#mb-b').removeClass('mb-bod');
      $('#vc').addClass('videocard');
      $('#vc').removeClass('videocar');
    } else if (direction === 'up') {
      // hide our content
      $('#mb-b').addClass('mb-bod');
      $('#mb-b').removeClass('mb-body');
      $('#vc').addClass('videocar');
      $('#vc').removeClass('videocard');
    }
 
  }, { offset: '50%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
 
  $('#hdd-b').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#hdd-s').addClass('hdd-slo');
      $('#hdd-s').removeClass('hdd-slot');
      $('#hdd').addClass('hdd');
      $('#hdd').removeClass('hd');
    } else if (direction === 'up') {
      // hide our content
      $('#hdd-s').addClass('hdd-slot');
      $('#hdd-s').removeClass('hdd-slo');
      $('#hdd').addClass('hd');
      $('#hdd').removeClass('hdd');
    }
 
  }, { offset: '18%' });
 
});