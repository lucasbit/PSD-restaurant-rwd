document.addEventListener('DOMContentLoaded', function(){

    

    let dropDownVisible = false;
    const burgerMenuBtn = document.querySelector(".header__nav__hamburger-btn");
    const dropDownNavItems = document.querySelector(".header__nav-items");
    const dropDownNavItem = document.querySelectorAll(".header__nav-item");
    const dropDownNavItemLink = document.querySelectorAll(".header__nav-item a");
    
    const dropDown = () => {
        if(!dropDownVisible) {
            dropDownNavItems.classList.add('show');
            dropDownNavItem.forEach(element => element.classList.add('show'));
            dropDownNavItemLink.forEach(element => element.classList.add('show'));
            dropDownVisible = true;
        } else {
            dropDownNavItems.classList.remove('show');
            dropDownNavItem.forEach(element => element.classList.remove('show'));
            dropDownNavItemLink.forEach(element => element.classList.remove('show'));
            dropDownVisible = false;
        }
    }
    burgerMenuBtn.addEventListener('click',dropDown);

    //Slider//////////////////////////////////////////////////////////////////////////////
    
    let sliderItem1 = document.getElementById('sliderItem1');
    let sliderItem2 = document.getElementById('sliderItem2');
    let sliderItem3 = document.getElementById('sliderItem3');
    let sliderItem4 = document.getElementById('sliderItem4');
    const arrowLt = document.getElementById('sliderArrowLt');
    const arrowRt = document.getElementById('sliderArrowRt');
    
    
    const sliderItems = [];
    let counter1 = 1;
    let counter2 = 1;
    let counter3 = 2;
    let counter4 = 3;

    arrowLt.addEventListener('click', function() {
        console.log('gfyt',counter1);
        
        counter1 <= 0 ? counter1 = 3 : counter1--;
        
        console.log(counter1);


        sliderItems[0] = sliderItem1;
        sliderItems[1] = sliderItem2;
        sliderItems[2] = sliderItem3;
        sliderItems[3] = sliderItem4;
        sliderItem1.innerHTML = sliderItems[counter1].innerHTML;
        sliderItem2.innerHTML = sliderItems[counter2].innerHTML;
        sliderItem3.innerHTML = sliderItems[counter3].innerHTML;
        sliderItem4.innerHTML = sliderItems[counter4].innerHTML;

        // console.log('dzia',sliderItems[counter1].innerHTML);
    


        // counter1 = 0 ? counter1 = 3 : counter1--;
        // counter2 = 0 ? counter2 = 3 : counter1--;
        // counter3 = 0 ? counter3 = 3 : counter1--;
        // counter4 = 0 ? counter4 = 3 : counter1--;
    })

    // sliderItems[0] = sliderItem1;
    // sliderItems[1] = sliderItem2;
    // sliderItems[2] = sliderItem3;
    // sliderItems[3] = sliderItem4;
    // sliderItem1.innerHTML = sliderItems[counter1].innerHTML;
    // sliderItem2.innerHTML = sliderItems[counter2].innerHTML;
    // sliderItem3.innerHTML = sliderItems[counter3].innerHTML;
    // sliderItem4.innerHTML = sliderItems[counter4].innerHTML;

});

