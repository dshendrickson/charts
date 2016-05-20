// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require light_bootstrap_dashboard
//= require turbolinks
//= require_tree .
//= require_self

function testing(dataIn) {
  var seriesData = (
   'series: ' + dataIn
  );
  alert(seriesData);
}

function lineChart0(dataIn) {
  
  var chartData = dataIn;
 
   new Chartist.Line('#chart0', 
     chartData,
   {
     fullWidth: true,
     chartPadding: {
       right: 40
     }
   });
}
 
function lineChart1(dataIn) {
  
  var chartData = dataIn;
 
   new Chartist.Line('#chart1', 
     chartData,
   {
     fullWidth: true,
     chartPadding: {
       right: 40
     }
   });
}
 
function lineChart2(dataIn) {
  
  var chartData = dataIn;
   
   new Chartist.Bar('#chart2', 
     chartData,
     {
     fullWidth: true,
     chartPadding: {
       right: 40
     }
   });
}
