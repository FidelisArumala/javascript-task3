
// function for whole number
function wholeNumber(num){
    let array=[];

    // for loop
    for(let i=0; i<=num; i++) {
        let add=""

        // conditional statments for arguments
      if(i%5===0 ||i%3===0 || i%2===0){
    if(i%2===0){
        if(add!="")
        add+='-yu' 
        else{
            add='yu' 
        }
    }
     if(i%3===0){
            if(add!="")
            add+='-gi' 
            else{
                add='gi' 
            }
        }
        if(i%5===0){
            if(add!="")
            add+='-oh' 
            else{
                add='oh' 
            }
        }
}
        else{
            add=i
        }

        // array returns
        array.push(add)
    }
    console.log(array);
    
    
    
}
// calling the function
wholeNumber(100)
wholeNumber(55)
