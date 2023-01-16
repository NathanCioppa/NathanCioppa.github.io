function getToken() {
    const hash = window.location.hash
    const token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
    const tokenInput = document.getElementById('showToken')
    tokenInput.value = token

    tokenInput.select()
    tokenInput.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(tokenInput.value)
}
