import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Cog } from "lucide-react";

import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="mt-24 flex justify-center items-center">
      <Card className="w-96 p-5">
        <CardHeader className="flex justify-center">
          <div className="flex">
            <Cog />
            <p className="font-bold text-inherit px-4">Register Here</p>
          </div>
        </CardHeader>
        <CardBody>
        <RegisterForm/>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
