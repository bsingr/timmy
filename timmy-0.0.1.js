(function(){
  timmy = new (function(){
    return function(timmy_data){
      var tmy = this;
      
      var total = timmy_data.length;
      
      var full = 24;
      var rough = 2;
      
      tmy.width = 960;
      tmy.height = 96;
    
      tmy.paper = Raphael(0,0,tmy.width,tmy.height);
      
      var pinR = tmy.height / 12;
      var pinH = tmy.height / 6;
      var pinV = tmy.height / 2;
      
      var yPos = function(pins) {
        var y = "(function(x){ return ";
        for (var i = 0; i < pins.length; i++) {
          y += "(x-"+pins[i]+")";
          if (pins.length-1 > i) {
            y+= "*";
          }
        };
        y += "; })";
        return y;
      };
      
      var pin = function(x, pin_data) {
        tmy.paper.circle(x * tmy.width, pinV, pinR);
      };
      
      var y = yPos(timmy_data)+"("+8+")";
      console.log(y);
      console.log(eval(y));
      
      // line
      var line = tmy.paper.path("M0 "+tmy.height/2+" L"+tmy.width+" "+tmy.height/2);
          
      // legend
      for (var i = 0; i < full; i++) {
        var x = i / full * tmy.width;
        var line = tmy.paper.path("M"+x+" 0 L"+x+" "+tmy.height);
        if (i % rough) {
          line.attr("stroke", "red");
        } else {
          line.attr("stroke", "green");
          line.attr("stroke-width", 0.5)
        }
      }
    
      // data
      for (var i = 0; i < total; i++) {
        pin(timmy_data[i]/full, timmy_data[i]);
      }
    
    };
  })();
})();