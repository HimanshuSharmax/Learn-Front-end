//! Pattern

/*
 *****
 *****
 *****
 *****
 *****
 */

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    document.write("*");
  }
  document.write("<br>");
}



/*          
 *          1               1               1
 **         12    (j)       22    (i)       23    (use count)
 ***        123             333             456
 ****       1234            4444            78910
 *****      12345           55555           
 */

let count = 1;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(count);
    count++;
  }
  document.write("<br>");
}

  

/*
 *****
 ****
 ***
 **
 *
 */

 for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>")
} 



/*
     *
    **
   ***
  ****
 *****
 */

for (let i = 1; i <= 5; i++) {
    // for space
    for(let s = 1; s <= 5-i; s++){
        document.write("&nbsp;&nbsp;")          // &nbsp for space 1/2
    }
    // printing *
    for (let j = 1; j <= i; j++) {
        document.write("*");
      }
    document.write("<br>")
}




/*
 *****
  ****
   ***
    **
     *
 */

for (let i = 5; i >= 1; i--) {
    // for space
    for(let s = 1; s <= 5-i; s++){
        document.write("&nbsp;&nbsp;")          
    }
    // printing *
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>")
} 
