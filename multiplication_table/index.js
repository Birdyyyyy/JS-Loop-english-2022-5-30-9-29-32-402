let j = 1,i = 1
let str = ""
while (j<10) {
    if(j>=i){
        str += j + "*" + i + "=" + i*j + " ";
        i++;
    } else {
        j++;
        i = 1;
        console.log(str)
        str = ""
    }
}
