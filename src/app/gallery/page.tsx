import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import Banner from './banner'
import GalleryTabs from './ourGallary'
import Footer from '@/components/Footer'

function Gallery() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <GalleryTabs></GalleryTabs>
      <Footer></Footer>
    </div>
  )
}

export default Gallery