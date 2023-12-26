name1 = "zehra"
name2 = "şima"
// -1 ==> name1 < name2
//  0 ==> name1 = name2
// +1 ==> name2 < name1
console.log(name1.localeCompare(name2));
console.log(String.prototype.localeCompare)