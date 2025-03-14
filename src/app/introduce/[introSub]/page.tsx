export default function IntroSubPage({ params }: { params: { introSub: string } }) {
    return (
      <div>
        <h1>Giới thiệu về {params.introSub}</h1>
        <p>Trang này hiển thị thông tin về {params.introSub}.</p>
      </div>
    );
  }