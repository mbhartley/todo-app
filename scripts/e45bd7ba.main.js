var todoList=[{description:"do laundry",done:!1,id:_.uniqueId()},{description:"study JavaScript",done:!0,id:_.uniqueId()},{description:"brush teeth",done:!1,id:_.uniqueId()}];$(document).ready(function(){var a=_.template($(".todo-template").text());todoArray=[],_.each(todoList,function(b){$(".todo-items").prepend(a(b))}),$(".add-button").click(function(){var b=$(".js-tasks-input").val();$(".js-tasks-input").val("");var c={description:b||"no item added",done:!1,id:_.uniqueId("todo")},d=a(c);$(".todo-items").prepend(d),todoArray.push(c)})}),$(".todo-items").on("click",".js-remove-todo",function(){var a=$(this).parent().attr("id");todoArray=_.reject(todoArray,function(b){return b.id==a}),$(this).parent().remove()}),$(".todo-items").on("click",".edit-button",function(){console.log("EDIT"),$(this).siblings(".edit-input").show(),$(this).siblings(".edit-input").focus()}),$(".todo-items").on("blur",".edit-input",function(){var a=$(this).parent().attr("id"),b=$(this).val(),c=_.findWhere(todoArray,{id:a});c.description=b,$(this).siblings(".description").empty().html(b),$(this).hide()}),$(".todo-items").on("click",".complete-button",function(){console.log("STRIKE ONE"),$(this).siblings(".description").toggleClass("strikethrough")});