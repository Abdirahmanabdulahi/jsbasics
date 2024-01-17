function Numberchecking(){
    phone= document.getElementById('evc').value;
    validated= ('');
    if(phone.length==9 || phone.length==10 ){
        if(phone.charAt(0) =='0' || phone.charAt(0) =='6'|| phone.charAt(0) =='7'){
            if(phone.charAt(1) =='1' ||phone.charAt(1)=='8'||phone.charAt(1)=='7'||phone.charAt(1)=='6'){

                validated="correct num"

            }else{ 
                validated="Wrong num"
           
            
            }
        }else{ 
            validated="Wrong num"
    }
    }else{ 
        validated="Wrong num"
        
}
document.getElementById('validated').value=validated;
}