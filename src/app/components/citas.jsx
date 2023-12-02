"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import BookInfo from './bookInfo'
import ReservaBottom from './reservaBottom'
export default function CitasPage({book}) {

    // useEffect(()=>{
    //   const usuario = JSON.parse(localStorage.getItem("usuario"))
    //   const reservas = JSON.parse(localStorage.getItem("reservas"));
    //   const reservasUsu = reservas.find((res)=>res.tituloLibro === book.titulo && res.correoAlumno === usuario.correo)
    //   if(reservasUsu)
    //   setIsDisponible(false);
    // },[])
    const [isDisponible, setIsDisponible] = useState(true)
  return (
    <>
    <BookInfo book={book} isDisponible = {isDisponible}/>
    <ReservaBottom book={book} isDisponible = {isDisponible} setIsDisponible = {setIsDisponible} />
    </>
  )
}
