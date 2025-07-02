$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
        event.preventDefault();
    var taskText = $('#taskInput').val().trim();
    if (taskText) {
    $('#defaultItem').hide();
    $('#taskList').append('<li>' + taskText + '</li>');
    $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#resetButton').on('click', function() {
        $('#taskList').empty().append('<li id="defaultItem">(sem tarefas a cumprir)</li>');
    });
});