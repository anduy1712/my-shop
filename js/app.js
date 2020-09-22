
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}




//Kiểm tra các trường 
function Validator(options) {
    //Lấy thẻ <form>
    var formElement = document.querySelector(options.form)
    
    //Hàm kiểm tra lỗi 
    function validate(inputElement,rules){
        //Kiểm tra điều kiện 
        var errorMessage = rules.test(inputElement.value); //inputElement.value Lấy giá trị trong thẻ <input >
        //Lấy thẻ <span> dùng để hiển thị lỗi 
        var errorElement = inputElement.parentElement.querySelector(options.errorSeletor); // options.errorSeletor lấy tên class 
                    
        //Kiểm tra errorMessage có lỗi ko
        //Lỗi thì thêm class 'invalid              
        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        //Nếu không lỗi thì xoá class 'invalid'
        else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');

        }
    }

    //Kiểm tra xem có form không 
    if (formElement)
    {
        // Duyêt mảng rules, 
        options.rules.forEach(function(rules){
            // Lấy thẻ input, VD như: <input id="name">
            var inputElement = formElement.querySelector(rules.selector)  // rules.selector, VD như: #name , #email
            
            
            // Kiểm tra null
            if(inputElement)
            {
                //Xử lý trường hợp blur ra ngoài
                inputElement.onblur = function (){
                    //Hàm viết cho gọn
                    validate(inputElement,rules);
                }
                //Xử lý trường hợp đang nhập 
                inputElement.oninput = function (){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSeletor);                    
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
                
            }

        })
    }
}
/*Định nghĩa các rules, bao gồm:
    1 Kiểm tra rỗng
    2 Kiểm tra email
    3 Kiểm tra mật khẩu  */
Validator.isRequired = function (selector){
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        }
    }
}
Validator.isEmail = function (selector){
    return {
        selector: selector,
        test: function (value) {
            var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return reg.test(value) ? undefined : 'Phải nhập trường email này';
        }
    }
    
}
Validator.isPassword = function (selector,min){
    return {
        selector: selector,
        test: function (value) {
            
            return value.length >= min ? undefined : "Vui lòng nhập tối thiếu 6 kí tự"
        }
    }
}


