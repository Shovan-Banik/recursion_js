function count(i){
    if(i==1){
        return 1;
    }
    i=i+count(i-1);
    return i;
}
const result=count(5);
console.log(result);
