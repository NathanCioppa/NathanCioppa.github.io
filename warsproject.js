
function elem(elemendId) {
    return document.getElementById(elemendId)
}

function elemClass(className) {
    return document.getElementsByClassName(className)
}

const revBg = 'https://cdn.britannica.com/23/143623-050-3708C6A4/Surrender-of-Lord-Cornwallis-canvas-John-Laurens-1820.jpg'
const civBg = 'https://aaregistry.org/wp-content/uploads/2009/09/American-Civil-War-Battle.jpg'
const wwiBg = 'https://media.defense.gov/2021/Nov/09/2002890564/-1/-1/0/180305-O-D0439-001C.JPG'
const wiiBg = 'http://ropercenter.cornell.edu/sites/default/files/styles/800x600/public/Images/1024px-Eisenhower_d-day_0.jpg?itok=W0Q3Pva4'
const vieBg = 'https://cdn.britannica.com/41/142841-050-7EA0678B/troops-marsh-Mekong-delta-South-Vietnam-1967.jpg'
const modBg = 'https://api.army.mil/e2/c/images/2022/02/15/96128f5f/original.jpg'
const bibBg = ''

function changeView(button) {
    const id = button.id
    const views = elemClass('view-contents')
    const buttons = elemClass('nav-button')
    
    for(let i = 0; i < views.length; i++) {
        views[i].style.display = id.slice(0, 3) === views[i].id.slice(0,3) ? 'flex' : 'none'
        buttons[i].style.backgroundColor = views[i].style.display === 'flex' ? 'rgb(0,0,0,0.2)' : 'transparent'
    }

    const checkFor = [
        {period: 'rev', image: revBg}, 
        {period: 'civ', image: civBg}, 
        {period: 'wwi', image: wwiBg},
        {period: 'wii', image: wiiBg},
        {period: 'kor', image: vieBg},
        {period: 'vie', image: modBg},
        {period: 'mod', image: bibBg}
    ]

    for(let i=0;i<checkFor.length;i++) {
        if(checkFor[i].period === id.slice(0,3)) {
            elem('bg-image').src = checkFor[i].image
        }
    }

}