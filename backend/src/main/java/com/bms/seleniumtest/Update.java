package com.bms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class Update {
	WebDriver driver;
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void update() {
		 driver.get("http://localhost:4200/view");
		    driver.manage().window().setSize(new Dimension(1552, 840));
		    driver.findElement(By.cssSelector("tr:nth-child(3) .btn-primary")).click();
		    driver.findElement(By.id("userId")).click();
		    driver.findElement(By.id("userId")).sendKeys("11");
		    driver.findElement(By.id("customerName")).click();
		    driver.findElement(By.id("customerName")).sendKeys("snow");
		    driver.findElement(By.id("password")).click();
		    driver.findElement(By.id("password")).sendKeys("786688");
		    driver.findElement(By.id("emailId")).click();
		    driver.findElement(By.id("emailId")).sendKeys("snow@gmail.com");
		    driver.findElement(By.id("mobile")).click();
		    driver.findElement(By.id("mobile")).sendKeys("3298321922");
		    driver.findElement(By.id("aadharNo")).click();
		    driver.findElement(By.id("aadharNo")).sendKeys("3218812332");
		    driver.findElement(By.cssSelector(".select")).click();
		    {
		      WebElement dropdown = driver.findElement(By.cssSelector(".select"));
		      dropdown.findElement(By.xpath("//option[. = 'User']")).click();
		    }
		    driver.findElement(By.cssSelector(".btn")).click();
		  }
	}

