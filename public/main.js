const toNax = document.querySelector('Naxxramas-button')
const toUld = document.querySelector('Ulduar-button')
const toIce = document.querySelector('IcecrownCitadel-button')

toNax.addEventListener('click', _  => {
    // Send PUT Request here
    fetch('/raid/Naxxramas', {
        method: 'get',

    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
  })

  toUld.addEventListener('click', _  => {
    // Send PUT Request here
    fetch('/raid/Ulduar', {
        method: 'get',

    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
  })

  toIce.addEventListener('click', _  => {
    // Send PUT Request here
    fetch('/raid/Icecrown_Citadel', {
        method: 'get',

    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
  })

 