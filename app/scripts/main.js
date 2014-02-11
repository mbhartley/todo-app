
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

  var todoTemplate = _.template($('.todo-template').text())

  _.each(todoList, function(item){					//render pre-loaded data onto page
    $('.todo-items').prepend(todoTemplate(item))
  })

$('.add-button').click(function(){					//add a click event to the .add-button
  var description = $('.js-tasks-input').val();	    //grab the input value and store it in a var description

  var todo = {										//create object literal with the var description ???
    description: description,						
    done: false,									//done: false (so, later we can set done button up)
    id: _.uniqueId()								//give a unique id for the purpose of storing it in an array
  }

  var renderedTemplate = todoTemplate(todo);	    //store the rendered template string ???

$('.todo-items').prepend(renderedTemplate);			//prepend the rendered template into todo-items div
 

})

})


