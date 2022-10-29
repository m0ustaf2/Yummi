// -----------Category----------------
let categoryBox = [];

async function getCategory() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  result = await response.json();
  categoryBox = result.categories;
  console.log(categoryBox);
  displayCategory();
}
getCategory();

function displayCategory() {
  let categ = "";
  for (let i = 0; i < categoryBox.length; i++) {
    categ += `
        <div class="col-md-3">
        <div class="homeMeal imgs position-relative rounded-1 shadow-lg  border-black border-2">
            <img src="${categoryBox[i].strCategoryThumb}" class="w-100 p-2" alt="category">
            <div class="mealLayer position-absolute d-flex align-items-center flex-column text-center p-3">
                <h3>${categoryBox[i].strCategory}</h3>
                <p>${categoryBox[i].strCategoryDescription}</p>
            </div>
        </div>
        </div>
    `
  }

  document.getElementById("category").innerHTML = categ;
}
// ----------------End-Category-----------------

// ****************arae section*******************
let array=[];
async function getArea(){
    let apiArea= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let responseArea= await apiArea.json();
    array=responseArea.meals;
    displayArea();
}
getArea();

function displayArea()
{
    let cartona = " ";
    for(let i=0;i<array.length;i++)
    {
        cartona +=`<div class="col-lg-3">
        <div class="area-icon d-flex flex-column justify-content-center align-items-center p-2 my-2">
            <i class="fa-solid fa-city fa-3x  mb-2 "></i>
            <h2 class="text-white fw-light">${array[i].strArea}</h2>
        </div>
    </div>`
    }
    document.getElementById('area').innerHTML=cartona;
}
// **********************end-area*********************
// ------------------ingredients------------------
let ingredients=[];
async function getIngre(){
    let apiIngre= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list%22`)
    let responseIngre= await apiIngre.json();
    ingredients=responseIngre.meals;
    displayIngre();
}
getIngre();

function displayIngre()
{
    let ingreBox = " ";
    for(let i=0;i<20;i++)
    {
        ingreBox +=`<div class="col-lg-3 col-md-6">
        <div class="innerIngredients d-flex flex-column justify-content-center align-items-center text-center py-4 my-2 ">
            <div class=" w-75 shadow-sm">
            <i class="fa-solid fa-bowl-food fa-3x text-success"></i>
            <h3 class="text-white fw-light">${ingredients[i].strIngredient}</h3>
            <p class="text-white lh-sm ">${ingredients[i].strDescription} </p>
            </div>
        </div>
    </div>`
    }
    document.getElementById('ingredients-div').innerHTML=ingreBox;
}
// ------------------------end-ingredients--------------------

// ------------------Side-nav-animation------------------------------
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
