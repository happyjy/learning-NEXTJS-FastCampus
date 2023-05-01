import Image from "next/image";
import ViewSource from "../components/view-source";
import mountains from "../public/mountains.jpg";
/* 
  # Image
    * next package에 image의 객체를 활용하면 viewport에 맞는 image size를 제공함으로 네트워크의 최적화를 이룰 수 있다.
*/
const Responsive = () => (
  <div>
    <ViewSource pathname="pages/responsive.tsx" />
    <h1>Image Component With Layout Responsive</h1>
    <Image
      alt="Mountains"
      src={mountains}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  </div>
);

export default Responsive;
