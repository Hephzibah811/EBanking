package com.bms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class TransferMoney {
	WebDriver driver;
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void transfer() {
	 driver.get("http://localhost:4200/userhome");
	    driver.manage().window().setSize(new Dimension(1552, 840));
	    driver.findElement(By.linkText("Transfer Money")).click();
	    driver.findElement(By.id("userId")).click();
	    driver.findElement(By.id("userId")).sendKeys("1");
	    driver.findElement(By.cssSelector(".row:nth-child(1) > .col-md-6:nth-child(2) > .form-outline")).click();
	    driver.findElement(By.id("amount")).click();
	    driver.findElement(By.id("amount")).sendKeys("40000");
	    driver.findElement(By.cssSelector(".col-md-6:nth-child(1) .btn")).click();
	}
}
