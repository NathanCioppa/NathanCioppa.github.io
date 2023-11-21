window.addEventListener("scroll",setScrollVar);
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const root = document.documentElement;
    const pageHeader = document.querySelector("#page-header");
    const percentOfViewportCoveredByHeader = (pageHeader.clientHeight / root.clientHeight)*100;
    const percentOfHeaderVisible = 100-(Math.min((root.scrollTop / root.clientHeight)*100, percentOfViewportCoveredByHeader) / percentOfViewportCoveredByHeader)*100;
    
    root.style.setProperty("--header-visibilty-percent", percentOfHeaderVisible)
    root.style.setProperty("--header-fully-visible", Math.floor(percentOfHeaderVisible/100))
    
    if(percentOfHeaderVisible === 0) root.style.setProperty("--header-invisible", 1)
    else root.style.setProperty("--header-invisible", 0)
}

setScrollVar();