const map= new Map();

map.set("name","john");
map.set("age",10);
map.set("city","Delhi");
map.forEach(
    (a,b)=>{
        console.log(a+"="+b)
    }
)
console.log(map["age"]=map.get("age")+1)
console.log(map)