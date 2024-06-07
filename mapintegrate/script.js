let itemsMap=new Map()
itemsMap.set(1,'item1');
itemsMap.set(2,'item2');
itemsMap.set(3,'item3');
itemsMap.set(4,'item4');
function displayItems(map){
    let itemlist=document.getElementById("itemList");
    document.getElementById("itemList").innerHTML='';
    map.forEach((value,key) => {
        let listItem=document.createElement('li');
        listItem.textContent=`${key}:${value}`;
        itemlist.appendChild(listItem);
    });

}
function addItem(key,value){
    itemsMap.set(key,value);
    displayItems(itemsMap) ; 

}
document.getElementById("additemForm").addEventListener('submit',(e)=>{
    e.preventDefault();
    let key=document.getElementById("itemkey").value;
    let value=document.getElementById("itemvalue").value;
    addItem(key,value);
    document.getElementById("additemForm").reset();

})

window.onload=()=>{
  displayItems(itemsMap)
}   