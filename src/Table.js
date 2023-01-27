import React from 'react'
import './Css/Header.css'

function Table() {
  return (
    <div>
         <table class="left_array">
            <h3 className='title'>Daily Limit</h3>
           <div>
            <th>ID</th>
        <th >PRODUCT</th>
        <th >NAME</th>
        <th >ORDER</th>
        <th >DATE</th>
        <th >AMOUNT</th>
        <th >STATUS</th> 
            </div>       
       <div>
       <td >#1</td>
         <td>Product 3</td>
         <td>Jacob Jones</td>
         <td>Order 1</td>
         <td>14/12/22</td>
         <td>24.99€</td>
         <td>Send</td>
    
         
       </div>
     <div>
     <td>#2</td>
        <td >Product 1</td>
        <td >John Doe</td>
        <td >Order 2</td>
        <td >15/12/22</td>
        <td >16.99€</td>
        <td >Accepted</td>
                                   
               
        </div>                     
                   
         <div>
         <td >#3</td>
        <td >Product 4</td>
        <td >Jamar Cairns</td>
        <td >Order 3</td>
        <td >16/12/22</td>
        <td >54.99€</td>
        <td >Accepted</td>
      
        </div>                  
       <div>
       <td >#4</td>
        <td >Product 3</td>
        <td >Linda Barnes</td>
        <td >Order 4</td>
        <td >17/12/22</td>
        <td >12.99€</td>
        <td >Accepted</td>
    
        </div>         
     <div>
     <td >#5</td>
        <td >Product 7</td>
        <td >Bruno Grinnell</td>
        <td >Order 5</td>
        <td >17/12/22</td>
        <td >8.99€</td>
        <td >Accepted</td>
        
        
        </div>               
</table>
       <div className='last'>
       <h2>Yesterday</h2>
       
       <p>Netflix </p>
       <span>3.954$</span>
       <h6> TV And Entertainement</h6>
       <span>-980.00$</span>
       <p>Esther Howard </p>
       <h6> Monthly Salary</h6>
       
       
       </div>
    
    </div>
  )
}

export default Table