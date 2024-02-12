package com.bms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AccountDetails {
	WebDriver driver;
	@BeforeClass
    public void initializer() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Test
	public void accountDetails() {
	driver.get("http://localhost:4200/home");
    driver.manage().window().setSize(new Dimension(1552, 840));
    driver.findElement(By.linkText("Account details")).click();
    driver.findElement(By.id("user_id")).click();
    driver.findElement(By.id("user_id")).sendKeys("11");
    driver.findElement(By.id("balance")).click();
    driver.findElement(By.id("balance")).sendKeys("5900");
    driver.findElement(By.cssSelector(".select")).click();
    {
      WebElement dropdown = driver.findElement(By.cssSelector(".select"));
      dropdown.findElement(By.xpath("//option[. = 'Saving Account']")).click();
    }
    driver.findElement(By.cssSelector(".btn:nth-child(1)")).click();
  }
}
