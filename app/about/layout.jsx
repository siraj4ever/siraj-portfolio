import Footer from "@/components/Footer";

export const metadata = {
	title: "Siraj | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
