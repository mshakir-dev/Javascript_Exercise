// Create Projects - Object
let projects = [
  {
  id: "xs100",
  name: "Muhammad Shakir",
  position: "developer",
  experience: "18 Months",
  work_place: "BBVA Bank",
	published_date: "2020-06-20T18:22:41.420Z"
  }, 
  {
    id: "xs200",
    name: "Sabin Bajracharya",
    position: "developer",
    experience: "19 Months",
    work_place: "BBVA Bank",
    published_date: "2020-06-20T18:22:41.420Z"
  }, 
  {
    id: "xs300",
    name: "Galletana Weaver",
    position: "BA",
    experience: "19 Months",
    work_place: "BBVA Bank",
    published_date: "2020-01-20T18:22:41.420Z"
  }, 
  {
    id: "xs400",
    name: "Eric Johnson",
    position: "Leader",
    experience: "6 Years",
    work_place: "BBVA Bank",
    published_date: "2020-07-20T18:22:41.420Z"
  },
  {
    id: "xs500",
    name: "Abdul Rehman",
    position: "Leader",
    experience: "6 Years",
    work_place: "Ali Baba",
    published_date: "2020-07-20T18:22:41.420Z"
  }
]

const sectionCenter = document.getElementById('section-center');
console.log(typeof sectionCenter);

function loadDataFilter() {
  console.log("Fire DomContentLoaded Event When the HTML document has been completely loaded.");

  const strtDate = "2020-05-20T18:22:41.420Z";
  const endDate =   "2020-07-20T18:22:41.420Z";

  let resultDate = projects.filter(function (dateFilter) {
    if (dateFilter.published_date >=strtDate && dateFilter.published_date<=endDate) {
      return dateFilter;
    }
  });
  
  let resulebyWorkPlace = projects.filter(function (workItem) {
    if (workItem.work_place == "BBVA Bank") {
      console.log(workItem);
    }

  });
  console.log(typeof resultDate);

  let displayInformation = resultDate.map(function (item) {
    return `
      <ul class="list-group my-3">
        <li class="list-group-item highlight">Name: ${item.name}</li>
        <li class="list-group-item">Position: Java ${item.position}</li>
        <li class="list-group-item">Experience: ${item.experience}</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
      </ul>
    `;
  }).join("");
  console.log(displayInformation);
  sectionCenter.innerHTML = displayInformation;
}
window.addEventListener("DOMContentLoaded", loadDataFilter);