let gradeMap=new Map();

gradeMap.set('john',{'maths':90,'science':83});
gradeMap.set('Robert',{'maths':87,'science':94});
gradeMap.set('Robert',{'maths':55,'science':68});

function calAvg(map){
let averages = new Map();
for(let [student,grade] of map){
    let total=0;
    let subjects=0;
    for(let subject in grade){

        total+=grade[subject];
        subjects++
        averages.set(student,total/subjects)
    }
   return averages
}
}
let avggrades=calAvg(gradeMap)
for(let [student,grade] of avggrades){
    console.log(student,":",grade)
}