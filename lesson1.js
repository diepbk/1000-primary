function sum(n){
    let total = 0;
    for(let i = 0; i < n; i++){
        total = total + i;
    }
    return total;
}
console.log(sum(6));