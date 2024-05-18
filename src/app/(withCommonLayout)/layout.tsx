import Header from "@/components/shared/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
     <div  className="flex-grow mx-auto container"> {children}</div>
      <p>Footer</p>
    </div>
  );
};

export default CommonLayout;
