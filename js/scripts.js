document.addEventListener('DOMContentLoaded', function(){

    // Header-nav DropDown menu

    let dropDownVisible = false;
    const burgerMenuBtn = document.querySelector(".header__nav-mobile-btn");
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


    // show More btn///////////////
    const extraItems = document.querySelectorAll(".menu__hidden-items");
    const showMoreBtn = document.querySelector(".menu__show-more__btn");
    const arrowDownMenu = document.querySelector(".menu__show-more-arrow-down");
    const arrowUpMenu = document.querySelector(".menu__show-more-arrow-up");
    let extraMenuHidden = true;

    const showMenu = ()=> {
        if(extraMenuHidden) {
            extraItems.forEach((item)=> {
                item.classList.remove("menu__hidden-items");
            });
            arrowDownMenu.classList.add("menu__hidden-items")
            extraMenuHidden = false;
        } else {
            extraItems.forEach((item)=> {
                item.classList.add("menu__hidden-items");
            }); 
            arrowDownMenu.classList.remove("menu__hidden-items")
            extraMenuHidden = true;
            }
    }
    showMoreBtn.addEventListener("click",showMenu);
    arrowDownMenu.addEventListener("click",showMenu);
    arrowUpMenu.addEventListener("click",showMenu);

});

