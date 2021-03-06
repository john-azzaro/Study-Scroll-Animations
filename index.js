function scrollAppear() {                                                        /* This function will control the reveal of the element on scroll.*/
    let para = document.querySelector('.para');                                  /* Select the para element and store as "para" variable */
    let paraPosition =  para.getBoundingClientRect().top;                            /* get the distance of where this element is relative to the window  by getting "para" and the methos .getBoundingClientRect(angle), then access the top property. */
    let screenHeight = window.innerHeight / 1.3;                                      /* use this to make sure it works for different screen sizes */
    console.log('paraPosition ' + paraPosition);
    console.log(screenHeight);

    if (paraPosition < screenHeight) {                                           /* if the position of the para element in less than the screen position, add class to para....*/
        $(".para").addClass("para-appear");
        console.log('para appears!!!')
    }
}

function handleScroll() {                                                        /* when handlescroll runs...*/ 
    $(document).on('scroll', function() {                                         /* listen on the document on scroll, and when the user scrolls, run scrollAppear */
        scrollAppear();
    });
}

function setupEventListeners() {                                              /* when setupEventListeners runs, run handleScroll*/
    handleScroll();
}

function initialize() {                                                        /* when app initilizes, run setupEventListeners */
    setupEventListeners();
}

$(initialize);                                                                /* initialize the app to runb on start*/
 
