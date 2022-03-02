let about = document.getElementById('container-about-show')
let habilitie = document.getElementById('habilitie-show')
let jobsb = document.getElementById('jobs-show')
let c2 = document.getElementById('div-dois')
let text = document.getElementById('container-text-about')
let loading = document.getElementById('loading-animition')
let showinfo = document.getElementById("show-info")
let load = document.getElementById('loading-animat')
let bg = document.getElementById('show-name')
let ext = document.getElementById('exit-btn')
// DIV THAT SHOWS THW SELECTED
let sel = document.getElementById("selected")

function hab (){

    if(about.style.height = '100%'|| jobsb.style.width =='100%'){
        about.style.height = '0%'
        jobsb.style.width = '0%'
        loading.style.opacity='0'
        bg.style.opacity ='0'
        ext.style.opacity = '1'
        
    }

    setTimeout(() => {
        habilitie.style.width = '100%'
        text.style.opacity = '0'
        load.style.width = '30px'
        load.style.height = '30px'
        load.style.opacity ='1'

    }, 1000);
   
   
    if(habilitie.style.display = 'grid'){
        sel.style.left= '5.5%'
        sel.style.width='7.7%'
        sel.style.opacity='1'
    
    }
}
function abt(){
    if(habilitie.style.width = '100%'|| jobsb.style.width =='100%'){
        habilitie.style.width = '0%'
        jobsb.style.width = '0%'
        loading.style.opacity ='0'
        load.style.width = '0'
        load.style.height= '0'
        load.style.opacity ='0'
        bg.style.opacity ='0'
        ext.style.opacity = '1'
    }

    setTimeout(() => {  
        about.style.height = '100%'
        text.style.opacity = '1'
        loading.style.opacity='0'

    }, 1000);

    if(about.style.display ='flex'){
        sel.style.left='23.4%'
        sel.style.width='5%'
        sel.style.opacity='1'
      
    }
}
 function jobs(){
    if(habilitie.style.width = '100%'|| about.style.height =='100%'){
        about.style.height = '0%'
        habilitie.style.width = '0%'
        load.style.width = '0'
        load.style.height= '0'
        load.style.opacity ='0'
        bg.style.opacity ='0'
        ext.style.opacity = '1'
        
    } 

    setTimeout(() => {
        
        loading.style.opacity='1'
        text.style.opacity = '0'
        jobsb.style.width = '100%'
    }, 1000);
    
    if(jobsb.style.display = 'flex'){
        sel.style.left ='40.4%'
        sel.style.width='4.3%'
        sel.style.opacity='1'


    }

}
    function closeex(){
        text.style.opacity ='0'
        habilitie.style.width = '0%'
        jobsb.style.width = '0%'
        loading.style.opacity ='0'
        load.style.width = '0'
        load.style.height= '0'
        load.style.opacity ='0'
        bg.style.opacity ='0'
        ext.style.opacity = '0' 
        sel.style.width ='0'
        setTimeout(() => {  
            bg.style.opacity ='1'          
        }, 1000);
}
