// package com.bms;

// import static org.testng.Assert.assertEquals;

// import java.util.ArrayList;
// import java.util.List;

// import org.junit.jupiter.api.Order;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;

// import com.bms.model.Account;
// import com.bms.model.Login;
// import com.bms.model.Transaction;
// import com.bms.model.User;
// import com.bms.service.AccountService;
// import com.bms.service.LoginService;
// import com.bms.service.RegisterService;
// import com.bms.service.TransactionService;

// @SpringBootTest
// class SbEBankingApplicationTests {

// 	@Autowired
// 	LoginService lgservice;
	
// 	@Autowired
// 	RegisterService rgservice;


// 	@Autowired
// 	AccountService accservice;
	
// 	@Autowired
// 	TransactionService trservice;
	
// 	boolean res;
// 	boolean val;
// 	List<User> list = new ArrayList<>();
// 	List<User> list1 = new ArrayList<>();
// 	List<Transaction> list2 = new ArrayList<>();
// 	List<Transaction> list3 = new ArrayList<>();
// 	List<Transaction> list4 = new ArrayList<>();
// 	List<Transaction> list5 = new ArrayList<>();
// 	User ur=new User(101,"madhan kumar","madhan@gmail.com","2345678","2345678","67437937","user");
// 	User ur1=new User(102,"mat","matt@gmail.com","Matt888","23456892","674387937","admin");
// 	User ur2=new User(1022,"Emima","emi@gmail.com","10emima20","9876654637","987667899876","user");
// 	User ur3=new User(1032,"Aravind","aravin@gmail.com","9876453456","aravind@gmail.com","Madurai","user");
// 	Login rs1=new Login("User Success");
// 	Login rs2=new Login("Admin Success");
// 	Login rs3=new Login("Login Fail");
// 	Transaction tr=new Transaction(22,107,70000);
// 	Transaction tr1=new Transaction(22,107,80000);
// 	Account ac=new Account(108,"saving",20000);
// 	Account ac1=new Account(108,"saving",90000);
// 	List<Account> list6 = new ArrayList<>();
	
//      @Test
//      @Order(1)
// 	  void performUserLogin() {
//    	  Login rs=lgservice.login(ur);
//    	  rs1.equals(rs);
// 	  }	 
     
    
//      @Test
//      @Order(2)
// 	  void performAdminLogin() {
//    	  Login rs=lgservice.login(ur1);
//    	  rs2.equals(rs);
// 	  }
    
//      @Test
//      @Order(3)
// 	  void performLoginFail() {
//    	  Login rs =lgservice.login(ur3);
//    	  rs3.equals(rs);
// 	  }
      
//      @Test
//      @Order(4)
//      void performRegister() {
//    	  val=true;
//    	  res=rgservice.register(ur2);
//    	  assertEquals(val,res);
//      }
//      @Test
//      @Order(5)
//      void performUserInsert() {
//    	  val=true;
//    	  res=rgservice.update(ur2);
//    	  assertEquals(val,res);
//      }
    
//      @Test
//      @Order(6)
//      void performUserDelete() {
//    	  val=true;
//    	  res=rgservice.delete(1022);
//    	  assertEquals(val,res);
//      }
    
//      @Test
//      @Order(7)
//      void performViewAllUsers() {
//    	list1=rgservice.getAll();
//  		list.add(ur);
//  		list.add(ur1);
//  		list.add(ur2);
//  		list.equals(list1);
//      }
    
//      @Test
//      @Order(8)
//      void performTransactionInsert() {
//    	  val=true;
//    	  res=trservice.insertTransaction(tr);
//    	  assertEquals(val,res);
//      }
    
    
//      @Test
//      @Order(9)
//      void performTransactionDelete() {
//    	  val=true;
//    	  res=rgservice.delete(14);
//    	  assertEquals(val,res);
//      }
    
//      @Test
//      @Order(10)
//      void performViewTransactions() {
   	
//    	list3=trservice.getAll();
//  		list2.add(tr);
//  		list2.equals(list3);
//      }
    
    
//      @Test
//      @Order(11)
//      void performViewAllTransactions() {
//    	list4=trservice.getAll();
//  		list5.add(tr);
//  		list5.equals(list4);
//      }
     
//      @Test
//      @Order(12)
//      void performViewAllAccount() {
//    	list6=accservice.getAllAccount();
//  		list6.add(ac1);
//  		list6.equals(list6);
//      }
     
//      @Test
//      @Order(13)
//      void performInsertAccount() {
//    	  val=true;
//    	  res=accservice.insert(ac1);
//    	  assertEquals(val,res);
//      }
     
//      @Test
//      @Order(14)
//      void performUpdateAccount() {
//    	  val=true;
//    	  res=accservice.insert(ac);
//    	  assertEquals(val,res);
//      }


// }
