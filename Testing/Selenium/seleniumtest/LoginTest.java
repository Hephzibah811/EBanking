package com.bms.seleniumtest;


import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class LoginTest {

WebDriver driver;
	
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void login() {
	    driver.get("http://localhost:4200/");
	    driver.manage().window().setSize(new Dimension(794, 610));
	    driver.findElement(By.id("emailId")).click();
	    driver.findElement(By.id("emailId")).sendKeys("hepzhi@gmail.com");
	    driver.findElement(By.id("password")).click();
	    driver.findElement(By.id("password")).sendKeys("738236");
}
}
