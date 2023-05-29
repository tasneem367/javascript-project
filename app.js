let array=[];
function todo_fn(){
    let element = document.getElementById('area1').value
   array.push(element)

   show()
}

function del_fn(index){
    array.splice(index,1)
    console.log("index is",array)
    show()
}
// function up1(index){
    // sdas



function show(){
    let html = '';
    array.forEach(function(element,index){
        html+=`
        <tr>
        <td>${index + 1}</td>
        <td>${element}</td>
        <td><button type="button" id="up1">Update</button></td>
        <td><button type="button" id="del1" onclick="del_fn(${index})">Delete</button></td>
    </tr>`
    
    table=`<table>
    <tr>
         <th>sr.no</th>
         <th id="colw">description</th>
         <th>Update</th>
         <th>Delete</th>
     </tr>
    
    ${html}
    </table> `
   

    
     } );
     document.getElementById('data').innerHTML = table
     document.getElementById("area1").value ="";
}