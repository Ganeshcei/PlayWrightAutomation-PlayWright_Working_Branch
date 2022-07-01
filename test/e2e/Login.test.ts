import { Page } from "playwright";
import { LoginPageObjects } from "../../PageFactory/objectRepo/LoginPageObjects";
import { LoginPage } from "../../PageFactory/pageRepo/Login";

declare const page: Page;

describe('Launch Browser',()=> {

let Login: LoginPage;

let loginPageObjects = new LoginPageObjects();

beforeAll(async () =>{
     
     Login= new LoginPage(page); 
     
})
test(`Login Function`, async () => {
   await Login.navigateToURL();
   await Login.loginToApplication();
});

afterAll(async () =>{
    context.close();
    browser.close();
}
)
}







)