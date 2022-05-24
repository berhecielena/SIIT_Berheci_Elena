//1.display in the console the numbers from 1 to 20
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
for(var index=0; index<array.length;index++)
if(array[index]<20)
console.log(array[index]);

//2.display in the console the odd numbers from 1 to 20
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
for(var index=0; index<array.length;index++)
if(array[index]%2!=0 && array[index]<20)
console.log(array[index]);

//3.compute the sum of the elements of an array and display it in the console
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
s=0;
for(var index=0; index<array.length;index++)
s=s+array[index];
console.log(s);

//4.compute the maximum of the elements of an array and display it in the console
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
maxx=0;
for(var index=0; index<array.length;index++)
if(array[index]>maxx)
maxx=array[index];
console.log(maxx);

//5.compute how many times a certain element appears in an array - tips: use object, var element = 2
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]
 const count={};
 for(const element of array)
 {if(count[element])
    count[element]=count[element]+1;
    else count[element]=1;
 }

 console.log(count);


//6.Using nested control structures (doua for + if) for generate the following pattern
var result="";
for(var index=0;index<4;index++)
{for(var index2=0;index2<4;index2++)
{ if(index%2!=0 && index2%2==0)
    { 
        console.log(index,index2)
    result= result+1;
    
     }
    else if(index2%2!=0 && index%2==0)
    {
        console.log(index,index2)
    result= result+1;
    
    }
    else if(index2%2==0 && index%2==0){
        console.log(index,index2)
    result= result+0;
    }
    else {
        console.log(index,index2)
    result= result+0;
    }
}
result=result+"\n";
}
console.log(result);