import React from 'react'
import { MenuList } from './MenuList'
import { NavLink } from 'react-router-dom'
import {
  MenuWrap
} from './elements'


export default function Menu () {
  return (
    <MenuWrap>
      {MenuList.map(item => (
        <NavLink
          key={item.id}
          to={item.to}
          activeClassName='selected'
          activeStyle={{
            color: '#FCB37E'
          }}
        >{item.name}</NavLink>
      ))}
    </MenuWrap>
  )
}