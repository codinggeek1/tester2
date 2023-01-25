import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Creator from '../../components/Creator'
import { useEffect, useState} from 'react'


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
  
  return (
    <LinearGradient
        colors={['red', 'yellow', 'green' ]}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 1 }}
      >
        <Text>Diagonal Gradient</Text>
      </LinearGradient>
  
      <Header />
      <Creator/>
      <Footer/>
  </div>
  )
}

export default home
