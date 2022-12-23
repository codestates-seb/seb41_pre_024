import Footer from "../components/Footer";
import MypageContent from "../components/mypage/MypageContent";
import UserInfo from "../components/mypage/MypageInfo";
import Aside from "../components/Aside";

const UserPage = () => {
  return (
    <>
      {/* <Aside /> */}
      <UserInfo />
      <MypageContent />
      <Footer />
    </>
  );
};
export default UserPage;
