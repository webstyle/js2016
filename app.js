var Man = function(user) {
  this.name = user.name;
  this.canCoding = true;
  this.createdAt = new Date();
};

var farrux = new Man({
  name: "Farrux"
});

console.log(farrux);
