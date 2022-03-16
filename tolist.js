$(document).ready(function(){

    $.ajax({

        url: '/tasks.json',

        success:function(result){
            for(let task of result){
                $('#todolist').append(`<li class="list-group-item">${task.title}</li>`);
            }
        },

    })

});