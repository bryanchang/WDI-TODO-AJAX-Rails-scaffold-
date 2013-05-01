$(document).ready(function(){
	$('#new_todo_item').on('submit', function(event){
		event.preventDefault();
		var form = $(this);
		var name = $('#todo_item_name').val();

		//instead of submitting it to the server, intercepting it thru AJAX
		$.ajax({
			url: form.attr('action'), // in console, $('#new_todo_item').attr('action');
			method: form.attr('method'), // in console, $('#new_todo_item').attr('method');
			data: {"todo_item": 
							{"name": name, "completed": false, "deleted": false}
						},
			dataType: "json",

			success: function(todo_item) {
				var table = $('table');
				var checkbox = $("<input class='checkbox' type='checkbox'>");	
				var row = $('<tr><td>' + todo_item.name + '</td><td>' 
										+ todo_item.completed + '</td><td>'
										+ todo_item.deleted + '</td></tr>'
				// checkbox. checked todo_item.completed = "true"
									 );
				checkbox.appendTo(row)
				row.appendTo(table);
			},
			error: function(){
				alert("Couldn't add a todo due to the server issue, OUR BAD :/");
			}
		});
	});
});

/*
$(document).ready(function(){

	$("button").on('click', function(){
		var todoInput = $("<span>" + $("#todo_input").val() + "</span>");
		var lis = $("<li></li>");
		var checkbox = $("<input class='checkbox' type='checkbox'>");
		var img = $("<img class='trash' src='trash.svg'>");

		img.on('click', function() {
			$(this).parent().slideUp(), function(){$(this).remove();}
		});			

		checkbox.on('click', function() {
			var li = $(this).parent();

			if ($(this).prop('checked')) {
					// li.insertAfter('#completed_list').css('color', 'red').css('text-decoration', 'line-through');
					li.insertAfter('#completed_list').addClass('completed_text');
			} 
			else {
					li.insertAfter('#todo_list').removeClass('completed_text');
			}
		});

		$(checkbox).appendTo(lis);
	  $(todoInput).appendTo(lis);
	  $(img).appendTo(lis);							 
		$(lis).insertAfter('#todo_list');
		$("#todo_input").val('');


	});
});

*/