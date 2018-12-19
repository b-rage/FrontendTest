import { logic } from './logic'
import { view } from './view'
require ('./sass/style.sass')

const search = document.getElementById("search")

search.addEventListener("submit", e => {
    e.preventDefault()
  
    const input = document.getElementById("query") 
    const query = input.value

            
    logic.findUser(query)
        .then(user => {
            if (user.message == "Not Found") {
                return view.notExist()
            }

            view.getInfoUser(user)

            const username = user.login
  
            logic.findUserReps(username).then(reps => view.showUserReps(reps))
    })
    
})


