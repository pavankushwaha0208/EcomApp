import React from 'react'
import MainCarosal from '../Componet/Homesection/MainCarosal'
import Homesectioncarosal from '../Componet/Homesection/Homesectioncarosal'
import { mens_kurta } from '../Data/Mansection/Mans_kurta'

const Home = () => {
  return (
    <div>
      <MainCarosal/>
      <div className="py-10 space-y-10">
        <Homesectioncarosal alldata = {mens_kurta} heddingcard = "Men's Kurta"/>
        <Homesectioncarosal alldata = {mens_kurta} heddingcard = "Men's Shoes"/>
        <Homesectioncarosal alldata = {mens_kurta} heddingcard = "Men's Shirt"/>
        <Homesectioncarosal alldata = {mens_kurta} heddingcard = "Woman's Saree"/>
        <Homesectioncarosal alldata = {mens_kurta} heddingcard = "Woman's Dress"/>
      </div>
    </div>
  )
}

export default Home
