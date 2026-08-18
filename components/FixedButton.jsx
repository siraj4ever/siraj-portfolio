import Link from "next/link";

const FixedButton = ({ children, href = "/" }) => (
  <Link
    href={href}
    className="fixed top-20 left-5 md:left-8 flex justify-center items-center w-10 h-10 rounded-full
      bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
      border border-gray-200 dark:border-gray-700
      shadow-md hover:shadow-lg
      text-gray-700 dark:text-gray-200
      hover:-translate-x-0.5 hover:scale-110
      transition-all duration-200 ease-in-out z-[60]"
    title="Go back"
  >
    {children}
  </Link>
);

export default FixedButton;
