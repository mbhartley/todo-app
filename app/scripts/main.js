/*this simply allows pre-rendered data to exist on the page so that when the page refreshes
we are not void of data; no data-persistence yet*/
var todoList = [						
  {												   
    description: 'do laundry',					   				
    done: false,
    id: _.uniqueId()
  },
  {
    description: 'study JavaScript',
    done: true,
    id: _.uniqueId()
  },
  {
    description: 'brush teeth',
    done: false,
    id: _.uniqueId()
  }
]

$(document).ready(function(){

  //creates a reference to  our template in html
  var todoTemplate = _.template($('.todo-template').text())	

  //create an empty array
  todoArray = [];
  
  //render pre-loaded data onto page
  _.each(todoList, function(item){					
    $('.todo-items').prepend(todoTemplate(item))
  })

  // ON CLICK ADD BUTTON

  /*grab the input value and store it in a var description,
  then clear out the input field automatically*/

  $('.add-button').click(function(){	

    var description = $('.js-tasks-input').val();	
    $('.js-tasks-input').val('');    

    var todo = {										
      description: description || 'no item added',						
      done: false,									
      id: _.uniqueId('todo')							
    }

    //store the rendered template string

    var renderedTemplate = todoTemplate(todo);	    
    
    //prepend the rendered template into todo-items div

    $('.todo-items').prepend(renderedTemplate);			

    todoArray.push(todo);
 
  });

});

// ON CLICK DELETE BUTTON

$('.todo-items').on('click', '.js-remove-todo', function(){

    var parentId = $(this).parent().attr('id');

    todoArray = _.reject(todoArray, function(item){
      return item.id == parentId;
    });

    $(this).parent().remove();

  });

// ON CLICK EDIT BUTTON

$('.todo-items').on('click', '.edit-button', function(){
  console.log("EDIT");
    $(this).siblings('.edit-input').show();

    $(this).siblings('.edit-input').focus();

  });

  $('.todo-items').on('blur', '.edit-input', function(){
      var parentId = $(this).parent().attr('id');
      var newDescription = $(this).val();
    var item = _.findWhere(todoArray, {id: parentId});

    item.description = newDescription 

    $(this).siblings('.description').empty().html(newDescription)
    $(this).hide()
    
  });

// ON CLICK COMPLETE BUTTON

$('.todo-items').on('click', '.complete-button', function(){
  console.log('STRIKE ONE');
    $(this).siblings('.description').toggleClass('strikethrough');


  });








