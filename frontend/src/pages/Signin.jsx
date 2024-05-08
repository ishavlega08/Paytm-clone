import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useNavigate } from "react-router-dom"


export const Signin = () => {
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter you credentials to access your account"} />
                <InputBox placeholder="ishav@gmail.com" label={"Email"} />
                <InputBox placeholder="123456" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={() => {
                        navigate("/dashboard");
                    }} label={"Sign in"} />
                </div>
                <div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    </div>
}