let options = {
    root: null, //which element do you want to use as the viewport
    rootMargin: "-250px 0px",
    threshold: 0 //what percentage of the element do you want to use as the trigger
}

let observer = new IntersectionObserver(isShowing, options);