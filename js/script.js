$("Bttnclear").click(TodoClear)
$("BttnMark").click(TodoMark)
$("Bttndel").click(TodoDel)
$("BttnPost").click(TodoPost)

function TodoClear(){

   
}

function TodoMark(){
    
}
function TodoDel(){
    
}
function TodoPost(e){
    e.preventdefault()
    let todo =$("#Todotxt").val
    $("#todoList").append(`<input type="checkbox"`)
}
