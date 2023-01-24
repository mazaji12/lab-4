$(document).ready(function(){
   
   
   
    $("#BotonPost").click(function(e){
        e.preventDefault()
        let todo=$("#todoTxt").val()
        $("#todoList").append(`<input type="checkbox" name="todo"/> <label> ${todo} </label> <br> `)
    })

    $("#BotonMark").click(function(){
        let todos= $("[name='todo']")
        for(let i=0;i<todos.length;i++){
            todos[i].checked=true
        }
       
    })

    $("#BotonClear").click(function(){
        let todos= $("[name='todo']")
        for(let i=0;i<todos.length;i++){
            todos[i].checked=false
        }
       
    })

    $("#BotonDelete").click(function(){
        $("#todoList").empty()
       
    })


    

})
