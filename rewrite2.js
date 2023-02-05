// let message;                         // rewrite if else using multiple ternary operators "?"

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }




let message = login === 'Employee' ? 'Hello' :
 (login === 'Director') ? "Greetings" : 
 (login === "") ? "No login" :
  '';                                                 // Easy enough, but at this point hard to see the usefulness of ternary operators, compared to if/else statements.