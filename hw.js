let objOpr= 
    { 
      //array
      
      arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,15,17,18,19,20,21,22,23,24,25],
      
      
      //prime key
      
      findprime:function()
      {
        
      for (j=0;j<this.arr.length;j++)
          {
            primenum(this.arr[j])
          }
  
        function primenum(num)
       {
           let count=0
           for(let i=2;i<num;i++)
             {
               if(num%i==0)
                {
                   count++
                   break;
                }
               else
                {
                  count=0;
                }
             }
        if(count==0)
        {
          console.log(num)
        }
  
      }
        
      },
      
      
      
      
      // sum key
       
      findsum:function()
      {
          let sum=0
        for(let i=0;i<this.arr.length;i++)
          {
            sum=sum+this.arr[i]
          }
        console.log('sum of array values = '+sum)
      },
      
      
      
      
      //length key
      
      findlen:function()
      {
       console.log('Length of array is '+this.arr.length); 
      }
      
      
    }

objOpr.findlen()
objOpr.findsum()
console.log('prime numbers in the array')
objOpr.findprime()