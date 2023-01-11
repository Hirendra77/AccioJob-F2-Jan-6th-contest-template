/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printingByMap);//each element is stored in "printingBymap" variable
  function printingByMap(arrayItem){
    if(arrayItem.profession === "developer"){
      console.log(arrayItem);
    }
  } 
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingByForEach); //each element is stored in "printingByForEach" variable
    function printingByForEach(arrayItem){
      if(arrayItem.profession === "developer"){
       console.log(arrayItem);
    }
  }
}

function addData() {
  //Write your code here
  let newObj={ id: 4, name: "susan", age:"20", profession: "intern" };
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let filtered_arr=arr.filter(function (val){
    if(val.profession !== "admin"){
      return val;
    }
  });
  console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here
  let arr2=[
    {id: 5, name: "hirendra", age: "25", profession: "developer" },
    {id: 6, name: "vinay", age: "26", profession: "developer" },
    {id: 7, name: "gopal", age: "25", profession: "banker" },
  ];
  let concatArray = arr.concate(arr2);
  console.log(concatArray);
}
