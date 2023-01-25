import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Creator from '../../components/Creator'
import { useEffect, useState} from 'react'
import videoBg from '../Assets/WhatsApp Video 2023-01-25 at 22.12.10.mp4'


const home = () => {

  const [account, setAccount] = useState()

  useEffect(() => {

    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => setAccount(res[0]))
    } else {
      alert('install metamask extension!!')
    }


  })
  
  const home = () => {
  return (
    <div className='home'>
        <video src={videoBg} autoPlay loop muted />
        </div>
  )
}

export default home

