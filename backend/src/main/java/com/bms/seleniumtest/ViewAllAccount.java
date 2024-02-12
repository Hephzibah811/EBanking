package com.bms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ViewAllAccount {
	WebDriver driver;
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void viewAllAccount() {
		 driver.get("http://localhost:4200/home");
		    driver.manage().window().setSize(new Dimension(1552, 840));
		    driver.findElement(By.linkText("View All Account")).click();
		  }
	}

