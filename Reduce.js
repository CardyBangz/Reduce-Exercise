function extractValue(arr,key){
    return arr.reduce(function(newArr,newKey){
        arr.push(newArr, newKey[key]);
    })
    return newArr;
}
==========================================================
function vowelCount(str){
    const vowels='aeiou'{
     return str.split('').reduce(function(newArr,newKey){
        let lowercase=newKey.toLowerCase
     })
        
    
    }


}
===========================================================
function addKeyAndValue(arr,key,value){
    return arr.reduce(function(newArr,newKey,idx){
newArr[idx][key]=value;
return newArr;
    },arr);
}
=============================================================
function PageTransitionEvent(arr,cb){
    return arr.reduce(function(newArr,newKey){

    },[],[]);
}