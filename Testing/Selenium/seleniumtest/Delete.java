package com.bms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class Delete {

WebDriver driver;
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void delete() {
	driver.get("http://localhost:4200/view");
    driver.manage().window().setSize(new Dimension(1552, 840));
    driver.findElement(By.cssSelector("tr:nth-child(3) .btn-danger")).click();
    driver.findElement(By.cssSelector(".form-outline")).click();
    driver.findElement(By.id("userId")).click();
    driver.findElement(By.id("userId")).sendKeys("11");
    driver.findElement(By.cssSelector(".btn")).click();
  }
}
