import React, { useEffect, useState } from 'react'

import Table from '../../components/Table/Table';
import { productService } from '../../services/productService';
import { productFields } from '../../utils/data/productFields';

/**
 * @Container - container for inventory store
 */
function Inventory() {
  const [data,setData] =useState([])

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const products = await productService.findAll()
      if(products){
        setData(products)
      }
    }
    fetchProducts()
  },[])
  
  return (
    <div>
      <Table rows={data} columns={productFields}/>
    </div>
  )
}

export default Inventory
