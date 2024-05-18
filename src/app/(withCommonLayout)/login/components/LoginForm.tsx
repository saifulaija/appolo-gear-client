import { Input } from "@nextui-org/react"
import Link from "next/link"


const LoginForm = () => {
  return (
    <div>
        <form className=" space-y-4">
            <Input name="email" label='Email' variant="bordered"/>
            <Input name="password" type="password" label='Password' variant="bordered"/>
            <div className="flex justify-end text-gray-500">
                <Link href='/register'> If you don&apos;t have account? <span className="underline underline-offset-2 text-primary-600">sign up</span></Link>
            </div>
        </form>
    </div>
  )
}

export default LoginForm