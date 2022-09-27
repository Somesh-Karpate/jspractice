function thecalculator(num){
    let half = num / 2;
    console.log(half);
    let square = half ** 2;
    console.log(square);
    let areaofcircle = Math.PI * square ;
    console.log(areaofcircle);
    let per = (square/areaofcircle)*100;
    console.log(per);
}
thecalculator(5);