$(document).ready(()=>{
    $("form").submit(e=>{
        
        
        let phoneExpression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        let emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if($(':input').val()==''){
            e.preventDefault()
            alert('inputs cannot be blank')
        }else if(!emailExpression.test($('#email').val())){
            e.preventDefault()
            alert('please enter a valid email')
        }else if(!phoneExpression.test($('#phone').val())){
            e.preventDefault()
            alert('invalid phone')
        }else{
            console.log("OK")
        }
    })
})