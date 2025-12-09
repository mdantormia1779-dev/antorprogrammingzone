function Milestones(){
    const allmodules=document.querySelector(".allModule");
    allmodules.innerHTML=`${allData.map(
        function(Milestone){
            return ` <div class="orientation" id=${Milestone._id}>
                        <div class="center">
                          <input type="checkbox" onClick="markmilestone(this,${this,Milestone._id})">
                          <label for="" class="module" onclick="milestoneOpen(this,${Milestone._id})">${Milestone.name}</label>
                          <div class="icon"><i class="fa-solid fa-angle-down"></i></div>
                        </div>
                        <!-- module -->
                         <!-- hidden div -->
                          <div class="hidden show">
                           ${Milestone.modules.map(function(module){
                            return ` <div>
                              <p class="moduletittle">${module.name}</p>
                              <div class="modulebottom"></div>
                            </div>
                            <br>`
                           }).join("")}
                          </div>
                        <div class="borderbottom"></div>
                         <!-- orientation close -->  
                    </div>`
        }
    ).join("")}`
}

// jodi show thake hide korba hide thkla show korba
function milestoneOpen(milestoneElement,id){
  const corentPanel=milestoneElement.parentNode.nextElementSibling;
  document.querySelectorAll(".show").forEach(function(show){
    if(show !==corentPanel){
      show.classList.add("hidden");
    }
  })

// open cloce select panel
  corentPanel.classList.toggle("hidden")

// bold korba jodi bold thake tahola hide korba hide thakla bold korba
document.querySelectorAll(".active-milestone").forEach(function(bold){
  bold.classList.remove("active-milestone")
})
  milestoneElement.classList.add("active-milestone")

imagesall(id)

}

function imagesall(id){
  const allImages=document.querySelector(".mainimage");
  const heading=document.querySelector(".heading");
  const tittle=document.querySelector(".tittle");
  allImages.style.opacity ="0";
  allImages.onload=function(){
    allImages.style.opacity="1";
  }

  allImages.src = allData[id].image;
  heading.innerText=allData[id].name;
  tittle.innerText=allData[id].description;

}

function markmilestone(checkbox, id){
  const addList = document.querySelector(".addList");
  const milestoneElement = document.getElementById(id);

  if(checkbox.checked){
    // Checkbox checked হলে addList-এ পাঠাও
    addList.appendChild(milestoneElement);
  } else {
    // Checkbox unchecked হলে মূল container-এ ফেরত পাঠাও
    const allModules = document.querySelector(".allModule");
    allModules.appendChild(milestoneElement);
  }
}




Milestones()