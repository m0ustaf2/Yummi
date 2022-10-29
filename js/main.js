let mealsInfo = [];
async function getData() {
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s`
  );
  let response = await apiResponse.json();
  mealsInfo = response.meals;
  displayData();
  imgClick();
  
}
getData();
// ***********displayData from api****************
function displayData() {
  let cols = "";
  for (let i = 0; i < mealsInfo.length; i++) {
    cols += `

<div  class="col-md-3 ">
    <div class="imgs position-relative rounded-2">
       <img  class="w-100" src=${mealsInfo[i].strMealThumb} alt="meal-img">
       <div class="mealLayer d-flex align-items-center position-absolute ">
        <h3 class="mx-2">${mealsInfo[i].strMeal}</h3>
       </div>
    </div>
</div>
    
    `;
  }

  document.getElementById("imgsData").innerHTML = cols;
}
// ----****************End-Display*****************-----
var Index;
function imgClick() {

  $(".imgs").click(
      function () {
          Index =$(".imgs").index(this);
          let fetchMealById= async()=>{
            let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsInfo[Index].idMeal}`)
            responseDataOfMeal =await meals.json();
            localStorage.setItem('meal', JSON.stringify(responseDataOfMeal))
          }
          fetchMealById().then(function(result) {
            console.log(result)
            location.href ="./index2.html"
          })
      }
)
}

(function () {
var arr =JSON.parse(localStorage.getItem("meal"));
console.log(arr.meals[0].strMealThumb);
$('#imgDetails').attr('src' , arr.meals[0].strMealThumb )
$('.nameMeal').html(arr.meals[0].strMeal)
$('.longDs').html(arr.meals[0].strInstructions)
$('.country').html(arr.meals[0].strArea)
$('.ctg').html(arr.meals[0].strCategory)
$('.tag').html(arr.meals[0].strTags)
$('.source').attr('href', arr.meals[0].strSource )
$('.youTube').attr('href', arr.meals[0].strYoutube )


$('.desc').html(arr.meals[0].strMeasure1+arr.meals[0].strIngredient1)
})()


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
  $("#loading").fadeOut(2000, function () {
    $("body").css("overflow", "visible");
  });
});
// ***************End-Loading-Screen*********

// ****************Contact-******************
// **************name-input-validation**************
var nameAlert =document.getElementById('nameAlert');
var  nameInput=document.getElementById('nameInput');
var submit=document.getElementById('submit');
var nameRejex=/[a-z A-Z][^#&<>\"~;$^%{}?]{1,20}$/
var  mailRejex=(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
var  phoneRejex=/^01[0125][0-9]{8}$/
var  ageRejex= /^[1-9]?[0-9]{1}$|^100$/
var  passRejex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
var  repassRejex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
nameInput.onkeyup=function()
{
    if(nameRejex.test(nameInput.value))
    {
        // submit.removeAttribute('disabled')
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        nameAlert.classList.add('d-none')
    }
    else{
        submit.disabled='true';
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        nameAlert.classList.remove('d-none')
    }
}
// ****************E-mail-input-validation*************
var emailAlert =document.getElementById('emailAlert');
var  emailInput=document.getElementById('emailInput');
emailInput.onkeyup=function()
{
    if(mailRejex.test(emailInput.value))
    {
        // submit.removeAttribute('disabled')
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        emailAlert.classList.add('d-none')
    }
    else{
        submit.disabled='true';
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        emailAlert.classList.remove('d-none')
    }
}
// -*********************phone-input-validation******************
var phoneAlert =document.getElementById('phoneAlert');
var  phoneInput=document.getElementById('phoneInput');
phoneInput.onkeyup=function()
{
    if(phoneRejex.test(phoneInput.value))
    {
        // submit.removeAttribute('disabled');
        phoneInput.classList.add('is-valid');
        phoneInput.classList.remove('is-invalid');
        phoneAlert.classList.add('d-none')
    }
    else{
        submit.disabled='true';
        phoneInput.classList.add('is-invalid');
        phoneInput.classList.remove('is-valid');
        phoneAlert.classList.remove('d-none')
    }
}
// *********************age-input-validation*********************
var ageAlert =document.getElementById('ageAlert');
var  ageInput=document.getElementById('ageInput');
ageInput.onkeyup=function()
{
    if(ageRejex.test(ageInput.value))
    {
        // submit.removeAttribute('disabled');
        ageInput.classList.add('is-valid');
        ageInput.classList.remove('is-invalid');
        ageAlert.classList.add('d-none')
    }
    else{
        submit.disabled='true';
        ageInput.classList.add('is-invalid');
        ageInput.classList.remove('is-valid');
        ageAlert.classList.remove('d-none')
    }
}
// *************************password-input-validation**********
var passAlert =document.getElementById('passAlert');
var  passInput=document.getElementById('passInput');
passInput.onkeyup=function()
{
    if(passRejex.test(passInput.value))
    {
        // submit.removeAttribute('disabled');
        passInput.classList.add('is-valid');
        passInput.classList.remove('is-invalid');
        passAlert.classList.add('d-none')
    }
    else{
        submit.disabled='true';
        passInput.classList.add('is-invalid');
        passInput.classList.remove('is-valid');
        passAlert.classList.remove('d-none')
    }
}
// ***********************Repassword-input-validation************
var repassAlert =document.getElementById('repassAlert');
var  repassInput=document.getElementById('repassInput');
repassInput.onkeyup=function()
{
    if(repassRejex.test(repassInput.value))
    {
        submit.removeAttribute('disabled');
        repassInput.classList.add('is-valid');
        repassInput.classList.remove('is-invalid');
        repassAlert.classList.add('d-none')
    }
    else{
        submit.disabled='true';
        repassInput.classList.add('is-invalid');
        repassInput.classList.remove('is-valid');
        repassAlert.classList.remove('d-none')
    }
}
// ****************end-contact********************
