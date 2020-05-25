//function up

function up(){
  var pos =0;
  var box =document.getElementById("box");
  pos +=10;
 box.style.bottom=pos+"px";
}
//function RIGHT

function right(){
  var pos =0;
  var box =document.getElementById("box");
  pos +=10;
 box.style.left=pos+"px";
}

//function LEFT

function left(){
  var pos =0;
  var box =document.getElementById("box");
  pos +=10;
 box.style.right=pos+"px";
}

//function DOWN

function down(){
  var pos =0;
  var box =document.getElementById("box");
  pos +=10;
 box.style.top=pos+"px";
}
