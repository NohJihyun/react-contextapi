//[[[컴포넌트설명]]]
//콘텍스트api를 활용해서 context를 만들어서 원하는 값을 받아와서 사용한다
//콘텍스트에 기본값 지정 및 설정
//396고정적인값실습
//import { createContext } from "react";
//import ColorContext from "./color";

//400동적context실습-context의 값을 업데이트
import { createContext, useState } from "react";

//396context고정적인값실습
//const ColorContext = createContext({ color: "black" });

//400동적context실습-context의 값을 업데이트
//401provider의 value로 전달받는 형태로 createContext의 기본값 형태를 일치시킨다
//401provider의 value로 전달받을때 value 현재상태와/업데이트함수를 전달해서 전달받은후 context의 값을 변경/업데이트 한다.
//401 **!!! 일키시는 이유는 Context 코드를 볼때 내부 값이 어떻게 구성되어 있는지 파악하기 쉽고, 실수로 provider를 사용하지 않았을때 리액트 애플리케이션에서 에러가 발생하지 않는다
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});
const ColorProvider = ({ children }) => {
  //현재상태|업데이트함수 상태관리
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");
  //value에 상태와 함수를 담는다
  //전달하는 value와 전달해주는 형태로 context에서도 형태를 일치시켜준다
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  //반환을할 한때 provider가 렌더링 하고, value에 state와 함수를 담아서 actions로 context에 전달 context가 전달받아 업데이트한다
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
// 비구조화 할당 적용시키려고 작업함
// const ColorConsumer = ColorContext.Consumer와 같은 의미 즉 = 컬러콘텍스트의 콘슈머는 컬러콘슈머를 뜻한다
const { Consumer: ColorConsumer } = ColorContext; // 즉 = 컬러콘텍스트의 콘슈머는 컬러콘슈머를 뜻한다
// ColorProvider 와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

//함수를 내보냄
export default ColorContext;
