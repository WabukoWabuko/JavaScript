const details = {
    firstName:"Wabuko",
    lastName:"Criticos",
    age:22,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(details.firstName)