$(document).ready(function() {
  
  $('#newTodo').keypress(function(e) {
    var ENTER = 13
    if(e.which == ENTER) {
      var title = $(this).val();
      save(title);
      addToList(title);
      $(this).val('');
    }
  });
});

function addToList(title) {
  console.log('adding ' + title);
  var $item = $('#nursery .list-item').clone();
  $item.find('.item-title').text(title);
  console.log($item);
  
  $('#list').append($item);
}

function save(title) {
  
  $.post('/items', { 
    'item[title]': title, 
    'item[priority]': 1, 
    'item[description]': 'Default'
  }, function(response) {
    
  });
}