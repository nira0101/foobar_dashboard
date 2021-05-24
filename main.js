import './sass/style.scss'
"use strict"

window.addEventListener("DOMContentLoaded", init )


let globalData = {};


function init(){
  fetchData();
}
async function fetchData() {

  const response = await fetch('https://foobar-jearasfix.herokuapp.com/');
  const jsonData = await response.json();

  globalData = jsonData; // global variable in inline script in index.html to use this fetch in all components
  displayEmployeeData();
  displayStorageData();
  displayQue();
  displayBar();
  console.log(globalData);
}


function displayEmployeeData(){
  const selector = document.querySelectorAll("#worker_status_app div");

  let counter = 0;
  selector.forEach( () => {
      counter++
      document.querySelector(`#worker_status_app .employee_${counter} h2`).innerHTML = globalData.bartenders[(counter-1)].name;
      document.querySelector(`#worker_status_app .employee_${counter} h3`).innerHTML = `Customer: ${globalData.bartenders[(counter-1)].servingCustomer}`;
      document.querySelector(`#worker_status_app .employee_${counter} h4`).innerHTML = globalData.bartenders[(counter-1)].statusDetail;
  })
}


function displayStorageData() {
  const selector = document.querySelectorAll("#storage_amount_app div");

  let counter = 0;
  selector.forEach( () => {
      counter++
      document.querySelector(`#storage_amount_app .storage_unit_${counter} h3`).innerHTML =/* "Name: "  + */ globalData.storage[(counter-1)].name;
      document.querySelector(`#storage_amount_app .storage_unit_${counter} h4`).innerHTML = /* "Amount: " + */ globalData.storage[(counter-1)].amount;
  })


}


function displayQue() {

  const container = document.querySelector("#que_container");
  const template = document.querySelector("#current_que_app template");
  container.innerHTML ="";
  
  let counter = 0;

  globalData.queue.forEach( (person) => {
  
      counter++
      const klon = template.cloneNode(true).content;
      
<<<<<<< HEAD
      klon.querySelector(`h3`).innerHTML = counter + ". In Queue";
=======
      klon.querySelector(`h3`).innerHTML = counter + ". In queue";
>>>>>>> 1058190a82f47e7e97d5eded58f007738a271b60
      klon.querySelector(`h4`).innerHTML = person.id;
      klon.querySelector(`h5`).innerHTML = person.order.join();

      container.appendChild(klon); 
  });
 
 
}

function displayBar(){
  const barSelector = document.querySelectorAll("#bar div");


  barSelector.forEach(()=>{
   
    document.querySelector(".bar_info_1 h2").innerHTML = globalData.bar.name; 
   document.querySelector(".bar_info_2 h3").innerHTML = globalData.bar.closingTime; 
  })
}


