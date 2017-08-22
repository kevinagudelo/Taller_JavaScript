
var  x = '*';
for (var j = 0; j <= 7; j++) {
   x = x + '*';
 }
for (var i = 0; i <= 13; i++) {
   if (x.length === 9) {
     switch (i) {
       case 0:
         console.log(`    ${x.slice(2, 3)}    `);
         break;
       case 1:
         console.log(`   ${x.slice(2, 5)}`);
         break;
       case 2:
         console.log(`  ${x.slice(2, 7)}`);
 
         break;
       case 3:
         console.log(` ${x.slice(2, 9)}`);
         break;
       case 4:
         console.log(`   ${x.slice(2, 5)}`);
 
         break;
       case 5:
         console.log(`   ${x.slice(2, 5)}`);
         break;
       case 6:
         console.log(`  ${x.slice(2, 7)}`);
         break;
       case 7:
         console.log(` ${x.slice(2, 9)}`);
         break;
       case 8:
         console.log(x);
        break;
      case 9:
         console.log(` ${x.slice(2, 9)}`);
         break;
       case 10:
         console.log(`  ${x.slice(2, 7)}`);
         break;
       case 11:
         console.log(`   ${x.slice(2, 5)}`);
 
         break;
       case 12:
        console.log(`    ${x.slice(2, 3)}    `);
 
         break;
       default:
 
         break;
     }
  }
 
 }










