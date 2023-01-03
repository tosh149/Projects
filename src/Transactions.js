import { Container,Stack } from "react-bootstrap";
import { useEffect, useState} from 'react';
import DataService from "./DataService";
import React from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,

  } from '@chakra-ui/react'
  import axios from 'axios';  
  import './App.css'  
  import Card from 'react-bootstrap/Card';

export default function Transactions(props){

    const API_URL ='http://127.0.0.1:8000/api/transactions/vfs_list/';
    const API_URL_deposit = 'http://127.0.0.1:8000/api/transactions/vfs_list/';
    const API_URL_withdraw = 'http://127.0.0.1:8000/transactions/withdraw/';
    const tableTitle='Transactions'
    const [isDeposit, setDeposit] = useState(false);
    const [isWithdraw, setWithdraw] = useState(false);
    const [status, setStatus] = useState([]);
    const[isBalanceAfterTransaction,setBalanceAfterTranscation] = useState(0.00);
    const [transactionType,setTransactionType] = useState(0);
    const[lastBalanceBeforeTrans,setLastBalance] = useState(0.00);
        const [newForm, setForm] = useState(
        {  
         amount:0,
         account_id:1,
         account:1,
       
        });        
    
      function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...newForm,[name]:value});
       
        }

       

        const fetchData = async () =>{

            const options = {
              method: 'GET',
              params: {
                url: API_URL,
              },
              mode:"cors"
            };
    
            const response = await axios.get(`${API_URL}`);
            setLastBalance(response.data[response.data.length-1].balance_after_transaction);
           
            console.log(response.data)
          }
        
          function handleDeposit() {
            setDeposit(true);
            setTransactionType(1);
            
             }

             function handleWithdrawal(){
                setWithdraw(true)
                setDeposit(false)
                setTransactionType(2);
             }

    useEffect(()=> {
    fetchData();
    if(transactionType == 1){
    setBalanceAfterTranscation( Math.abs(parseFloat(lastBalanceBeforeTrans) + parseFloat(newForm.amount)));
            setForm({...newForm,'transaction_type':transactionType,'balance_after_transaction':isBalanceAfterTransaction})
            console.log("amount"+newForm.amount + " balance" + isBalanceAfterTransaction);
    }else if(transactionType == 2){
        setBalanceAfterTranscation( Math.abs(parseFloat(lastBalanceBeforeTrans) - parseFloat(newForm.amount)));
            setForm({...newForm,'transaction_type':transactionType,'balance_after_transaction':isBalanceAfterTransaction})
            console.log("amount"+newForm.amount + " balance" + isBalanceAfterTransaction);
    }
 
    },[transactionType,newForm.amount,isBalanceAfterTransaction])
   
    // console.log("posted balance"+isBalanceAfterTransaction)

        const postData = async ()=>{
            
            const headers = { 'content-type': 'application/json','X-CSRFTOKEN': 'csrftoken'}  
        
            
            const body =  JSON.stringify(newForm );
           
            // axios.defaults.xsrfCookieName = 'csrftoken'
            // axios.defaults.xsrfHeaderName = "X-CSRFToken"
            // axios.defaults.withCredentials = true;
            
            console.log("the body is"+ body);
          
            
           
            
            const options= {
             headers:headers, // Enter your IP address here
             method: 'POST', 
             mode: 'cors', 
             withCredentials:true,
            //  credentials:'include',
             body: body // body data type must match "Content-Type" header
            }
        //    const response = await axios.post(API_URL,body, headers );
           fetch(API_URL_deposit, options)
          .then((response) => {
           response.status == '200' ? setStatus({type:'success'}): setStatus({type:'failed'});
          }).catch((error) => {
          setStatus({type:'error',error})
          });
         
  
    
         
          }

        function handleSubmit(e) {
            e.preventDefault();
            handleDeposit();
            console.log(newForm);
            postData();
            // setTimeout(()=>{
            //   window.location.reload();
            // },3000)
            
          }
          function handleWithdrawSubmit(e) {
            e.preventDefault();
            handleWithdrawal();
            console.log(newForm);
            postData();
            // setTimeout(()=>{
            //   window.location.reload();
            // },3000)
            
          }


const columns = [
    {
        name: 'Transaction Type',
        selector: row => row.transaction_type == 1 ? "Deposit":"Withdrawal",
        sortable: true
    },
    {
        name: 'Date',
        selector: row => row.timestamp,
        sortable: true
    },
    {
        name: 'Amount',
        selector: row => row.amount,
        sortable: true
    },
    {
        name: 'Balance After Transaction',
        selector: row => row.balance_after_transaction,
        sortable: true
    },
    {
        name: 'Options',
        button: true,
        cell: row =>
           (
            <>
              <button className='btn clear-btn' onClick={() => (row.labor_code_id)} style={{ fontsize: "10px" }}>
               View More
              </button>
            
            </>
          )
    },
  
];

const showList = (
    <>
    <button className='btn clear-btn' style={{float:'right'}} onClick={handleDeposit}>Deposit</button>
   
    <button className='btn save-btn' style={{float:'right'}} onClick={handleWithdrawal}>Withdraw</button>
    <DataService API_URL={API_URL} tableTitle={tableTitle} columns={columns} />
    </>
  )


  const deposit = (
<>
<Stack gap={5} direction={'horizontal'} className="d-flex justify-content-between " style={{marginTop:'10px',marginBottom:'10px'}}>
<h1 style={{fontSize:'20px',fontWeight:'400'}}>Deposit</h1>
<button  className='btn clear-btn' style={{marginBottom:'15px'}}  onClick={() => setDeposit(false)}>ShowLIst</button>
  </Stack>


<Stack gap={5} direction={'horizontal'} className="d-flex justify-content-md-center " style={{marginTop:'10px',marginBottom:'20px'}}>
    <Card style={{ width: '18rem',backgroundColor:'#a2f5c6'}} className="card_style">
    <Card.Body>
      <Card.Title>Your current balance is:</Card.Title>
      <Card.Text>
      {lastBalanceBeforeTrans}
      </Card.Text>
   
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem',backgroundColor:'#e9a2f5'}} className="card_style">
    <Card.Body>
      <Card.Title>Your balance after deposit is:</Card.Title>
      <Card.Text>
      {newForm.amount != null ? isBalanceAfterTransaction : lastBalanceBeforeTrans}
      </Card.Text>
   
    </Card.Body>
  </Card>
  </Stack>

      
    <div className="container-fluid lc-add-new-cont" >

   {status?.type === 'success' &&  
    <Alert status='success'>
  <AlertIcon />
  Success, The deposit has been made to your account
</Alert>}

{status?.type === 'failed' &&  
    <Alert status='error'>
  <AlertIcon />
  Error, Kindly contact our customer care
</Alert>}

 

  <div className="form-cont">


      <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="laborName" className="col-sm-2 col-form-label">Enter amount:</label>
            <div className="col-sm-8">
              <input type="number" step="any"  name="amount"   onChange={handleChange} className="form-control" id="laborClass" placeholder="Enter amount" />
            </div>
          </div>

{/* <p>{transactionType}</p>
<p>{isBalanceAfterTransaction}</p> */}
          {/* <input type="number" name="transaction_type" onChange={handleChange}  value={transactionType} />
          <input type="number" name="balance_after_transaction" onChange={handleChange}  value={isBalanceAfterTransaction}/>  */}


            <div className="action_btn_group">
              <button className="submit btn clear-btn"  type="button"> Clear</button>
              <button className="submit btn save-btn"  type="submit"> Save</button>
               </div>

        </form>
      </div>
      </div>
      </>
  )
  

  const withdrawal = (
<>    


    <Stack gap={5} direction={'horizontal'} className="d-flex justify-content-between " style={{marginTop:'10px',marginBottom:'10px'}}>
<h2 style={{fontSize:'20px',fontWeight:'400'}}>Withdraw</h2>
  <button  className='btn clear-btn' style={{marginBottom:'15px'}}  onClick={() => setWithdraw(false)}>Show List</button>
  </Stack>


<Stack gap={5} direction={'horizontal'} className="d-flex justify-content-md-center " style={{marginTop:'10px',marginBottom:'20px'}}>
    <Card style={{ width: '20rem',backgroundColor:'#a2f5c6'}} className="card_style">
    <Card.Body>
      <Card.Title>Your current balance is:</Card.Title>
      <Card.Text>
      {lastBalanceBeforeTrans}
      </Card.Text>
   
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem',backgroundColor:'#e9a2f5'}} className="card_style">
    <Card.Body>
      <Card.Title>Your balance after withdrawal is:</Card.Title>
      <Card.Text>
      {newForm.amount != null ? isBalanceAfterTransaction : lastBalanceBeforeTrans}
      </Card.Text>
   
    </Card.Body>
  </Card>
  </Stack>
      
    <div className="container-fluid lc-add-new-cont" >

   {status?.type === 'success' &&  
    <Alert status='success'>
  <AlertIcon />
  Success, The withdrawal has been made from your account
</Alert>}

{status?.type === 'failed' &&  
    <Alert status='error'>
  <AlertIcon />
  Error, Kindly contact our customer care
</Alert>}

 

 

  <div className="form-cont">

      <form onSubmit={handleWithdrawSubmit}>
          <div className="form-group row">
            <label htmlFor="laborName" className="col-sm-2 col-form-label">Enter amount:</label>
            <div className="col-sm-8">
              <input type="number" step="any"  name="amount"   onChange={handleChange} className="form-control" id="laborClass" placeholder="Enter amount" />
            </div>
          </div>

{/* <p>{transactionType}</p>
<p>{isBalanceAfterTransaction}</p> */}
          {/* <input type="number" name="transaction_type" onChange={handleChange}  value={transactionType} />
          <input type="number" name="balance_after_transaction" onChange={handleChange}  value={isBalanceAfterTransaction}/>  */}


            <div className="action_btn_group">
              <button className="submit btn clear-btn"  type="button"> Clear</button>
              <button className="submit btn save-btn"  type="submit"> Save</button>
               </div>

        </form>
      </div>
      </div>
      </>

  )

 

  return(
    <div>
      
       <span className="todo">{ isDeposit ? deposit : isWithdraw ? withdrawal : showList}</span>
       
    </div>
    )

}
