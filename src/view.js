export const view = {

    notExist() {
        const h3 = document.querySelector(".error")
        h3.style.display = 'block'
        h3.innerHTML = "user does not exist"
    },

    getInfoUser(user) {
       
        const resultsInfo = document.querySelector(".container-results__info")
        const boxImg =  document.createElement("div")
        const img =  document.createElement("img")
        const boxInfo =  document.createElement("div")
        const username =  document.createElement("p")
        const name =  document.createElement("p")
        const bio =  document.createElement("p")

        // draw image
        boxImg.setAttribute("class", "box-img")
        img.setAttribute("class", "avatar")
        img.src = user.avatar_url
        boxImg.appendChild(img)
        resultsInfo.appendChild(boxImg)

        // draw info
        boxInfo.setAttribute("class", "box-info")

        username.setAttribute("class", "username")
        username.innerHTML = `@${user.login}`
        boxInfo.appendChild(username)

        name.setAttribute("class", "name")
        name.innerHTML = user.name
        boxInfo.appendChild(name)

        bio.setAttribute("class", "bio")
        bio.innerHTML = user.bio
        boxInfo.appendChild(bio)

        resultsInfo.appendChild(boxInfo)
        
    },

    showUserReps(reps) {
        console.log('reps');
        
    }
}