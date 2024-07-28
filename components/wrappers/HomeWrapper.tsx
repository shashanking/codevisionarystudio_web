import Footer from "../layout/Footer";
import Header from "../layout/Header";

type HomeWrapperProps = {
  children: React.ReactNode;
};
export const HomeWrapper: React.FC<HomeWrapperProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
