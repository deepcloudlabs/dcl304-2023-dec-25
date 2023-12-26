Array.prototype.trSort = function () {
    console.log("My sort algorithm.")
    this.sort((x,y)=>x.localeCompare(y,'tr'))
}

const names = ["ali", "veli", "zehra", "şima", "şule", "ayşegül"];
names.sort()
console.log(names)
names.trSort()
console.log(names)
