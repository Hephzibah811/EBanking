package com.bms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class CreateAccount {
	WebDriver driver;
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void createAccount() {
		 driver.get("http://localhost:4200/home");
		    driver.manage().window().setSize(new Dimension(1552, 840));
		    driver.findElement(By.linkText("Create New Account")).click();
		    driver.findElement(By.id("userId")).click();
		    driver.findElement(By.id("userId")).sendKeys("11");
		    driver.findElement(By.id("customerName")).click();
		    driver.findElement(By.id("customerName")).sendKeys("snow");
		    driver.findElement(By.id("password")).click();
		    driver.findElement(By.id("password")).sendKeys("251100");
		    driver.findElement(By.id("emailId")).click();
		    driver.findElement(By.id("emailId")).sendKeys("snow@gmail.com");
		    driver.findElement(By.id("mobile")).click();
		    driver.findElement(By.id("mobile")).sendKeys("3284383483");
		    driver.findElement(By.id("aadharNo")).click();
		    driver.findElement(By.id("aadharNo")).sendKeys("423343244333");
		    driver.findElement(By.cssSelector(".select")).click();
		    {
		      WebElement dropdown = driver.findElement(By.cssSelector(".select"));
		      dropdown.findElement(By.xpath("//option[. = 'User']")).click();
		    }
		    driver.findElement(By.cssSelector(".btn:nth-child(1)")).click();
	}
}
