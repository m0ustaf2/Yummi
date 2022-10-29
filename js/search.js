// *********************Search**************************
let searchName = document.getElementById("byName");
let searchLetter = document.getElementById("byLetter");
let mealsArray =[];
async function getSearch() {
  let apiSearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
  let currentSearch = await apiSearch.json();
  mealsArray = currentSearch.meals;
}
getSearch();
searchLetter.addEventListener("keyup", function () {
  let cartona = "";
  for (let i = 0; i < mealsArray.length; i++) {
    if (mealsArray[i].strMeal.includes(searchLetter.value)) {
      cartona += `
      <div  class="col-lg-3 col-md-6 overflow-hidden text-center ">
          <div  class="images">
              <img class="w-100 h-100" src="${mealsArray[i].strMealThumb}" alt="">
              <div class="shadow-photo">
                  <h2>${mealsArray[i].strMeal}</h2>
              </div>
          </div>
      </div>
  `
    }
    document.getElementById("searchResult").innerHTML = cartona;
  }
});
let nameArray=[];
async function getSearchName() {
    let apiSearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    let currentSearch = await apiSearch.json();
    nameArray = currentSearch.meals;
  }
  getSearchName();
searchName.addEventListener("keyup", function () {
  let cartona = "";
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].strMeal.toLowerCase().includes(searchName.value.toLowerCase())) {
      cartona += `
      <div  class="col-lg-3 col-md-6 overflow-hidden text-center ">
          <div  class="images">
              <img class="w-100 h-100" src="${nameArray[i].strMealThumb}" alt="">
              <div class="shadow-photo">
                  <h2>${nameArray[i].strMeal}</h2>
              </div>
          </div>
      </div>
  `
    }
    document.getElementById("searchResult").innerHTML = cartona;
  }
});
// ****************************End-Search**********************************
// -------------------------------------jquery---------------------------------
let sideNavWidth = $(".side-nav").innerWidth();
let innerNav = $(".nav-left").innerWidth();
$(".side-nav").animate({ left: -innerNav }, 0);
$(".show").click(function () {
  if ($(".side-nav").css("left") == "0px") {
    $(".side-nav").animate({ left: -innerNav }, 500, function () {
      $(".close").css("display", "none");
      $(".hide").css("display", "unset");
    });
    $(".nav-content").slideToggle(1000);
  } else {
    $(".side-nav").animate({ left: 0 }, 500, function () {
      $(".close").css("display", "unset");
      $(".hide").css("display", "none");
    });
    $(".nav-content").slideToggle(1000);
  }
});
// -----------------End-Side-nav-animation---------------------------
// **************Laoding-Screen*************
$("document").ready(function () {
  $("#loading").fadeOut(1000, function () {
    $("body").css("overflow", "visible");
  });
});
// ***************End-Loading-Screen********