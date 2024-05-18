import { Input } from "@nextui-org/react"
import Link from "next/link"


const RegisterForm = () => {
  return (
    <div>
        <form className=" space-y-4">
            <Input name="name" label='Name' type="text" variant="bordered"/>
            <Input name="email" label='Email' type="email" variant="bordered"/>
            <Input name="password" type="password" label='Password' variant="bordered"/>
            <div className="flex justify-end text-gray-500">
                <Link href='/login'> Have you an account? <span className="underline-offset-1 underline text-primary-600">sign in</span></Link>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm;