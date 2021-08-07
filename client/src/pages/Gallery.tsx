import React from 'react'
import Map from '../components/Map'
import { useCafeInfo } from "../graphql/hook/useCafeInfo";

export default function Gallery () {
  const { cafeInfo } = useCafeInfo()

  console.log(cafeInfo)

  return (
    <>
      <Map />
    </>
  )
}