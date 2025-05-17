/**
 * Lottery
 * 
 * design a class Lottery that has three public methods and a constructor
 * "nic f"- all will be unique, none invalid
 * -enter(string) -> nothing
 * -leave(string) -> nothing | err | message
 * -pick() -> string | err | message - random from among people in the lottery
 */

class Lottery {
    constructor(){
        this.people = []
        this.peoplePos = {}
    }
    
    enter(person){
        this.people.push(person)
        this.peoplePos[person] = this.people.length - 1
    }
    
    leave(person){
        if(this.peoplePos[person]){
            //Swap the positions of the person you want to move
            //and the person at the back of the list
            //make sure constant time complexity
           let save = this.people[this.people.length -1]
           let removePosition = peoplePos[person]
           this.people[removePosition] = save
           this.people.pop()
           this.peoplePos[save] = removePosition
           delete this.peoplePos[person]
     
        }
        else{
            console.error(person+ " was not found")
        }
    }
    
    pick(){
        if(this.people.length == 0){
            console.error("Nobody was found")
        }
        else{ 
        return this.people[Math.floor(Math.random() * this.people.length - 1)]
        }
    }
}

const lotto = new Lottery()
lotto.enter("nic")
lotto.enter("stef")
lotto.pick() // stef or nic


