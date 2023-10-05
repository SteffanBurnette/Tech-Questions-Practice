//Increment a portion of an array of integer by a given value
//Essentiall you are give three values, the start index, the end index and the increment value
//You want to increment all values withing that range

function rangeAdd(ary, range){
       
    //range[0] represents the starting position
    //range[1] represents the ending position (inclusion)
    //range[2] represents the value that the elements within said range will be incremented by
    //The for loop starts at the starting range and ends at the ending range.
    //Will increment the loop by the k element which is the third value in the range array
    for(let i=range[0];i<=range[1];i++){
        ary[i]+=ary[i]+range[2];
    }


   return ary;
}

const testary=[0,0,0,0,0,0];
const testrange =[2,4,10];

console.log(rangeAdd(testary, testrange));
