$(function(){
    
    function check_name(){
        var pattern = /^[a-z A-Z]*$/;
        var name = $('#name').val();
        var name_length = $('#name').val().length;
        if(name == '')
        {
            $('#name_error').html("name is required");
            $('#name_error').show();
            $('#name').css("border","2px solid #F90A0A");
            return true;
        }
        else if(name_length < 4 || name_length > 25 )
        {
            $('#name_error').html("First name having minimum 4 and maximum 25 characters");
            $('#name_error').show();
            $('#name').css("border","2px solid #F90A0A");
            return true;
        }
        else if(!pattern.test(name) && name !== '')
        {
            $('#name_error').html("it should contain only character");
            $('#name_error').show();
            $('#name').css("border","2px solid #F90A0A");
            return true;
        }
        else{
            $('#name_error').hide();
            $('#name').css("border","2px solid #34F458");
            return false;
        }
    }// check_name

    function check_email(){
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $('#email').val();
        if(email == '')
        {
            $('#email_error').html("Email is required");
            $('#email_error').show();
            $('#email').css("border","2px solid #F90A0A");
            return true;
        }
        else if(!pattern.test(email) && fname !== '')
        {
            $('#email_error').html("Enter valid email");
            $('#email_error').show();
            $('#email').css("border","2px solid #F90A0A");
            return true;
        }
        else{
            $('#email_error').hide();
            $('#email').css("border","2px solid #34F458");
            return false;
        }
    }// check_email

    function check_pass(){
        var pass = $('#pass').val();
        var pass_length = $('#pass').val().length;
        if (pass =='')
        {
            $('#pass_error').html("Password is Required");
            $('#pass_error').show();
            $('#pass').css("border","2px solid #F90A0A");
            return true;
        }
        else if (pass_length < 8)
        {
            $('#pass_error').html("it should contain atleast 8 characters");
            $('#pass_error').show();
            $('#pass').css("border","2px solid #F90A0A");
            return true;
        }
        else
        {
            $('#pass_error').hide();
            $('#pass').css("border","2px solid #34F458");
            return false;
        }
    } //check_pass

    function check_confirm_pass(){
        var pass = $('#pass').val();
        var confirm_pass = $('#confirm_pass').val();
        if (confirm_pass =='')
        {
            $('#confirm_error').html("you have to confirm the password");
            $('#confirm_error').show();
            $('#confirm_pass').css("border","2px solid #F90A0A");
            return true;
        }
        else if(confirm_pass != pass)
        {
            $('#confirm_error').html("Password did not match");
            $('#confirm_error').show();
            $('#confirm_pass').css("border","2px solid #F90A0A");
            return true;
        }
        else
        {
            $('#confirm_error').hide();
            $('#confirm_pass').css("border","2px solid #34F458");
            return false;
        }
    }   // check_confirm_pass

    function check_number(){
        var pattern = /^[0-9]*$/;
        var number = $('#number').val();
        var number_length = $('#number').val().length;
        if (number=="")
        {
            $('#number_error').html("Contact number is required");
            $('#number_error').show();
            $('#number').css("border","2px solid #F90A0A");
            return true;
        }
        else if(!pattern.test(number) && number != 0)
        {
            $('#number_error').html("only numbers are allowed");
            $('#number_error').show();
            $('#number').css("border","2px solid #F90A0A");
            return true;
        }
        else if(number_length != 11)
        {
            
            $('#number_error').html("Mobile number must be of 11 digits");
            $('#number_error').show();
            $('#number').css("border","2px solid #F90A0A");
            return true;
        }
        else if(number.charAt(0) != 0)
        {
            
            $('#number_error').html("First digit of number must be 0");
            $('#number_error').show();
            $('#number').css("border","2px solid #F90A0A");
            return true;
        }
        else if(number.charAt(1) != 3)
        {
            
            $('#number_error').html("Second digit of number must be 3");
            $('#number_error').show();
            $('#number').css("border","2px solid #F90A0A");
            return true;
        }
        else
        {
            $('#number_error').hide();
            $('#number').css("border","2px solid #34F458");
            return false;
        }
    }// check_number

    function check_country(){
        var pattern = /^[a-z A-Z]*$/;
        var country = $('#country').val();
        var country_length = $('#country').val().length;
        if(country == '')
        {
            $('#country_error').html("country is required");
            $('#country_error').show();
            $('#country').css("border","2px solid #F90A0A");
            return true;
        }
        else if(country_length < 4 || country_length > 35 )
        {
            $('#country_error').html("First name having minimum 4 and maximum 35 characters");
            $('#country_error').show();
            $('#country').css("border","2px solid #F90A0A");
            return true;
        }
        else if(!pattern.test(country) && country !== '')
        {
            $('#country_error').html("it should contain only character");
            $('#country_error').show();
            $('#country').css("border","2px solid #F90A0A");
            return true;
        }
        else{
            $('#country_error').hide();
            $('#country').css("border","2px solid #34F458");
            return false;
        }
    }// check_country

    function check_address(){
        var pattern = /^[a-z A-Z]*$/;
        var address = $('#address').val();
        var address_length = $('#address').val().length;
        if(address == '')
        {
            $('#address_error').html("address is required");
            $('#address_error').show();
            $('#address').css("border","2px solid #F90A0A");
            return true;
        }
        else if(address_length < 4 || address_length > 50 )
        {
            $('#address_error').html("First name having minimum 4 and maximum 50 characters");
            $('#address_error').show();
            $('#address').css("border","2px solid #F90A0A");
            return true;
        }
        else if(!pattern.test(address) && address !== '')
        {
            $('#address_error').html("it should contain only character");
            $('#address_error').show();
            $('#address').css("border","2px solid #F90A0A");
            return true;
        }
        else{
            $('#address_error').hide();
            $('#address').css("border","2px solid #34F458");
            return false;
        }
    }// check_address

    function check_img()
    {
        var property = document.getElementById('img').files[0];
        var img_name = property.name;
        var img_ext = img_name.split(".").pop().toLowerCase();
        var img_size = property.size;
        if (jQuery.inArray(img_ext , ['png','jpg','jpeg']) == -1)
        {
            alert("Please select the valid image!");
            return true;
        }
        else if(img_size > 20000)
        {
            alert("Image size is to large!");
            return true;
        }
        else
        { return false; }
    }// check_img

    $('#name').focusout(function(){ check_name(); });

    $('#email').focusout(function(){ check_email(); });

    $('#pass').focusout(function(){ check_pass(); });

    $('#confirm_pass').focusout(function(){ check_confirm_pass(); });

    $('#number').focusout(function(){ check_number(); });

    $('#address').focusout(function(){ check_address(); });

    $('#country').focusout(function(){ check_country(); });

    $('#img').change(function(){ check_img(); });

    // $('registeration').submit(function(){
    //     var fname_error_check  = check_fname();
    //     var lname_error_check  = check_lname();
    //     var email_error_check  = check_email();
    //     var pass_error_check  = check_pass();
    //     var confirm_error_check  = check_confirm_pass();
    //     var number_error_check  = check_number();
    //     if (fname_error_check==false && lname_error_check==false && email_error_check==false && pass_error_check==false && confirm_error_check==false && number_error_check==false)
    //     {
    //         alert("you have been registred successfully");
    //     }
    //     else
    //     {
    //         alert("You will have to fill the form correctlly and completely");
    //     }
    // });
    
    $('.register').click(function(){
        var name_check_error  = check_name();
        var email_check_error  = check_email();
        var pass_check_error  = check_pass();
        var confirm_check_error  = check_confirm_pass();
        var number_check_error = check_number();
        var country_check_error  = check_country();
        var address_check_error  = check_address();
        var img_check_error  = check_img();
        if (name_check_error==false &&  email_check_error==false && pass_check_error==false &&  confirm_check_error==false && number_check_error==false && country_check_error==false && address_check_error==false && img_check_error==false)
        {
            var form_data = new FormData();
            var name = $('#name').val();
            var  email= $('#email').val();
            var pass = $('#pass').val();
            var number = $('#number').val();
            var country = $('#country').val();
            var address = $('#address').val();
            var img = document.getElementById('img').files[0];
            var action = "register";
            form_data.append('name',name);
            form_data.append('email',email);
            form_data.append('pass',pass);
            form_data.append('number',number);
            form_data.append('country',country);
            form_data.append('address',address);
            form_data.append('file',img);
            form_data.append('register',action);
            $.ajax({
                url:"includes/action.php",
                method:"POST",
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                success:function(data){
                    alert(data);
                    window.location="index.php";
                }
            });
        }
        else
        {
            alert("You will have to fill the form correctly and completely");
        }

    });
});
