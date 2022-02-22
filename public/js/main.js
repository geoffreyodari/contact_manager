$(document).ready(()=>{
    $("form").submit(e=>{
        
        
        let phoneExpression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        let emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if($('#othernames').val() ==''){
            e.preventDefault()
            $('#othernames').siblings('p').text('Other names cannot be blank')
        }

        if($('#firstname').val()==''){
            e.preventDefault()
            $('#firstname').siblings('p').text('First name cannot be blank')
        }

        if(!emailExpression.test($('#email').val())){
            e.preventDefault()
            $('#email').siblings('p').text('Please enter a valid email')
        } 
        if(!phoneExpression.test($('#phone').val())){
            e.preventDefault()
            $('#phone').siblings('p').text('Please enter a valid 10 digit phone number')
        }
    })

    //Delete Record
    $('.deleterecord').on('click',function(){
                var id = $(this).attr('data-id');
                console.log(id);
                if (ConfirmDelete()) {
                $.ajax({
                    method: 'delete',
                    url: '/view/' + id,
                    success: function (response) {
                        console.log("Success DELETION!!" +id)
                        alert("Record deleted successfully.");
                        window.location.href = '/view';
                        
                    },
                    error: function (err) {
                        console.log(err)
                    }
                })
            }
        })
})

function ConfirmDelete() {
    var x = false;
    x = confirm("Are you sure you want to delete?");
    console.log(x)
    return x;
}

