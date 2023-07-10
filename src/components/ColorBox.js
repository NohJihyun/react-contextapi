//[[[컴포넌트설명]]]
//cotext스타일적용
//396콘텍스트api를 활용해서 context를 만들어서 원하는 값을 받아와서 사용한다
//396고정적인값실습
//396기본상태를 저장해둔 context의 함수를 가져와서 색상을 조회한뒤 스타일 적용
//396import ColorContext from "../contexts/color";

//402동적context실습 color.js context를 사용했고 context의 값을 consumer로 조회를 해서 스타일 작업이 가능하다 --> 1.첫번째작업 프로바이더 작업을 하면서 작업한 ColorConsumer 로 조회후 스타일적용
//402객체비구조화할당을 작업하기 위해서 context의 콘슈머를 컬러콘슈머로 변경적용해두어서 객체 비구조화 할당으로 value값을 조회하는것을 생략할수도 있다
//import { ColorConsumer } from "../contexts/color";

//408renderProp방법이 아닌 useContext hook을 사용한 스타일 적용
import { useContext } from "react";
import ColorContext from "../contexts/color";

//396고정context의 Consumer
//Consumer로 조회한뒤 스타일적용 | 스타일 적용시 --> {{}} 사용
// const ColorBox = () => {
//   //*Consumer VALUE로  CONTEXT에서 색상을 조회 */
//   return (
//     <ColorContext.Consumer>
//       {(value) => (
//         <div
//           style={{
//             width: "64px",
//             height: "64px",
//             background: value.color,
//           }}
//         />
//       )}
//     </ColorContext.Consumer>
//   );
// };

//402동적context실습
//--> 1.첫번째작업 프로바이더 작업을 하면서 작업한 ColorConsumer 컴포넌트로 조회후 스타일적용
//402동적context실습 color.js context를 사용했고 context의 값을 consumer로 조회를 해서 스타일 작업이 가능하다
// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {(value) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: value.state.color,
//             }}
//           ></div>
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: value.state.subcolor,
//             }}
//           ></div>
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

//--> 2.두번째작업
//402객체비구조화할당을 작업하기 위해서 context의 콘슈머를 컬러콘슈머로 변경적용해두어서 객체 비구조화 할당으로 value값을 조회하는것을 생략할수도 있다
// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {({ state }) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: state.color,
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

//408세번째작업
//408renderProp방법이 아닌 useContext hook을 사용한 스타일 적용
//useContext Hook을 활용한 Context의 값을 조회할수 있다
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

// 색상을 조회해서 스타일을 적용시킨것을 App.js 로 컴포넌트 전달시켜 index.js에서 렌더링 한다
export default ColorBox;
