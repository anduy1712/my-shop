var objCart = [{
    id: 1,
    img: 'https://cdn.fitin.vn/cms-ecom/thumbs/300x300/product-tmp/2020/08/10/ti214-1597055305.jpg',
    title: 'Bộ cấp Nước Se Khít Lỗ Chân Lông Sum37 Water-full Set 5p',
    price: '1.080.000đ',
    class: 'Phân loại: Bạc',
},
{
    id: 2,
    img: 'https://cdn.fitin.vn/cms-ecom/thumbs/300x300/images/2020/08/03/https-cdnfitinvn-cms-ecom-product-tmp-2020-05-25-14b2ff57e6298ec8f3fb63839e31a91f-1590402945-1596442723.jpg',
    title: 'Set dưỡng trắng trị nám Whoo Gong Jin Hyang Seol 5 món',
    price: '2.460.000đ',
    class: 'Phân loại: Bạc',
},
{
    id: 3,
    img: 'https://cdn.fitin.vn/cms-ecom/thumbs/300x300/images/2020/08/03/https-cdnfitinvn-cms-ecom-product-tmp-2020-05-25-14b2ff57e6298ec8f3fb63839e31a91f-1590402945-1596442723.jpg',
    title: 'Bộ cấp Nước Se Khít Lỗ Chân Lông Sum37 Water-full Set 5p',
    price: '5.080.000đ',
    class: 'Phân loại: Bạc',
}
];
//SET ITEM
var Data = localStorage.setItem('cartItem',JSON.stringify(objCart));
//GET ITEM
var getData = JSON.parse(localStorage.getItem('cartItem'));
// console.log(getData);


//SHOW ITEM
createCart();


function createCart(){
    getData.forEach(function(item,index){
        //CREATE ITEM CART
        var unlist = document.querySelector('.navbot__list');
        document.querySelector('.cart__btn-countItemCart').innerHTML = getData.length;
        var itemCart = document.createElement('li');
        itemCart.classList.add('navbot__list-item');
        itemCart.innerHTML = `
        <img src="${item.img}" alt="cart-img" class="navbot__list-img">
        <div class="navbot__list-select">
                <div class="select__top">
                        <span href="#" class="navbot__list-link">${item.title}</span>
                        <div class="select__top-options">
                                <span class="navtop__list-price">${item.price}</span>
                                <span class="navtop__list-amount">x6</span>
                        </div>
                </div>
                <div class="select__bot">
                        <span class="navbot__list-classify">${item.class}</span>
                        <span onclick="DeleteCart(${index})" class="navbot__list-delete">Xoá</span>
                </div>
                
        </div>`;
       
        
        unlist.appendChild(itemCart);
    })
}

function DeleteCart(index){
    getData.splice(index,1);
    // console.log(dataDeleted);
    // console.log(getData);

   updateCart(getData);
}
function updateCart(dataDeleted){
    if (dataDeleted)
    {
        if(dataDeleted.length == 0)
        {
            var unlist = document.querySelector('.navbot__list');
            unlist.remove();
            document.querySelector('.cart__btn-countItemCart').innerHTML = dataDeleted.length;
            document.querySelector('.navbot__title-overCart').classList.toggle('hidden');
            document.querySelector('.navbot__title').classList.toggle('hidden');
            
            document.querySelector('.navbot__btn').classList.toggle('hidden');
            
        }
        
        
        dataDeleted.forEach(function(item,index){
            //CREATE ITEM CART
            
            var unlist = document.querySelector('.navbot__list');
            
            var itemCart = unlist.querySelectorAll('li');
            
            itemCart.forEach(function(item){
                item.remove();
            })
            dataDeleted.forEach(function(item,index){
                //CREATE ITEM CART
                var unlist = document.querySelector('.navbot__list');
                document.querySelector('.cart__btn-countItemCart').innerHTML = dataDeleted.length;
                
                var itemCart = document.createElement('li');
                itemCart.classList.add('navbot__list-item');
                itemCart.innerHTML = `
                <img src="${item.img}" alt="cart-img" class="navbot__list-img">
                <div class="navbot__list-select">
                        <div class="select__top">
                                <span href="#" class="navbot__list-link">${item.title}</span>
                                <div class="select__top-options">
                                        <span class="navtop__list-price">${item.price}</span>
                                        <span class="navtop__list-amount">x6</span>
                                </div>
                        </div>
                        <div class="select__bot">
                                <span class="navbot__list-classify">${item.class}</span>
                                <span onclick="DeleteCart(${index})" class="navbot__list-delete">Xoá</span>
                        </div>
                        
                </div>`;
               
                
                unlist.appendChild(itemCart);
            })
        })
    }
}






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
//Timer counter
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      birthday = "Dec 17, 2020 00:00:00";

let countDown = new Date(birthday).getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

        headline.innerText = "It's my birthday!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }

    }, second)



//Kiểm tra các trường 
function Validator(options) {
    var selectorRule = {};
    //Lấy thẻ <form>
    var formElement = document.querySelector(options.form)




    //Lấy lớp cha
    function getParent(element,selector){
        while(element.parentElement)
        {
            //Tìm lớp cha có id là #form__group
            if ( element.parentElement.matches(selector)) // selector: #form__group
            {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    //Hàm kiểm tra lỗi 
    function validate(inputElement,rules){
        
        //Kiểm tra điều kiện 
        var errorMessage; 
        //Lấy thẻ <span> dùng để hiển thị lỗi 
        var errorElement = getParent(inputElement,options.formGroup).querySelector(options.errorSeletor); // options.errorSeletor lấy tên class 
        //Lưu các rule
        var rules = selectorRule[rules.selector];   // 
        console.log(rules.selector);
        //Duyệt từng phần từ (hàm) trong mảng rules
        for (var i = 0 ; i < rules.length ;i++)
        {
            //Hàm truyền giá trị vào 
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rules.selector + ':checked'));
                    
                    break;
                default:
                    errorMessage = rules[i](inputElement.value) //inputElement.value Lấy giá trị trong thẻ <input >
                    
            }
            
            //Nếu lỗi thì dừng ngay
            if(errorMessage) break;
        }
        //Kiểm tra errorMessage có lỗi ko
        //Lỗi thì thêm class 'invalid              
        if (errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement,options.formGroup).classList.add('invalid');
        }
        //Nếu không lỗi thì xoá class 'invalid'
        else{
            errorElement.innerText = '';
            getParent(inputElement,options.formGroup).classList.remove('invalid');

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
                    value[input.name] = input.value;
                    return  value;
                }, {}) //??????
                options.onSubmit(arrayValue);
            }
        }
        // Duyêt mảng rules, 
        options.rules.forEach(function(rules){
            // Lấy thẻ input, VD như: <input id="name">
            var inputElements = formElement.querySelectorAll(rules.selector)  // rules.selector, VD như: #name , #email
            
            //Nếu là mảng thì thêm phần từ mới vào mảng
            if(Array.isArray(selectorRule[rules.selector]))
            {
                selectorRule[rules.selector].push(rules.test)

            }else{ //Nếu ko phải là mảng thì gán mảng 
                selectorRule[rules.selector] = [rules.test];
            }
            //????
            Array.from(inputElements).forEach(function(inputElement){
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
            })

            

        })
    }
    
}
/*Định nghĩa các rules, bao gồm:
    1 Kiểm tra rỗng
    2 Kiểm tra email
    3 Kiểm tra mật khẩu  */
Validator.isRequired = function (selector,message){
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Không được bỏ trống';
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

//TEST

function Cart(){
    

    

}
