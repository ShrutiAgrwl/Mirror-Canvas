var a, b, color='#ff0000';
var move = false;
w = window.innerWidth;
h = window.innerHeight-55;

window.onload = function(){
    var range = document.getElementById('range');
    var output = document.getElementById('output');

    var colorpicker = document.getElementById('color');

    colorpicker.onchange = function(){
        color = colorpicker.value;
    }

    range.onchange = function(){
        output.innerHTML = range.value;
    }

    //original canvas
    var sketch1 = function(s1){
        s1.setup = function(){
            if(w <= h){
                s1.createCanvas(w, h/2);
            }
            else{
                s1.createCanvas(w/2-5, h);
        
            }
            s1.background(0);
            hue = 0;
        }
        s1.draw = function(){
            a = s1.mouseX;
            b = s1.mouseY;
        }
        s1.mouseDragged = function(){
            move = true;
            s1.noStroke();
            s1.fill(color);
            s1.ellipse(s1.mouseX,s1.mouseY, range.value*4, range.value*4);
        }
        s1.mouseReleased = function(){
            move = false;
        }
    }

    //mirror canvas
    var sketch2 = function(s2){
        s2.setup = function(){
            if(w <= h){
                s2.createCanvas(w, h/2);
            }
            else{
                s2.createCanvas(w/2-5, h);
            }
            s2.background(80);
        }
        s2.draw = function(){
            s2.noStroke();
            s2.fill(color);
            if(move){
                if(w <= h){
                    s2.ellipse(a,s2.height-b, range.value*4, range.value*4);
                }
                else{
                    s2.ellipse(s2.width-a,b, range.value*4, range.value*4);
                }
            }
        }
    }

var f_sketch = new p5(sketch1, 'sk1');
var s_sketch = new p5(sketch2, 'sk2');
}
