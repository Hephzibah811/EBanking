package com.bms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class RegisterTest {
	
	WebDriver driver;
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void register() {
		 driver.get("http://localhost:4200/register");
		    driver.manage().window().setSize(new Dimension(798, 614));
	    driver.manage().window().setSize(new Dimension(798, 614));
	    driver.findElement(By.id("userId")).click();
	    driver.findElement(By.id("userId")).sendKeys("109");
	    driver.findElement(By.id("customerName")).click();
	    driver.findElement(By.id("customerName")).sendKeys("emi");
	    driver.findElement(By.id("password")).click();
	    driver.findElement(By.id("password")).sendKeys("5463789");
	    driver.findElement(By.id("emailId")).click();
	    driver.findElement(By.id("emailId")).sendKeys("emi@gmail.com");
	    driver.findElement(By.id("mobile")).click();
	    driver.findElement(By.id("mobile")).sendKeys("765432");
	    driver.findElement(By.id("aadharNo")).click();
	    driver.findElement(By.id("aadharNo")).sendKeys("098765432456");
	   
	  }
		
	}

