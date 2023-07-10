//[[[컴포넌트설명]]]
//콘텍스트api를 활용해서 context를 만들어서 원하는 값을 받아와서 사용한다
//고정적인값실습
//399context api의 provider
//399provider을 사용해서 기본 설정해둔 value 값을 변경한다
//402동적context의 provider 프로젝트의 반영 함수를 가져와서 적용시킨다 프로바이더
import { ColorProvider } from "./contexts/color";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
//import ColorContext from "./contexts/color";

//399provider 사용시에 vlue값을 명시해 주어야 제대로 작동한다
// const App = () => {
//   return (
//     <ColorContext.Provider value={{ color: "red" }}>
//       <div>
//         <ColorBox />
//       </div>
//     </ColorContext.Provider>
//   );
// };

//402동적context의 provider 프로젝트의 반영
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
