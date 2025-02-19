function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let local = document.getElementsByClassName('locais')
    
    for (i = 0; i < local.length; i++){
        if(!local[i].innerHTML.toLowerCase().includes(input)){
            local[i].style.display = "none"
        }else{
            local[i].style.display = "list-item"
        }
    }
}