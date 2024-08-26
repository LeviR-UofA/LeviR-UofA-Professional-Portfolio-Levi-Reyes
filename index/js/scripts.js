//Get user selected text
const getUserSelectedText = () => {
    return window.getSelection().toString();
}

//Knowing when user reaches the end of the screen
window.onscroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("You are at the end of the page")
    }
}

//Taking user back to top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});


//Detect if user is in dark-mode
const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
} 

//Go back to previous page
history.back();
history.go(-1);

//Removing duplicates from an array
const removeDuplicates = (arr) => [...new Set(arr)];

