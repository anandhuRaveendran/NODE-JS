let time=1500;
if(time>=0 && time<=600){
    console.log("Early morning")
}
else if(time>=601 && time<=780){
    console.log("Morning")

}
else if(time>=781 && time<=960){
    console.log("Noon")

}
else if(time>=961 && time<=1140){
    console.log("Afternoon")

}
else if(time>=1141 && time<=1320){
    console.log("Evening")

}
else if(time>=1321 && time<=1439){
    console.log("Night")

}
else{
    console.log("Value is invalid,please enter value between 0 and 1439")
}