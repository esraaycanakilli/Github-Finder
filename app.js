import Github from "./github.js"
import UI from "./ui.js"



const github=new Github()
const ui=new UI()

const searchUser=document.getElementById('search-user')
const searchButton=document.getElementById('search-button')

searchButton.addEventListener('click',getInput)
searchUser.addEventListener('keypress',(e)=>{
    if(e.code==='Enter'){
    getInput()
    }
})

function getInput(){
if (searchUser.value!==""){
    github
    .getUser(searchUser.value)
    .then((data)=>{
     if (data.profile.message==="Not Found"){
        ui.showAlert('Aradığınız Kullanıcı Bulunamadı','alert alert-danger');
     }else{
        ui.showAlert('Kullanıcı Başarı ile Bulundu','alert alert-success');
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
    
     }
    })
}else{
    ui.showAlert('Aradığınız Kullanıcı Bulunamadı','alert alert-info');
    ui.clearProfile();
}
    searchUser.value=""
}


