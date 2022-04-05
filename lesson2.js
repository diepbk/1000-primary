// bai2
function tongBinhPhuong(n){
    let s = 0;
    for(i = 1; i <= n; i++){
        s = s + i*i;
    }
    return s;
}
// bai3
function sum3(n){
    let s = 0;
    for(i = 1; i <= n; i++){
        s = s + 1/i;
    }
    return s;
}
// bai4
function sum4(n){
    let s = 0;
    for(i = 1; i <= n; i++){
        s = s + 1/(2*i);
    }
    return s;
}
// bai5
function sum5(n){
    let s = 0;
    for(i = 0; i <= n; i++){
        s = s + 1/(2*i + 1);
    }
    return s;
}
// bai6
function sum6(n){
    let s = 0;
    for(i = 1; i <= n; i++){
        s = s + 1/(i*(i+1));
    }
    return s;
}
// bai7
function sum7(n){
    let s = 0;
    for(i = 1; i <= n; i++){
        s = s + i/(i+1);
    }
    return s;
}
// bai8
function sum8(n){
    let s = 0;
    for(i = 0; i <= n; i++){
        s = s + (2*i+1)/(2*i+2);
    }
    return s;
}
// bai9
function multi9(n){
    let m = 1;
    for(i = 1; i <= n; i++){
        m = m*i;
    }
    return m;
}
// bai10
function power10(x,n){
    let p = 1;
    for(i = 1; i <= n; i++){
        p = p*x;
    }
    return p;
}
// bai11
function sum11(n){
    let s = 0;
    for(i = 1; i <= n; i++){
        let p = 1;
        for(j = 1; j <= n; j++){
            p = p*j;
        }
        s = s + p;
    }
    return s;
}
console.log(sum11(3));