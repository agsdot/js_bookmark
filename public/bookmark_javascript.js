(function(){

  var v = "1.9.1";

  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }

  function initMyBookmarklet() {
    (window.myBookmarklet = function() {

      var doctitle = document.title;
      var doclocation = document.location;
      var selectedText = '';

      function getSelText() {
        var SelText = '';
        if (window.getSelection) {
          SelText = window.getSelection();
        } else if (document.getSelection) {
          SelText = document.getSelection();
        } else if (document.selection) {
          SelText = document.selection.createRange().text;
        }
        return SelText;
      }

       selectedText = getSelText();


     // var encodedParam = encodeURIComponent('www.foobar.com/?first=1&second=12&third=5');
     // var encodedParam = encodeURIComponent('http://localhost:3000/bookmarks/new?title= ' + doctitle + '&?url=' + doclocation + '&?text=' + selectedText);
// encodeURIComponent(
     // var NWin = window.open('http://localhost:3000/bookmarks/new?title= ' + doctitle + '&?url=' + doclocation + '&?text=' + selectedText, '', 'height=400,width=400');

     var NWin = window.open('http://localhost:3000/bookmarks/new?text= ' + encodeURIComponent(selectedText) + '&title=' + encodeURIComponent(doctitle) + '&url=' + encodeURIComponent(doclocation) , '', 'height=400,width=400');


// %3F into ? and %3D into = RSS
// %3F ?
// &amp; &
// %3D =
// &?title=
// &amp;%3Ftitle%3D

     if (window.focus)
     {
       NWin.focus();

       // $('#bookmark_url').val('hello');
     }
     return false;


      // alert('Youve got jQuery '+ document.title + ' ' + v + ' ' + selectedText +' loaded. Arbitrary JS code Hello Worldia! ');



      //  alert('Youve got jQuery '+ document.title + ' ' + v + ' ' + selectedText +' loaded. Arbitrary JS code Hello Worldia! ');

    })();
  }


})();

