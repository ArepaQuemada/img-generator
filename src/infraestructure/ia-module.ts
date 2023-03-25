import { OpenAIApi, Configuration } from "openai";

export class IaModule {
  configuration: Configuration;
  openAiApi: OpenAIApi;

  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openAiApi = new OpenAIApi(this.configuration);
  }

  getModule() {
    return this.openAiApi;
  }
}
