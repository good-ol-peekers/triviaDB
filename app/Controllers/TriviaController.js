import { appState } from "../AppState.js";
import { triviaServices } from "../Services/TriviaService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTriviaQuestion() {
let template = ''
appState.triviaQuestions.forEach(q => template += q.TriviaQuestionTemplate)
 setHTML('questions', template)
}

export class TriviaController{
    constructor(){
        _drawTriviaQuestion()
        appState.on('triviaQuestions', _drawTriviaQuestion)
        
    }
async getQuestion(){
    try { 
        await triviaServices.getQuestion()
        
    } catch (error) {
        Pop.error(error)
        console.error(error)
    }
}
}