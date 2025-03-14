import { FC } from "react";

interface IIntroSubPageProps {
  params: { introSub: string };
}

const IntroSubPage: FC<IIntroSubPageProps> = ({ params }) => {
  console.log("Params received:", params);
  return (
    <div>
      <h1>Giới thiệu về {params?.introSub}</h1>
      <p>Trang này hiển thị thông tin về {params?.introSub}.</p>
    </div>
  );
};

export default IntroSubPage;
