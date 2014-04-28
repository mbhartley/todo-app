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
  
  //render pre-loaded data onto page
  _.each(todoList, function(item){					
    $('.todo-items').prepend(todoTemplate(item))
  })

  //grab the input value on click and store it in a var description
  $('.add-button').click(function(){					
    var description = $('.js-tasks-input').val();	    

    var todo = {										//create object literal with the var description ???
      description: description,						
      done: false,									//done: false (so, later we can set done button up)
      id: _.uniqueId()							//give a unique id for the purpose of storing it in an array
    }

    //store the rendered template string ???
    var renderedTemplate = todoTemplate(todo);	    
  
    //prepend the rendered template into todo-items div
    $('.todo-items').prepend(renderedTemplate);			
 

  })

})


