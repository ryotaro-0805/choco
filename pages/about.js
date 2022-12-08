import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const about = () => {
  return (
    <div>
        <h1>本日のショット</h1>
        <Image className='test' src='/img/pic2022-12-08.gif' width='1980' height='1080' />
        <br />
        <Link href='/'>Topへ戻る</Link>
    </div>
  )
}

export default about