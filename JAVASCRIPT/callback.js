function sum(a,b){
    return a+b;

}
function sumWithMsg( msg , callback){
    const result=callback(20,30);
    const fresult="HI" + msg+ " Your score is = " +result;
    console.log(fresult);

}
sumWithMsg(" MR Deepak ",sum);