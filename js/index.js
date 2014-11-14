(function() {
  var $menuItems = $('.js-menu-items');
  var $menuButton = $('.js-menu-button');
  var $menu = $('.js-menu');
  var $result3 = $('.js-result3');
  var $result2 = $('.js-result2');
  var $result1 = $('.js-result1');
  var $results = $('.js-results');
  var $searchResults = $('.js-search-results');
  var $enterButton = $('.js-enter-button');
  var $searchBar = $('.js-search-bar');
  var $questionText = $('.js-question-text');


  $searchBar.on('click', {index: 1}, shiftUp);

  function shiftUp(e) {
    $searchBar.css('marginTop', -261);
    $questionText.css('marginTop', -1000);
    $searchResults.css('marginTop', -261);
    $results.css('marginLeft', 0);
  }

  $("#search-bar").keyup(function(event){
      if(event.keyCode == 13){
          $("#enter-button").click();
      }
  });

  $menuButton.on('click', {index: 1}, showMenu);
  var isMenuOn = 'no';

  function showMenu(e) {
    if (isMenuOn == 'no') {
      $menu.css('marginRight', 1);
      isMenuOn = 'yes';
    } else {
      $menu.css('marginRight', -95);
      isMenuOn = 'no';
    }
  }


})();