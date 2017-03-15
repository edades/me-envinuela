window.setInterval(function(){

	var textos = document.querySelectorAll('[data-reaction="4"]');
	for (var i = 0, l = textos.length; i < l; i++) {
		var palaudio = textos[i].getElementsByClassName('_39m');
		textos[i].addEventListener('click', playVinuela)
		var texto = textos[i].getElementsByClassName('_4sm1');

	  for (var j = 0, h = texto.length; j < h; j++) {
	  	texto[j].innerHTML = 'Me enviñuela';
	  }
	}
}, 1000);

function playVinuela(){
	var foo=new Sound("https://firebasestorage.googleapis.com/v0/b/treshapp-647c9.appspot.com/o/Risa%20Jose%20Miguel%20Vi%C3%B1uela.mp3?alt=media&token=db4b20fd-83f9-45cb-8e0e-14b20066f9df",100,true);
	foo.start();
	// foo.stop();
	// foo.start();
	// foo.init(100,false);
	// foo.remove();
}

function Sound(source,volume,loop)
{
  this.source=source;
  this.volume=volume;
  this.loop=loop;
  var son;
  this.son=son;
  this.finish=false;
  this.stop=function()
  {
      document.body.removeChild(this.son);
  }
  this.start=function()
  {
    if(this.finish)return false;
    this.son=document.createElement("embed");
    this.son.setAttribute("src",this.source);
    this.son.setAttribute("hidden","true");
    this.son.setAttribute("volume",this.volume);
    this.son.setAttribute("autostart","true");
    this.son.setAttribute("loop",this.loop);
    document.body.appendChild(this.son);
  }
  this.remove=function()
  {
      document.body.removeChild(this.son);
      this.finish=true;
  }
  this.init=function(volume,loop)
  {
      this.finish=false;
      this.volume=volume;
      this.loop=loop;
  }
}
