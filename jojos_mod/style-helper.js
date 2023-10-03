const STAT_LIST_PLACEHOLDER_HEIGHT_PX = 40;

window.onresize = () => {
    showHideStatListPlaceholder();
}

window.onload = () => {
    showHideStatListPlaceholder();
}

function showHideStatListPlaceholder() {
    if(window.innerWidth <= 1000) return;

    const statListPlaceholderContainers = document.getElementsByClassName('stat-list-end-placeholder-container');

    for(let i=0; i<statListPlaceholderContainers.length; i++) {
        const imageContainer = statListPlaceholderContainers[i];
        const image = imageContainer.firstElementChild;

        if(imageContainer.clientHeight < STAT_LIST_PLACEHOLDER_HEIGHT_PX *1.5)
            image.style.display = "none";
        else
            image.style.display = "unset";
        
    }
}