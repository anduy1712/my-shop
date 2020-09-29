
function openModal(value) {
    document.getElementById(value).style.display = 'flex';
}
function closeModal(value) {
    document.getElementById(value).style.display = 'none';
}
//Đổi ảnh
function changeImg(value){
    
    var formElement = document.getElementById(value.form);
    if(formElement)
    {
       
        var imgElement = formElement.querySelectorAll('.dealhot__listimg-item');
        var imgMain = formElement.querySelector('.dealhot__item-img');
        
        
        imgElement.forEach(function(value){
            //value: the <img>
            
            value.onclick = function (){
                
                switch(value.id){
                    case 'oneImg':
                        imgMain.setAttribute('src',value.getAttribute('src'));
                        value.classList.add('selectImg');
                        //Loi

                        formElement.getElementsByClassName('dealhot__listimg-item')['twoImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['threeImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['fourImg'].classList.remove('selectImg');
                        break;
                    case 'twoImg':
                        imgMain.setAttribute('src',value.getAttribute('src'));
                        value.classList.add('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['oneImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['threeImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['fourImg'].classList.remove('selectImg');
                        break;
                    case 'threeImg':
                        imgMain.setAttribute('src',value.getAttribute('src'));
                        value.classList.add('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['oneImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['twoImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['fourImg'].classList.remove('selectImg');
                        break;
                    case 'fourImg':
                        imgMain.setAttribute('src',value.getAttribute('src'));
                        value.classList.add('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['oneImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['twoImg'].classList.remove('selectImg');
                        formElement.getElementsByClassName('dealhot__listimg-item')['threeImg'].classList.remove('selectImg');
                        break;
                }
                
                
            }
            
        })
    }

   
}



//Kiểm tra các trường 
function Validator(options) {
    var selectorRule = {};
    //Lấy thẻ <form>
    var formElement = document.querySelector(options.form)
    
    //Hàm kiểm tra lỗi 
    function validate(inputElement,rules){
        
        //Kiểm tra điều kiện 
        var errorMessage; //inputElement.value Lấy giá trị trong thẻ <input >
        //Lấy thẻ <span> dùng để hiển thị lỗi 
        var errorElement = inputElement.parentElement.querySelector(options.errorSeletor); // options.errorSeletor lấy tên class 
        //Lưu các rule
        var rules = selectorRule[rules.selector];   
        //Duyệt từng phần từ (hàm) trong mảng rules
        for (var i = 0 ; i < rules.length ;i++)
        {
            //Hàm truyền giá trị vào 
            errorMessage = rules[i](inputElement.value) //inputElement.value: giá trị của thẻ input 
            //Nếu lỗi thì dừng ngay
            if(errorMessage) break;
        }
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
        return !errorMessage;
    }
    
    //Kiểm tra xem có form không 
    if (formElement)
    {
        var formIsValid = true;
        formElement.onsubmit = function(e){
            e.preventDefault();
            options.rules.forEach(function(rules){
                var inputElement = formElement.querySelector(rules.selector) 
                var isValid = validate(inputElement,rules);
                if (isValid)
                {
                    formIsValid = true;
                }
                else{
                    formIsValid = false;
                    
                }
            })
            
           
            
            if (formIsValid)
            {
                var inputValue = formElement.querySelectorAll('[name]');
                var arrayValue = Array.from(inputValue).reduce(function(value,input){
                    return (value[input.name] = input.value) && value;
                }, {}) //??????
                options.onSubmit(arrayValue);
            }
        }
        // Duyêt mảng rules, 
        options.rules.forEach(function(rules){
            // Lấy thẻ input, VD như: <input id="name">
            var inputElement = formElement.querySelector(rules.selector)  // rules.selector, VD như: #name , #email
            
            //Nếu là mảng thì thêm phần từ mới vào mảng
            if(Array.isArray(selectorRule[rules.selector]))
            {
                selectorRule[rules.selector].push(rules.test)

            }else{ //Nếu ko phải là mảng thì gán mảng 
                selectorRule[rules.selector] = [rules.test];
            }
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
Validator.isConfirm = function (selector,isConfirm){
    return {
        selector: selector,
        test: function (value) {
            
            return value === isConfirm() ? undefined : 'Vui lòng nhập chính xác mật khẩu';
        }
    }
}

