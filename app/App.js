import { ValuesController } from "./Controllers/ValuesController.js";
import { TriviaController } from "./Controllers/TriviaController.js";

class App {
  // valuesController = new ValuesController();
  triviaController = new TriviaController();
}

window["app"] = new App();
