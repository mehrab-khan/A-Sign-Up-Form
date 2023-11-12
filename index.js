let container = document.querySelector('.container')
    let btn = document.querySelector('#dark');
    let body = document.querySelector('body')
    let hdr = document.querySelector('.header')
    let p = document.querySelector('.first-name')
    let p2 = document.querySelector('.last-name')
    let p3 = document.querySelector('.degree')
    let p4 = document.querySelector('.email')
    let p5 = document.querySelector('.fav-sub')
    let p6 = document.querySelector('.gender')
    let text = document.getElementsByClassName('txt')[0]
    let textX = document.getElementsByClassName('txt')[1]
    let textY = document.getElementsByClassName('txt')[2]
    let text4 = document.querySelector('.gendertxt') 
    let text2 = document.querySelector('.gendertxt2')
    let rm = document.querySelector('.rm')
    let button = document.querySelector('#btn2')
    //inputs
    let firstname = document.querySelector('#first-name')
    let lastname = document.querySelector('#last-name')
    let email = document.querySelector('#email')
    let degreeis = document.querySelector('#degrees')
    //table
    let firstName = document.querySelector('.firstName')
    let lastName = document.querySelector('.lastName')
    let e_mail = document.querySelector('.e-mail')
    let gender4 = document.querySelector('.gender4')
    let favSub = document.querySelector('.favsub')
    let degree = document.querySelector('.degree2')
    let values = [];
    button.addEventListener('click', ()=>{
        let checkbox = document.querySelectorAll('input[name="sub"]:checked')
        checkbox.forEach((checkbox)=>{
            values.push(checkbox.value)
        })
        
    })
     


     
    btn.addEventListener('click', (e)=>{
        rm.classList.toggle('rr')
    btn.classList.toggle('pera') 
    body.classList.toggle('is2')
    container.classList.toggle('is')
    hdr.classList.toggle('hdr')
    p.classList.toggle('hdr')
    p2.classList.toggle('hdr')
    p3.classList.toggle('hdr')
    p4.classList.toggle('hdr')
    p5.classList.toggle('hdr')
    p6.classList.toggle('hdr')
    text.classList.toggle('hdr')
    textX.classList.toggle('hdr')
    textY.classList.toggle('hdr')
    text4.classList.toggle('hdr')
    text2.classList.toggle('hdr')
    })
    button.addEventListener('click', ()=>{
        firstName.textContent = firstname.value
     
        lastName.textContent = lastname.value
        e_mail.textContent = email.value
     
        favSub.textContent =  values 
    
        degree.textContent = degreeis.value
        var gender = document.querySelector('input[name = gender]:checked').value;
        gender4.innerHTML = gender;
    })
    







