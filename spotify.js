function getToken() {

    const mobileCode = mobileAuthCode()

    const hash = window.location.hash
    const token = mobileCode === null ? hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1] : mobileCode
    const tokenInput = document.getElementById('showToken')
    tokenInput.value = token

    tokenInput.select()
    tokenInput.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(tokenInput.value)
}

function mobileAuthCode() {
    const url = window.location.href
    const params = new URLSearchParams(url)
    const code = params.get('code')
    return code
}
