var fruits = ['Mangue', 'Raisin','Figue','Kiwi'];
                     document.getElementById("frui").innerHTML = fruits;
                     
                    
                   function valider(){
                    var element =document.getElementById("input").value;
                    var a=false;
                                      
    for (var i = 0; i < fruits.length; i++) {
        
        
        if(element.toUpperCase() == fruits[i].toUpperCase() ){
            
            fruits.splice(i, 1);
            a=true;
           
        }
        
        
        
    }

    if (a==true){
        alert('exist');
    }
    else{
        alert('doesnt exist');
    }
    
   document.getElementById("frui").innerHTML = fruits;
}
            

                  
                 
                     

                     

                     


                 