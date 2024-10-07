const stuff_iWantToDo = ["icey", "eat", "sleep", "yes"]
stuff_iWantToDo.forEach((act) => { console.log(act)});
stuff_iWantToDo.filter((act) => {console.log (
    act.length < 4)
});
//if like ts it will print true or false
const yes = stuff_iWantToDo.filter((act)=> act.length <4);
console.log(yes);