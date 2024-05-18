import Header from "@/components/shared/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>

     <div  className="flex-grow mx-auto container"> {children}</div>

    </div>
  );
};

export default DashboardLayout;
