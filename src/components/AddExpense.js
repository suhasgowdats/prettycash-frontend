import { Box, Button, FormControl, FormLabel, Input, Text, useToast, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import DashBoard from '../pages/DashBoard'

function AddExpense() {
  const [expense, setExpense]=useState({
    date:'',
    catogary:'',
    discription:'',
    amount:''
  })
  const toast=useToast()

  const handelChange=(e)=>{
    setExpense({...expense,[e.target.name]:e.target.value})
  }

  const submitHandel=async()=>{
    const custerId=JSON.parse(localStorage.getItem('userInfo'))._id
    const expenseInfo={...expense,custerId:custerId}
    const obj={
      method:"POST",
      headers:{
        'Content-type':'Application/json'
      },
      data:expenseInfo
    }

    try{
      const {data}=await axios('https://prettycash-capston-project.herokuapp.com/addexpense',obj)

    toast({
      title: 'Expense added to list',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:'bottom'
  }); 


    setExpense({
      date:'',
      catogary:'',
      discription:'',
      amount:''
    })      
    }catch(error){
      toast({
        title: "error occured",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:'bottom'
    })      
    }
  }


  return (
    <DashBoard>
      <Box fontSize='30px' fontWeight='bold' paddingBottom='10px' >
        <Text >Add Your Expenses </Text>
      </Box>
    <Box>
      <VStack>
      <FormControl>
        <FormLabel>Date*</FormLabel>
        <Input required type={'date'} name='date' value={expense.date} onChange={handelChange} isRequired/>
      </FormControl>
      <FormControl>
        <FormLabel>Catogary*</FormLabel>
        <Input type={'text'} name='catogary' value={expense.catogary} onChange={handelChange} isRequired />
      </FormControl>
      <FormControl>
        <FormLabel>Description*</FormLabel>
        <Input type={'text'} name='discription' value={expense.discription} onChange={handelChange} isRequired />
      </FormControl>
      <FormControl>
        <FormLabel>Amount*</FormLabel>
        <Input type={'number'} name='amount' value={expense.amount} onChange={handelChange} isRequired />
      </FormControl>
      <Button colorScheme='facebook' onClick={submitHandel}>AddExpense</Button>
      </VStack>
    </Box>
    </DashBoard>
  )
}

export default AddExpense