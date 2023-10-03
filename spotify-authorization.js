function getToken() {

    const mobileCode = mobileAuthCode()
    console.log(mobileCode)

    const hash = window.location.hash
    const token = !window.location.href.includes('?code=') ? hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1] : mobileCode
    const tokenInput = document.getElementById('showToken')
    tokenInput.value = token

    tokenInput.select()
    tokenInput.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(tokenInput.value)
}

function mobileAuthCode() {
    const url = window.location.href
    const code = url.slice(url.indexOf('?code=')+6, url.length)
    return code
}
