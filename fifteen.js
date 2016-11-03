

window.onload = function main ()
{
  var areadiv =
  document.getElementById("puzzlearea").getElementsByTagName("div");
      var MainDiv=document.getElementById("puzzlearea");
      var Identification=["a","empty","c","d","e","f","g","h","i","j","k","l","m","n","o","b"];
      var pie=[["pie","d"],["k","l"]];
      var ln=["0px","100px","200px","300px","400px"];
      var blankleft=["300px"]
      var blanktop=["300px"]
      var blockinfo=[["0px","0px"],["0px","100px"]
      ,["0px","200px"],["0px","300px"],["100px","0px"],["100px","100px"]
      ,["100px","200px"],["100px","300px"],["200px","0px"],["200px","100px"]
      ,["200px","200px"],["200px","300px"],["300px","0px"],["300px","100px"]
      ,["300px","200px"],["300px","300px"]];

      var imageinfo=[["0px","0px"],["0px","-100px"]
      ,["0px","-200px"],["0px","-300px"],["-100px","0px"],["-100px","-100px"]
      ,["-100px","-200px"],["-100px","-300px"],["-200px","0px"],["-200px","-100px"]
      ,["-200px","-200px"],["-200px","-300px"],["-300px","0px"],["-300px","-100px"]
      ,["-300px","-200px"],["-300px","-300px"]];


      var para = document.createElement("div");
      var element = document.getElementById("puzzlearea");
      element.appendChild(para);
      for (i=0; i<16;i++){
              areadiv[i].setAttribute("class",'puzzlepiece');
              areadiv[i].setAttribute("id",Identification[i]);
              areadiv[i].style.left=blockinfo[i][1];
              areadiv[i].style.top=blockinfo[i][0];
              areadiv[i].style.backgroundPositionX=imageinfo[i][1];
              areadiv[i].style.backgroundPositionY=imageinfo[i][0];
            }


              $(".puzzlepiece").hover(function()
              {
                 var current=$(this);
                 var currenttop= $(this).css("top");
                 var currentleft= $(this).css("left");
                 var emptytop =  $("#b").css("top");
                 var emptyleft = $("#b").css("left");
                 if ( currentleft==emptyleft)
                 {
                   var cur=Number(currenttop.split("px")[0]);
                   var emp=Number(emptytop.split("px")[0]);
                   var sub= emp-cur;
                   if (sub == -100|| sub== 100)
                   {

                      $(this).addClass("movablepiece");


                   }
                }
                if (currenttop==emptytop)
                {
                  var cur=Number(currentleft.split("px")[0]);
                  var emp=Number(emptyleft.split("px")[0]);
                  var sub= emp-cur;
                  if (sub == -100|| sub== 100)
                  {

                    $(this).addClass("movablepiece");

      }

                 }
              }, function(){

                $(this).removeClass("movablepiece");
              });


  var empty="#b";
           $(".puzzlepiece").click(function(){
                var clss=$(this).attr("class");
                var deh="puzzlepiece"+" "+"movablepiece";
                if (clss==deh){

                  var curX = $(this).css('top');
                  var curY = $(this).css('left');
                  var empX=$(empty).css('top');
                  var empY=$(empty).css('left');
                  $("#b").css('top',curX);
                  $("#b").css('left',curY);
                  $(this).css('top',empX);
                  $(this).css('left',empY);

                    	// var punk=$(this).text();
                      // var pum =	$(empty).text();
                      // var curX = $(this).css('backgroundPositionX');
                      // var curY = $(this).css('backgroundPositionY');
                      // var empX=$(empty).css('backgroundPositionX');
                      // var empY=$(empty).css('backgroundPositionY');
                      // $("#b").text(punk);
                      // $(this).text(pum);
                      // $("#b").css('backgroundPositionX',curX);
                      // $("#b").css('backgroundPositionY',curY);
                      // $(this).css('backgroundPositionX',empX);
                      // $(this).css('backgroundPositionY',empY);
                      // var keep=$(this).attr('id');
                      // var keep2=$("#b").attr('id');
                      // $(this).attr('id'," ");
                      // $("#b").attr('id',keep);
                      // $(this).attr('id',keep2);

              }

              })


              $("button").click(function(){
                for (i=0; i<16;i++){
                        areadiv[i].setAttribute("class",'puzzlepiece');
                        areadiv[i].setAttribute("id",Identification[i]);
                        areadiv[i].style.left=blockinfo[i][1];
                        areadiv[i].style.top=blockinfo[i][0];
                        areadiv[i].style.backgroundPositionX=imageinfo[i][1];
                        areadiv[i].style.backgroundPositionY=imageinfo[i][0];
                      }
               for (k=0; k<100;k++){
                  var changeable=[];

                  for (i=0;i<15;i++){
                    var p="#"+Identification[i];
                    var cX = $(p).css('top');
                    var cY = $(p).css('left');
                    var eX=$("#b").css('top');
                    var eY=$("#b").css('left');
                    if ( cY==eY)
                    {
                      var c=Number(cX.split("px")[0]);
                      var e=Number(eX.split("px")[0]);
                      var s= e-c;
                      if (s == -100|| s== 100)
                      {changeable.push("#"+ Identification[i])

                      }
                    }
                    if (cX==eX)
                    {
                      var c=Number(cY.split("px")[0]);
                      var e=Number(eY.split("px")[0]);
                      var s= e-c;
                      if (s == -100|| s== 100)
                      {changeable.push("#"+ Identification[i])

                      }

                     }

                }

                      var  min=0;
                      var  max=changeable.length;
                      var ind= Math.floor(Math.random() * (max - min)) + min;




                var curX = $(changeable[ind]).css('top');
                var curY = $(changeable[ind]).css('left');
                var empX=$("#b").css('top');
                var empY=$("#b").css('left');
                $("#b").css('top',curX);
                $("#b").css('left',curY);
                $(changeable[ind]).css('top',empX);
                $(changeable[ind]).css('left',empY);
              }

                 })




      }
