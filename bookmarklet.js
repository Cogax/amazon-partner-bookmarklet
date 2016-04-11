(function() {
  /**
   * First we need to check if jQuery alredy installed on that Page. If it isn't
   * we need to import the jQuery library.
   */
  var jQueryVersion = '1.11.2';
  if(window.jQuery === undefined || window.jQuery.fn.jquery < jQueryVersion) {
    var done = false;
    var script = document.createElement("script");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + jQueryVersion + '/jquery.min.js';
    script.onload = script.onreadystatechange = function() {
      if(!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
        initBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initBookmarklet();
  }


  function initBookmarklet() {
    (window.amazonBookmarklet = function($) {

      // asin
      var asin = window.location.href.match("/([a-zA-Z0-9]{10})(?:[/?]|$)")[1];

      // name
      var name = $("#productTitle").text();

      // rating
      var rating_element = $("#averageCustomerReviews_feature_div i.a-icon-star");
      var rating = 0;
      if(rating_element.hasClass('a-star-1')) {
        rating = 1;
      } else if(rating_element.hasClass('a-star-1-5')) {
        rating = 1.5;
      } else if(rating_element.hasClass('a-star-2')) {
        rating = 2;
      } else if(rating_element.hasClass('a-star-2-5')) {
        rating = 2.5;
      } else if(rating_element.hasClass('a-star-3')) {
        rating = 3;
      } else if(rating_element.hasClass('a-star-3-5')) {
        rating = 3.5;
      } else if(rating_element.hasClass('a-star-4')) {
        rating = 4;
      } else if(rating_element.hasClass('a-star-4-5')) {
        rating = 4.5;
      } else if(rating_element.hasClass('a-star-5')) {
        rating = 5;
      }

      var output = '+++\n';
      output += 'language = ""\n';
      output += 'draft = false\n';
      output += 'name = "'+name+'"\n';
      output += 'description = ""\n';
      output += 'level = "basic"\n';
      output += 'asin = "'+asin+'"\n';
      output += 'rating = '+rating+'\n';
      output += '+++\n';

      prompt('code', output);
    })(jQuery);
  }
})();