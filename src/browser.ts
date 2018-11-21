import Base from "./lib/base";

class BrowserLogger extends Base {
  public constructor(apiKey: string) {
    super(apiKey);
    console.log("Hello from the browser!");

    this.setSync(async log => log);
  }
}

export default BrowserLogger;
