export class Trivia {
    constructor(data){
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    }



    get TriviaQuestionTemplate(){
        return `
        <div class="col-md-3 my-3">
        <div class="card ${this.category} ${this.type} ${this.difficulty} " >
          <div class="card-body">
            <p><b>${this.question}</b></p>
          </div>
        </div>
    </div>
        
        
        
        `
    }
}