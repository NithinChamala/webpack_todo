package First_Package;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;

import org.openqa.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
public class first_class {
		public static void main(String[] args) throws InterruptedException{
			System.setProperty("webdriver.chrome.driver", "/Users/chamalanithinreddy/Downloads/chromedriver");
			WebDriver driver = new ChromeDriver();
			String baseUrl = "https://www.google.com";
			String url = "https://www.economist.com";
			String todoUrl = "http://localhost:8080/";
			String wikiUrl = "https://en.wikipedia.org";
			driver.get(todoUrl);
			System.out.println("title"+driver.getTitle());
			String input ="come later";
			first_class obj = new first_class();
			obj.taskInput(driver,input);
//			obj.check(driver,input);
//			obj.update(driver, input);
//			obj.aboutapp(driver);
//			obj.active(driver);
			obj.close(driver,input);
//			obj.check(driver,input);

//			driver.quit();
	}
		public void check(WebDriver driver,String input ) {
			try {
				boolean boo = driver.findElement(By.xpath("//*[contains(text(),'hate')]")).isDisplayed();
				System.out.println("temp");
				System.out.println("Element present : "+ boo);
			} catch(Exception e) {
				System.out.println("error in finding "+input);
			}
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				System.out.println("sleep error");
			}
			
		}
		
		public void taskInput( WebDriver driver,String input) {

//			WebElement inputtask = driver.findElement(By.id("taskvalue"));
//			inputtask.sendKeys(input);
//			public void TypeInField(String xpath, String value){
			    String val = input; 
			    WebElement element =  driver.findElement(By.id("taskvalue"));
//			    		driver.findElement(By.xpath(xpath));
			    element.clear();

			    for (int i = 0; i < val.length(); i++){
			        char c = val.charAt(i);
			        try {
						Thread.sleep(100);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
			        String s = new StringBuilder().append(c).toString();
			        element.sendKeys(s);
			    }       
			
			driver.findElement(By.id("insertId")).click();
//			WebDriverWait wait=new WebDriverWait(driver, 20);
//			WebElement guru99seleniumlink;
//			guru99seleniumlink= wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath( "/html/body/div[1]/section/div[2]/div/div[1]/div/div[1]/div/div/div/div[2]/div[2]/div/div/div/div/div[1]/div/div/a/i")));

//			Alert alert = driver.switchTo().alert();
//            alert.accept();
			System.out.println("insert done");

		}
		
		public void update(WebDriver driver,String input) {
			try {
				Thread.sleep(3000);
				
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
//				e.printStackTrace();
				System.out.println("sleep error");
			
			}
			driver.findElement(By.xpath("//*[contains(text(),input)]/parent::div/following-sibling::span/following-sibling::input")).click();
			
			System.out.println("updated message");
			driver.findElement(By.xpath("button[@id='inprogress_active']")).click();
			try {
				Thread.sleep(3000);
				
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
//				e.printStackTrace();
				System.out.println("sleep error");
			
			}
			
			boolean booboo = driver.findElement(By.xpath("//*[contains(text(),input)]")).isDisplayed();
			
			if(booboo) {
				System.out.println("updated successfully");
			}

			
			try {
				Thread.sleep(3000);
				
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
//				e.printStackTrace();
				System.out.println("sleep error");
			
			}
		}
		
		public void aboutapp(WebDriver driver) {
			driver.findElement(By.xpath("//body/label")).click();
			try {
				Thread.sleep(3000);
			} catch(Exception e) {
				System.out.println("about about clicked");
			}

			driver.findElement(By.xpath("//body/dialog/label")).click();
		}
		
//		driver.findElement(By.xpath("//body/label")).click();
		
		public void active(WebDriver driver) {
			driver.findElement(By.xpath("//button[@id='inprogress_active']")).click();

			boolean boom = driver.findElement(By.xpath("//div/div/button/following-sibling::button[contains(@style,'background-color: rgb(192, 192, 192)')]")).isDisplayed();
			if(boom) {
			System.out.println("inprogress active: "+boom);
		}
			else {
				System.out.println("inprogress active: "+boom);
			}
//			driver.findElement(By.xpath("//button[@id='inprogress_active']con")))
//			div[contains(@style,'background-color: rgb(255, 92, 51)')]
//			div/div/button/following-sibling::button[contains(@style,'background-color: rgb(192, 192, 192)')]
//			driver.findbyelement(by.xpath("//button[@id='inprogress_active']")).getattribute('background-color');
			
		}
		
		public void close(WebDriver driver,String input) {
			try {
//				WebElement element = driver.findElement(By.xpath("//*[contains(text(),'message')]"));
//				System.out.println(element);
				driver.findElement(By.xpath("//*[contains(text(),input)]/parent::div/following-sibling::span/button[@class='closebtn']")).click();
//				System.out.println(element+" element");

				System.out.println("closed message");
				try {
					Thread.sleep(3000);
					
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
//					e.printStackTrace();
					System.out.println("sleep error");
				
				}
				
			} catch(Exception e) {
//				e.printStackTrace();
				System.out.println("close error 1");
			}
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
//				e.printStackTrace();
				System.out.println("sleep error");
			}
		}

		
		
		
}



//driver.close();
//System.out.println("current url"+driver.getCurrentUrl());
//System.out.println("page source"+driver.getPageSource());
//System.out.println("page source length"+driver.getPageSource().length());
//driver.navigate().back();
//driver.navigate().forward();
//driver.navigate().refresh();
//driver.quit();