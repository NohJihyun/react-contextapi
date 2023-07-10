//[[[컴포넌트설명]]]
//context의 기본값을 provider의 action으로 업데이트함수 설정한것을 해당컴포넌트에서 action함수를 호출해서 색상을 변경하는 컴포넌트
//404context의 actions에 넣어준 함수를 호출하는 컴포넌트 생성
//404UI준비
//406기능구현 마우스 왼쪽버튼 클릭시 -> 큰정사각형의 색상을 변경한다, 마우스 오른쪽버튼 클릭시 -> 작은 정사각형의 색상을 변경한다.
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  //404context의 actions에 넣어준 함수를 호출하는 컴포넌트 생성
  // return (
  //   <div>
  //     <h2>색상을 선택하세요</h2>
  //     <div style={{ display: "flex" }}>
  //       {colors.map((color) => (
  //         <div
  //           key={color}
  //           style={{
  //             background: color,
  //             width: "24px",
  //             height: "24px",
  //             cursor: "pointer",
  //           }}
  //         />
  //       ))}
  //     </div>
  //     <hr />
  //   </div>
  // );
  //406기능구현 마우스 왼쪽버튼 클릭시 -> 큰정사각형의 색상을 변경한다, 마우스 오른쪽버튼 클릭시 -> 작은 정사각형의 색상을 변경한다.
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {/*406 Consumer-조회 ations에 만들어둔 함수를 조회후 호출해서 새로운 배열을 만들어 값을 업데이트 하는 방식 */}
        {/*406 render props 방법 설명397 Context의 기본값을 Consumer-조회 : 중괄호 사용해서 그안에 함수를 넣어 전달해주는 방식()-->action함수를 호출해 업데이트 값변경---> 408 useContext Hook으로 대처가능하다 -->ColorBox.js에적용 */}
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
