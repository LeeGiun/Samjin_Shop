import {configureStore, createSlice} from "@reduxjs/toolkit"

// user_State
const user = createSlice ({
  name : 'user',
  // initialState: '홍길동',
  initialState: {name: '홍길동', memberYear: 1},
  // 멤버변수, 멤버변수이얼

  reducers: {
  //   changeName() {
  //     return '이순신'
  //   }
  // }
  // changeName(state) {
  //   return state + ' : Green'
    changeName(state) {
      state.name = state.name + ' : Green'
    },
    // 리턴을 통해 값을 변경하거나 돌릴 수 있으나
    // 메모리에 저장되어있는 원하는곳에 가져다 쓰는 객체 형식으로
    // 변수로 사용하기때문에 리턴값이 필요없다.

    changeYear(state, action) {
      state.memberYear += action.payload
    }
    // 데이터 메모리값을 올려주고 내려주고 하는것을 변경함수의 역할
    // action 호출 후 처리
    // payload가 메세지를 받는 역할

    // dispatch가 변경하는 어떠한것을 요청할때
    // 메세지를 받는것을 payload가 받는다.
    // 짝지처럼 action과 payload를 써야한다.
  }

})

export const { changeName, changeYear } = user.actions
// user의 변경함수다.는 의미




// cart_state
const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      // state.push(action.payload)
      const index = state.findIndex((findId) => {
        return findId.id === action.payload.id
      })
      if (index > -1) {
        state[index].count++
      } else {
        state.push(action.payload)
      }
    }, // addItem END
    deleteItem(state, action) {
      const index = state.findIndex((findId) => {
        return findId.id === action.payload
      })
      state.splice(index, 1)
      // 찾은 인덱스부터 1개를 삭제 하겠다
    }, //  deleteItem END

    addCount(state, action) {
      const index = state.findIndex((findId) => {
        return findId.id === action.payload
      })
      state[index].count++
    },
    subCount(state, action) {
      const index = state.findIndex((findId) => {
        return findId.id === action.payload
      })
      if(state[index].count >1) {state[index].count--}
    }
  }
})

// 위 cart 스테이트를 만들어서
export const {addItem, deleteItem, addCount, subCount} = cart.actions
// 아래 스테이트를 내보내는것

export default configureStore ({
  reducer : {
    user: user.reducer,
    cart: cart.reducer
  }
})
// State를 내보내는것.