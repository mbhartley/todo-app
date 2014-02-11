/* global describe, it */

(function () {
    'use strict';

    describe('In our Todo App', function () {
        describe('when the add button is clicked', function () {
            it('should add a new todo div when the input it populated', function () {

              // Add text to the .new-todo input
              $('.js-new-todo-input').val('Drink beer');

              // Click the "add" button
              $('.js-add-todo').click();

              // Store the value of the first todo div's text
              var firstTodoText = $('.todo-item').first().children('.description').text();


              expect(firstTodoText).to.contain('Drink beer');

            });
        });
       	describe('when the remove button is clicked', function(){
       		it('should remove the corresponding todo div from the DOM', function(){

       			// Click the "remove" button
       			$('.js-remove-todo').click();

       			// The div, along with it's text, are removed from the DOM



       		});
       	});

       	describe('when the done button is clicked', function(){
       		it('should strikethrough the corresponding text', function(){

       			// Click the "done" button
       			$('.js-done-todo').click();

       			// The text in the div takes on a strikethrough feature

       		});
       	});




    });
})();
