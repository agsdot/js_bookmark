break it down

get a bookmarklet code
have it respond to selecting it with the mouse ( an alert statement )
load jquery with it

collect data from the current page to bookmark
  highlighted stuff
  page title
  page URL

open a new window
make sure the new window is the page to post

pre populate the fields of the new window

prompt user to submit

control the window presentation size


 // alert('Arbitrary JS code!');
//<a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://localhost:3000/bookmark_javascript.js';})();">Externalized Bookmarklet</a>

// javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://localhost:3000/bookmark_javascript.js';})();


(function(){

  // the minimum version of jQuery we want
  var v = "1.9.1";

  // check prior inclusion and version
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




  // function initMyBookmarklet() {
  //   (window.myBookmarklet = function() {
  //         // your JavaScript code goes here!
  //      alert('Youve got jQuery '+ v +' loaded. Arbitrary JS code Hello Worldia! ');

  //   })();
  // }

  function initMyBookmarklet() {
    (window.myBookmarklet = function() {

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

       selectedText = '';
       selectedText = getSelText();
        if (selectedText == '') {
          var selectedText = prompt("Forget the quote? Type it in.");
        }


       alert('Youve got jQuery '+ document.title + ' ' + v + ' ' + selectedText +' loaded. Arbitrary JS code Hello Worldia! ');

       // document.location
       // document.title

    })();
  }


})();




javascript:location.href='http://www.reddit.com/submit?url='
                                +encodeURIComponent(location.href)
                                +'&title='+encodeURIComponent(document.title)


     var NWin = window.open('http://localhost:3000/bookmarks/new?q=' + selectedText , '', 'height=400,width=400');
     if (window.focus)
     {
       NWin.focus();

       // $('#bookmark_url').val('hello');
     }
     return false;


     var NWin = window.open('http://localhost:3000/bookmarks/new?title= ' + doctitle + '&?url=' + doclocation + '&?text=' + selectedText, '', 'height=400,width=400');
