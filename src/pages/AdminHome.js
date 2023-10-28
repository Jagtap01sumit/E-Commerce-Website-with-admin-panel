import React from 'react'
import ProductDetails from '../features/product-list/components/ProductDetails'
import Navbar from '../features/navbar/Navbar'
import AdminProductDetails from '../features/admin/components/AdminProductDetails'
import AdminProductList from '../features/admin/components/AdminProductList'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <div><Navbar>
<AdminProductList></AdminProductList></Navbar>
</div>
  )
}
