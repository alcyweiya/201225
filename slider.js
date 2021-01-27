

onload  = start;

function start()
{	
    var i = 1;
    function Move()
            { 	
                i = (i%4)+1; // 4 is the Number of image in slider
                document.getElementById('i'+i).checked = true;
            }
    setInterval(Move,3000); //change img in 3 sec
}



    var counter = 1;
    setInterval(function(){
          for(var i = 1; i < 4; i++)
          {
              if(document.getElementById('radio' + i).checked)
              {
                 counter = i+1;
                 if(counter > 3){
                 counter = 1;}
  
              }
          }
          document.getElementById('radio' + counter).checked = true;
          
        }, 8000);
