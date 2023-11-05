function player()	  	  	        			      	        	
{	  	  	        			      	        	
  if(this.innerHTML == "-"){	  	  	        			      	        	
    this.innerHTML = play;	  	  	        			      	        	
    if(play == "X"){	  	  	        			      	        	
      play = "O";	  	  	        			      	        	
    }	  	  	        			      	        	
    else	  	  	        			      	        	
    {	  	  	        			      	        	
      play = "X";	  	  	        			      	        	
    }	  	  	        			      	        	
  }	  	  	        			      	        	
}	  	  	        			      	        	
var play = "X";	  	  	        			      	        	
for(var x = 1; x <= 9; x++)	  	  	        			      	        	
{	  	  	        			      	        	
  document.getElementById("cell" + x).onclick = player;	  	  	        			      	        	
}	  	  	        			      	        	
  var txt = "RUNNING";	  	  	        			      	        	
  document.getElementById("gamestatus").innerHTML = txt;	  	  	        			      	        	
	  	  	        			      	        	
for(var x = 0; x <= 2; x++)	  	  	        			      	        	
{	  	  	        			      	        	
  document.getElementById("cell" + (x * 3+1)).innerHTML;	  	  	        			      	        	
  if((document.getElementById("cell" + (x * 3+1)).innerHTML == "X")|| document.getElementById("cell" + (x * 3+2)).innerHTML== "X"|| document.getElementById("cell" + (x * 3+3)).innerHTML == "X")	  	  	        			      	        	
  {	  	  	        			      	        	
    document.getElementById("gamestatus").innerHTML = "X win";	  	  	        			      	        	
  }	  	  	        			      	        	
  else if(document.getElementById("cell" + (x * 3+1)).innerHTML == "O"|| document.getElementById("cell" + (x * 3+2)).innerHTML=="O"|| document.getElementById("cell" + (x * 3+3)).innerHTML== "O")	  	  	        			      	        	
  {	  	  	        			      	        	
    document.getElementById("gamestatus").innerHTML = "O win";	  	  	        			      	        	
  }	  	  	        			      	        	
  else	  	  	        			      	        	
  {	  	  	        			      	        	
    document.getElementById("gamestatus").innerHTML = "running";	  	  	        			      	        	
  }	  	  	        			      	        	
}	