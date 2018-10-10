document.addEventListener('DOMContentLoaded', function(){

    // Header-nav DropDown menu

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
    
    const sliderItem1 = document.getElementById('sliderItem1');
    const sliderItem2 = document.getElementById('sliderItem2');
    const sliderItem3 = document.getElementById('sliderItem3');
    const sliderItem4 = document.getElementById('sliderItem4');
    const arrowLt = document.getElementById('sliderArrowLt');
    const arrowRt = document.getElementById('sliderArrowRt');
    
    
    const sliderItems = [];
    let counter1 = 0;
    let counter2 = 1;
    let counter3 = 2;
    let counter4 = 3;
    sliderItems[0] = sliderItem1;
    sliderItems[1] = sliderItem2;
    sliderItems[2] = sliderItem3;
    sliderItems[3] = sliderItem4;

    arrowLt.addEventListener('click', function() {

        sliderItem1.innerHTML = sliderItems[counter1].innerHTML;
        sliderItem2.innerHTML = sliderItems[counter2].innerHTML;
        sliderItem3.innerHTML = sliderItems[counter3].innerHTML;
        sliderItem4.innerHTML = sliderItems[counter4].innerHTML;
        
        // console.log('przed')
        // console.log('counter1',counter1);
        // console.log('counter2',counter2);
        // console.log('counter3',counter3);
        // console.log('counter4',counter4);
        counter1 <= 0 ? counter1 = 3 : counter1--;
        // // counter2 <= 0 ? counter2 = 3 : counter2--;
        // // counter3 <= 0 ? counter3 = 3 : counter3--;
        // // counter4 <= 0 ? counter4 = 3 : counter4--;
        // console.log('po')
        console.log('counter1',counter1);
        // console.log('counter2',counter2);
        // console.log('counter3',counter3);
        // console.log('counter4',counter4);
        
        
    
    })

    // show More btn///////////////
    const extraItems = document.querySelectorAll(".menu__hidden");
    const showMoreBtn = document.querySelector(".menu__show-more__btn");
    const arrowDownMenu = document.querySelector(".menu__show-more-arrow-down");
    
    
   let extraMenuHidden = true;
   showMoreBtn.addEventListener("click",()=> {
       if(extraMenuHidden) {
        extraItems.forEach((item)=> {
        item.classList.remove("menu__hidden");
        arrowDownMenu.classList.add("menu__hidden")
        extraMenuHidden = false;
        });
        } else {
        extraItems.forEach((item)=> {
        item.classList.add("menu__hidden");
        arrowDownMenu.classList.remove("menu__hidden")
        extraMenuHidden = true;
        }); 
    
        }
   });



});

