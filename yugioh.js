var arr = [];
function yugioh(x){

    for(var i = 1; i<=x;i++){
        arr.push(i);
    }

    for(var y =0;y<arr.length;y++){
        
       if((arr[y]%2 ==0)&&(arr[y]%3 ==0)&&(arr[y]%5==0)){
           arr[y] = "yu-gi-oh";
       }
       else if((arr[y]%2 ==0)&&(arr[y]%3 ==0)){
        arr[y] = "yu-gi";
        }
        else if((arr[y]%2 ==0)&&(arr[y]%5 ==0)){
            arr[y] = "yu-oh";
        }
        else if((arr[y]%3 ==0)&&(arr[y]%5==0)){
            arr[y] = "gi-oh";
        }
        else if(arr[y]%2 == 0){
            arr[y] = "yu";
        }
        else if(arr[y]%3 == 0){
            arr[y] = "gi";
        }
        else if(arr[y]%5 == 0){
            arr[y] = "oh";
        }

    }
    
     console.log(arr);
}
  
yugioh(100);
yugioh(27);