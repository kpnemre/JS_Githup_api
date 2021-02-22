const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUser = document.getElementById("clear-last-users");
const lastUser = document.getElementById("last-users");
const github = new Github();
const ui= new UI();


eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUser.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}
function getData(e) {
  let username = nameInput.value.trim();
  // trim gereksiz boşlukları temizler
  if (username === "") {
    alert("Enter a valid name");
  } else {
    github.getGithubData(username)
    // .then(res=> console.log(res))
    .then(res=> {
        if(res.user.message==="Not Found"){
            ui.showError("Hatalı isim girişi yaptınız")
        }
        else{
            ui.showInfo(res.user)
            ui.showRepo(res.repo)
        }
    })
    // .catch(err=>console.log(err))
    .catch(err=>ui.showError(err))
    // promise döneceği için then ile yakalamamız gerekecek
    
  }

  ui.clearInput();
  e.preventDefault();
  // sayfanın yenilenmesini önler
}

function clearAllSearched() {}

function getAllSearched() {
  // arananları al ve Uİ ye ekle
}
