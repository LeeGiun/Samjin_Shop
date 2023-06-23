import React from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, subCount, addItem, changeName, changeYear, deleteItem } from './store'


export default function Cart() {

  // const state = useSelecto((state) => {return state})
  const state = useSelector((state => state))
  // 모든 스테이트를 가져올때는 위처럼 사용하면됨.

  const dispatch = useDispatch()
  // 훅을 통해서 변경함수를 수정할 수 있음

  return (
    <div>

      <h2><span style={{color:'blue', fontWeight: 'bold'}}>({state.user.name})</span>님의 장바구니</h2>
      <button onClick={() => dispatch(changeName())}>닉네임 보이기 </button>
      <h3>회원가입기간 : {state.user.memberYear} 년</h3>
      <button onClick={() => dispatch(changeYear(1))}>+</button>
      <button onClick={() => dispatch(changeYear(-1))}>-</button>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>개수</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
      {
          state.cart.map((item, i ) => {
            return (
          <tr key={i}>
            <td>{state.cart[i].id}</td>
            <td>{state.cart[i].title}</td>
            <td>{state.cart[i].count}</td>
            <td>
              <button onClick={() => {dispatch(addCount(state.cart[i].id))}}>+</button>
              <button onClick={() => {dispatch(subCount(state.cart[i].id))}}>-</button>
              <button onClick={() => {dispatch(deleteItem(state.cart[i].id))}}>삭제</button>
            </td>
          </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>
  )
}
