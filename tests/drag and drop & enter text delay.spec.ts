
import{test,expect,chromium,Browser,Page} from '@playwright/test';

test('draganddrop', async({page})=>{
await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");
const drag= await page.locator('#draggable');
const drop=await page.locator('#droppable');
//one method
//await drag.dragTo(drop)
//maual method
await drag.hover();
await page.mouse.down();
await drop.hover();
await page.mouse.up();


});

test('textdelay', async({page})=>{
await page.goto("https://www.flipkart.com");
await page.locator('span[role="button"]').click();
await page.locator('xpath=//input[@placeholder="Search for Products, Brands and More"]').first()
.pressSequentially("show", {delay:500});
 

//upload file or files
//one file upload
//await page.locator('input[type="file"]').setInputFiles('C:\\Users\\poorn\\OneDrive\\Desktop\\test.txt');
//multiple file upload
// await page.locator('input[type="file"]').setInputFiles([path.join('C:\\Users\\poorn\\OneDrive\\Desktop\\test.txt'),path.join( 'C:\\Users\\poorn\\OneDrive\\Desktop\\test2.txt')]);
////deselect file
//await page.locator('input[type="file"]').setInputFiles([]);
//upload file from buffer
//await page.locator('input[type="file"]').setInputFiles({name:'test.txt',mimeType:'text/plain',buffer:Buffer.from('this is my resume')});
//focus on one element and then fill if cursor is blinking somewhere
//page.locator('input[type="file"]').focus();
//foucs on accept cookies or alet
//page.getByTextT('Accept cookies').focus();
//timout globally
//test.use({
  //  actionTimeout:10000;
//})
});