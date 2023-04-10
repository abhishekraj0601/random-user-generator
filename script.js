var btn = document.querySelector(".button")
btn.addEventListener("click",function(){
btn.textContent ="Getting User...";
btn.disabled= true
    var clutter =""
    axios.get("https://randomuser.me/api/").then(function(user){
        btn.textContent ="Get New User";
        btn.disabled= false

    author = user.data.results[0];
    
    clutter +=`<div class="abt-card mx-auto " style="margin-top: 100px;">
    <div class="imgbx">
      <img src="${author.picture.large}"  alt="">
    </div>
    <div class="container p-3">
        <div class="detail">
            <h2>${author.name.first +" " + author.name.last} <br> <span>${author.email}</span></h2>
            <div class="data m-0 p-0">
                <div class="data m-0 p-0 d-flex flex-column align-items-center gap-3">
                    <h2>Age <br><span>${author.dob.age}</span></h2>
                </div>
                <div class="data m-0 p-0 d-flex flex-column align-items-center gap-3">
                    <h2>Location<br><span>${author.location.country}</span></h2>
                </div>
                <div class="data m-0 p-0  d-flex flex-column align-items-center gap-3">
                    <h2>Gender <br><span>${author.gender}</span></h2>
                </div>
            </div>
            <div class="action">
                <button>contact</button>
                <button>message</button>
            </div>
        </div>
    </div>`


  var cards = document.querySelector(".cards")
  cards.innerHTML += clutter 

    })
})