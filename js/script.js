var count = 0   //  For Row Id of Input Table and for array delete index
// Array Declaration

var inputArr = [
    {
        name: "",
        subject: "",
        marks: "",
    },
    {
        name: "",
        subject: "",
        marks: "",
    },
    {
        name: "",
        subject: "",
        marks: "",
    },
    {
        name: "",
        subject: "",
        marks: "",
    },
    {
        name: "",
        subject: "",
        marks: "",
    }
]
var intialArr = JSON.parse(JSON.stringify(inputArr)) ;  //Cloning of array strigify convert into string and remove the refrence and parse convert into array object
//function Dynamic Update of Row Id on Delete
function updateRowId() {
    $("#inputTableGenerate tr").each((i, ele) => {
        ele.setAttribute('id', `rowid${i}`)
    })
}
function intialRow(){
    for(i=0;i<5;i++){ $("#inputTableGenerate").append(`<tr id="rowid${count++}">  
             <td></td>
           <td><input type="text" class="form-control studentName" oninput="updateArray(this)"></td>
           <td><input type="text" class="form-control subject" oninput="updateArray(this)"></td>
           <td><input type="text" class="form-control studentMarks" oninput="updateArray(this)"></td>
           <td><button  class="btn btn-outline-primary button-style" >Pass</button ><button class="btn btn-outline-danger button-style">Fail</button></td>
      </tr>`)
}
   emptyArr();      

}

$(document).ready(() => {
    //Generating the table for 5 static data
    inputArr.forEach(_element => {

        $("#inputTableGenerate").append(`<tr id="rowid${count++}">  
             <td></td>
           <td><input type="text" class="form-control studentName" oninput="updateArray(this)"></td>
           <td><input type="text" class="form-control subject" oninput="updateArray(this)"></td>
           <td><input type="text" class="form-control studentMarks" oninput="updateArray(this)"></td>
           <td><button  class="btn btn-outline-primary button-style" >Pass</button ><button class="btn btn-outline-danger button-style">Fail</button></td>
      </tr>`)

    })
    // Add empty  object to and calling addRow Html to generate row in web
    $("#addRow").on("click", function addRow() {

        var newStudentData = {
            name: "",
            subject: "",
            marks: "",
        }
        inputArr.push(newStudentData)
        addRowHtml()
    });
});
//  addRow Html to generate row in web
function addRowHtml() {
    $("#inputTableGenerate").append(`<tr id="rowid${count++}">
        <td></td>
        <td><input type="text" class="form-control studentName" oninput=updateArray(this)></td>
        <td><input type="text" class="form-control subject" oninput=updateArray(this)></td>
        <td><input type="text" class="form-control studentMarks" oninput=updateArray(this)></td>
         <td><button  class="btn btn-outline-primary button-style">Pass</button ><button class=" button-style btn btn-outline-danger">Fail</button><button class="btn  btn-danger btn-block button-style" onclick="common(this.parentElement.parentElement,this.parentElement.parentElement.id)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg></button></td>
        </tr>`)
}
//Function for common delete btn
function common(element, id) {
    if (confirm("Really want to delete the record !!") == true) {
        element.remove();
        removeArr(id);
        updateRowId();
        outputTableGenerate();
        count--;
    } else {
        alert("Record is not deleted");
    }

}
//Dynamic Update of array function
function updateArray(e) {
    var id = parseInt($(e).parents('tr').attr('id').split('rowid')[1]);
    var keys = Object.keys(inputArr[id]);
    $(e).parents('tr').find('input').each((i, e) => {
        inputArr[id][keys[i]] = e.value;
    })

}

// DYNAMIC VALIDATION OF DATA
// function dynamicInputValidation(e)
// {
//     var id = parseInt($(e).parents('tr').attr('id').split('rowid')[1]);  //Row index
//     var keys = Object.keys(inputArr[id]);  //key[i]  give row element 

// }
function removeArr(arrIndex) {
    var id = parseInt((arrIndex).split('rowid')[1]);
    inputArr.splice(id, 1);
}
$("#saveData").on( "click", function () {
    $("#outputTableGenerate").html("")
    inputArr.forEach(element=>{
     if(element.name != "" && element.subject != ""  && element.marks != " " ){
        $("#outputTableGenerate").append(`<tr>
                <td></td>
                <td>${element.name}</td>
                <td>${element.subject}</td>
                <td>${element.marks}</td>          
           </tr>`)
     }
     })
 });
// FUNCTION CALLING WHEN DELETE BTN IS CLICKED SO DYNAMIC UPDATE ON GENERATED REPORT
 function outputTableGenerate(){
    $("#outputTableGenerate").html("")
    inputArr.forEach(element=>{
        if(element.name != "" && element.subject != ""  && element.marks != " " ){
        $("#outputTableGenerate").append(`<tr>
                <td></td>
                <td>${element.name}</td>
                <td>${element.subject}</td>
                <td>${element.marks}</td>          
           </tr>`)
        }
     })
 }
 function emptyArr(){
    inputArr = JSON.parse(JSON.stringify(intialArr)) ;
 }
$("#refresh").on("click", function refresh (){
    $("#inputTableGenerate").html("");
    $("#outputTableGenerate").html("");
    count=0;
    intialRow();
})
