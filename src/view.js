const resultsContainer = document.querySelector(".container-results")

export const view = {

    notExist() {

        this.removeAll()
        
        const h3 = document.createElement("h3")
        h3.setAttribute("class", "error")
        h3.style.display = 'block'
        h3.innerHTML = "user does not exist"
        resultsContainer.appendChild(h3)
        setTimeout(function() { resultsContainer.removeChild(h3)}, 3000)
    },

    getInfoUser(user) {
       
        this.removeAll()

        const resultsInfo = document.createElement("div")
        const boxImg = document.createElement("div")
        const img = document.createElement("img")
        const boxInfo = document.createElement("div")
        const username = document.createElement("p")
        const name = document.createElement("p")
        const bio = document.createElement("p")

        boxImg.setAttribute("class", "box-img")
        resultsInfo.setAttribute("class", "container-results__info")
        img.setAttribute("class", "avatar")
        boxInfo.setAttribute("class", "box-info")
        username.setAttribute("class", "username")
        name.setAttribute("class", "name")
        bio.setAttribute("class", "bio")
      
        img.src = user.avatar_url
        boxImg.appendChild(img)
        resultsInfo.appendChild(boxImg)
  
        username.innerHTML = `@${user.login}`
        boxInfo.appendChild(username)
      
        name.innerHTML = user.name
        boxInfo.appendChild(name)
      
        bio.innerHTML = user.bio
        boxInfo.appendChild(bio)

        resultsInfo.appendChild(boxInfo)
        resultsContainer.appendChild(resultsInfo)       
    },

    showUserReps(reps) {

        const listReps = document.createElement("div")     
        listReps.setAttribute("class", "container-results__reps")

        const listTitle = document.createElement("h3")
        listReps.appendChild(listTitle)
        listTitle.setAttribute("class", "list-title")
        listTitle.innerHTML = "Repositories"
        
        reps.forEach(repo => {
            const boxRepo = document.createElement("div")
            const boxRepoLeft = document.createElement("div")
            const boxRepoRight = document.createElement("div")
            const nameRepo = document.createElement("p")
            const forkImg = document.createElement("img")
            const starImg = document.createElement("img")
            const forkImgContainer = document.createElement("div")
            const starImgContainer = document.createElement("div")
            const forkNumber = document.createElement("p")
            const starNumber = document.createElement("p")

            boxRepo.setAttribute("class", "box-repo")
            boxRepoLeft.setAttribute("class", "box-repo-left")
            boxRepoRight.setAttribute("class", "box-repo-right")
            nameRepo.setAttribute("class", "repo-name")
            forkImgContainer.setAttribute("class", "fork-img-container")
            starImgContainer.setAttribute("class", "star-img-container")
            forkImg.setAttribute("class", "fork-img")
            starImg.setAttribute("class", "star-img")
            forkNumber.setAttribute("class", "fork-number")
            starNumber.setAttribute("class", "star-number")

            nameRepo.innerHTML = repo.name
            forkNumber.innerHTML = repo.forks_count
            starNumber.innerHTML = repo.stargazers_count
            starImg.src = "./src/images/star.svg"
            forkImg.src = "./src/images/fork.svg"

            boxRepoRight.appendChild(starImgContainer)
            starImgContainer.appendChild(starImg)
            boxRepoRight.appendChild(starNumber)
            boxRepoRight.appendChild(forkImgContainer)
            forkImgContainer.appendChild(forkImg)
            boxRepoRight.appendChild(forkNumber)
            boxRepoLeft.appendChild(nameRepo)
            boxRepo.appendChild(boxRepoLeft)
            boxRepo.appendChild(boxRepoRight)

            listReps.appendChild(boxRepo)
        })
   
        resultsContainer.appendChild(listReps)
    },
    
    removeAll() {

        const resultsInfo = document.querySelector(".container-results__info")

        if (resultsInfo) {
            while (resultsInfo.firstChild) {
                resultsInfo.firstChild.remove()
            }
            resultsContainer.removeChild(resultsInfo) 
        }

        const resultsReps = document.querySelector(".container-results__reps")

        if (resultsReps) {
            while (resultsReps.firstChild) {
                resultsReps.firstChild.remove()
            }
            resultsContainer.removeChild(resultsReps) 
        }
    },

    errorMessage(message) {
     
        this.removeAll()
        
        const h3 = document.createElement("h3")
        h3.setAttribute("class", "errorMessage")
        h3.style.display = 'block'
        h3.innerHTML = message
        resultsContainer.appendChild(h3)
        setTimeout(function() { resultsContainer.removeChild(h3)}, 3000)
    }
}