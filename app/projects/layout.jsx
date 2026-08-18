import Footer from "@/components/Footer";

export const metadata = {
  title: "Siraj | Projects",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
