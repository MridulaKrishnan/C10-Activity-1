
var weight;
var sum;
var average;

function setup() 
{
  createCanvas(400,400);
  weight=[87,69,77,20,11,44,45,78,99,5 ] ;
  sum= weight[0]+ weight[1]+ weight[2] + weight[3] + weight[4] + weight[5]+ weight[6]+ weight[7]+weight[8]+ weight[9];
console.log("The sum is" + sum);
average= sum/weight.length;
console.log("The average is"+ average);
}



function draw() 
{
background(51);

}

