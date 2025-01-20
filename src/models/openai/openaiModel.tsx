import { makeAutoObservable } from "mobx";
import Cookies from "js-cookie";

class OpenAIModel {
  apiKey = "";

  constructor() {
    makeAutoObservable(this);
    this.loadApiKey();
  }

  loadApiKey() {
    const savedKey = Cookies.get("openAIKey");
    if (savedKey) {
      this.apiKey = savedKey;
    }
    console.log("??", savedKey, this.apiKey);
  }

  setApiKey = (key: string) => {
    this.apiKey = key;
    Cookies.set("openAIKey", key);
  };

  clearApiKey = () => {
    this.apiKey = "";
    Cookies.remove("openAIKey");
  };
}

const openaiModel = new OpenAIModel();
export default openaiModel;
