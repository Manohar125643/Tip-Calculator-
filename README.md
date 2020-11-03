# Tip-Calculator-
Tip calculator using javascript

Tip generates according to your feedback 
1. 'Good' genrates 15% of tip
2. 'It was OK' genrates 10% of tip
3. 'Bad' genrates 5% of tip


Test Case 1:
Amount:1000
Feedback:It was OK
Spilt into:4
Result:Tip ₹25.00 each
       Toaltip: ₹100.00 

Test Case 2:
Amount:2000
Feedback:Bad
Spilt into:2
Result:Tip ₹50.00 each
       Toaltip: ₹100.00 
       
Test Case 3:
Amount:2000
Feedback:It was OK
Spilt into:2
Result:Tip ₹100.00 each
       Toaltip: ₹200.00 
       
Test Case 4:
   Amount:500
   Feedback:Good
   Spilt into:-1
   Result:Please select a value that is no less than 1
              
Test Case 5:
Amount:5000
Feedback:It was OK
Spilt into:5
Result:Tip ₹100.00 each
       Toaltip: ₹500.00 

Test Case 6:
Amount:5000
Feedback:Bad
Spilt into:5
Result:Tip ₹50.00 each
       Toaltip: ₹250.00 
       
Test Case 7:
Amount:2000
Feedback:Good
Spilt into:5
Result:Tip ₹150.00 each
       Toaltip: ₹750.00 
       
Test Case 8:
Amount:20000
Feedback:Good
Spilt into:5
Result:Tip ₹600.00 each
       Toaltip: ₹3000.00 
       
Test Case 9:
   Amount:-1
   Feedback:Good
   Spilt into:4
   Result:Please select a value that is no less than 1
   
Test Case 10:
   Amount:500
   Feedback:Good
   Spilt into:4
   Result:select an option
   
Test Case 11:
   Amount:500.11
   Feedback:Good
   Spilt into:4
   Result:Please select a valid value. The two nearest valid values are 500 and 501
   
   Test Case 12:
   Amount:2000
   Feedback:Bad
   Spilt into:2
   Result:Tip ₹150.00 each
          Toaltip: ₹300.00 
