Feature('GoogleSearch');

Scenario('test something',  ({ I }) => {

});

Scenario('prime number' , async ({ I }) => {
    I.amOnPage('file:///C:/Users/Civil/Desktop/a1.html');
    I.wait('3');
    I.fillField("input",8);
    I.click('Check');
    I.acceptPopup(); 
    I.wait('5');
   

   
});