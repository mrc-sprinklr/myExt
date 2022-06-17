fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(Q => document.getElementById("qoute").innerHTML = `<b>[${Q.anime}]<b><br>${Q.character} :<br><i>"${Q.quote}"<i><br>`)
    .catch(response => console.log(response.status));