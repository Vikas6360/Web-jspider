let formData=document.querySelector('form');
formData.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Targeting each elements
    let user=document.getElementById('user').value;
    let pass=document.getElementById('pass').value;
    let cpass=document.getElementById('cpass').value;
    let mail=document.getElementById('mail').value;
    let num=document.getElementById('num').value;
    let gen=document.getElementById('gender').value;
    let date=document.getElementById('date').value;

    //targeting errors 
    let uerror=document.getElementById('uerror');
    let perror=document.getElementById('perror');
    let cperror=document.getElementById('cperror');
    let merror=document.getElementById('merror');
    let nerror=document.getElementById('nerror');
    let derror=document.getElementById('derror');
    let gerror=document.getElementById('gerror');

    uerror.textContent="";
    perror.textContent="";
    cperror.textContent="";
    merror.textContent="";
    nerror.textContent="";
    derror.textContent="";
    gerror.textContent="";

    let valid=true;
    //Trim removes the empty spaces
    let userValue=user.trim();
    if(!userValue)
    {
        uerror.textContent="username cannont be empty";
        valid=false;
    }
    else if(userValue.length<2 || userValue.length>15)
    {
        uerror.textContent="Characters between 2 to 15";
        valid=false
    }
    else if(!/^[A-Za-z0-9_]+$/.test(userValue))
    {
        uerror.textContent="Only alphabets and numbers are allowed ";
        valid-=false;
    }
     
    let passValue=pass.trim();
    if(!passValue){
        perror.textContent="Can not be empty";
        valid=false;
    }
    else if(passValue.length<2 || passValue.length>15){
        perror.textContent="password should between 2 to 15 characters";
        valid=false;

    }
})