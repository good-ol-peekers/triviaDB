import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js"
import { triviaDB } from "./AxiosService.js"

class TriviaService {

    async getQuestion(){
        console.log('$questions')
        const res = await triviaDB.get('api.php?amount=10&difficulty=easy&type=multiple')
        console.log('gotQuestions', res.data.results)
        const questions = res.data.results.filter(q => q.difficulty).map(q => new Trivia(q))
        appState.triviaQuestions = questions
        console.log(appState.triviaQuestions)

    }
    
}
export const triviaServices = new TriviaService()