// Note: Write a solution with O(n^3) time complexity, since this is what you would be asked to do during a real interview.

// You have an array a composed of exactly n elements. Given a number x, determine whether or not a contains three elements for which the sum is exactly x.

// Example

// For x = 15 and a = [14, 1, 2, 3, 8, 15, 3], the output should be
// tripletSum(x, a) = false;

// For x = 8 and a = [1, 1, 2, 5, 3], the output should be
// tripletSum(x, a) = true.

// The given array contains the elements 1,2, and 5, which add up to 8.

// Input/Output

// [time limit] 4000ms (js)
// [input] integer x

// Guaranteed constraints:
// 1 ≤ x ≤ 3000.

// [input] array.integer a

// Guaranteed constraints:
// 3 ≤ a.length ≤ 1000,

// 1 ≤ a[i] ≤ 1000.

// [output] boolean

// Return true if the array contains three elements that add up to x and false otherwise.


// As this function can run in O^3 time, I chose to do 3 for loops each iterating though through the array
function tripletSum(x, a) {
	var sum = 0;	  
    for(var i=0; i<a.length; i++){
        sum = 0; //reset to 0 each time the first number goes up
        for(var j=(i+1); j<a.length; j++){
            for(var k= (j+1); k<a.length; k++){
                sum = a[i] + a[j] + a[k];                
                if(sum == x){
                    return true;
                }
            } 
        }  
    }
    console.log(sum);
    return false;
}