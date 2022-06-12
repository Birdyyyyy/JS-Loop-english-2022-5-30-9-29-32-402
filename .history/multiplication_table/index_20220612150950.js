let j = 1,i = 1
while (i<10) {
    if(j>=i){
        console.log(j + "*" + j + "=" + i*j);
        i++;
    } else {
        j++;
        i = 1;
        console.log("\n");
    }
}