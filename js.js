const exampleString = 'Hello worldDd';
function rtlFunction(str) {
  var p = 1, outpt=['['], k;
  if (str!= '')
  k = str.charAt(0);
  if (str== '' )
  return console.log('done');

  for (var i = 1; i<= str.length;i++){
    if (i == str.length){
      outpt+= '['+p+','+'\''+k+'\']';
      continue;}
    if ( k == ' '){
      k = str.charAt(i);
      continue;
    }
    if(str.charAt(i)==k){
      p++;
      continue;
    }
    if (str.charAt(i)!=k){
      outpt+= '['+p+','+'\''+k+'\'],';
      p = 1;
      k = str.charAt(i);
    }
  }

  outpt+=']';
console.log(outpt);
}
this.rtlFunction(exampleString);
