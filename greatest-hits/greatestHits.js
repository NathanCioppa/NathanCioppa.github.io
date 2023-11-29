window.addEventListener("scroll", albumAnimation)
window.addEventListener("resize", albumAnimation)

let albums = document.getElementsByClassName("album-wrapper")

function albumAnimation() {

    let navbar = document.getElementById('navbar')
    let navbarHeight = navbar.clientHeight 
    + Number(getComputedStyle(navbar).borderTopWidth.slice(0, -2)) // add width of navbar top border
    
    for(let i = 1; i< albums.length; i++) {
        let album = albums[i];
        let distanceFromTop = album.getBoundingClientRect().top - navbarHeight

        album.querySelectorAll('.album-cover')[0].style.transform = 
        `rotateX(-${
            distanceFromTop < 3 
            ? 0 
            : (distanceFromTop / window.innerHeight) * 100
        }deg)`
    }
}