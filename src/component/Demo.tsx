// import Card from "./Card"
// const Demo = () => {
//     return (
//         <Card
//             title="My Card"
//             actions={
//                 <button onClick={() => console.log("button clicked")}>Click Me!</button>
//             }>
//             <p>some content</p>
//         </Card>
//     )
// }

// export default Demo
import { IconButton } from "./IconButton";

function HeartIcon() {
    return <span>❤️</span>;
  }
  
  export function Demo() {
    return (
      <IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
        Like
      </IconButton>
    );
  }