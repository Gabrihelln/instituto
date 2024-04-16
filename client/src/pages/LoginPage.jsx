import React, {useState} from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle} from "react-icons/fc";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { Divider, InputBox } from "../components";



const LoginPage = () => {
  const user = {}

  const [data, setData] = useState ({
    email: "",
    password:"",
  });

  const handleChange = (e) => {
    const [name, value] = e.target;

    setData ({
      ...data,
      [name]: value,
    })
  }

  const googleLogin = async () => {};

  const handleSubmit = async () => {};

  if (user.token) window.location.replace("/");

  return (
  <div className="flex w-full h-[100vh]">
    <div className="hidden md:flex flex-col gap-y-4 w-1/3 min-h-screen bg-black items-center justify-center">
      <Logo type="login" />
      <span className="text-xl font-semibold text-white">Bem-Vindo!</span>
    </div>
    <div className="flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b md:dark bg-gradient-to-r from-black via-[#071b3e] to-black items-center px-10 md:px-20 lg:px-40">
      <div className="w-full flex flex-col items-center justify-center py-12 px-14 sm:px-6 lg:px-8">
        <div className="block mb-10 md:hidden">
            <Logo/>
        </div>
        <div className="max-w-md w-full space-y-8">
          <div className="">
            <h2 className="mt-6 text-center text-2xl md:text-3xl font-semibold text-gray-600 dark:text-white">
              Entre na sua conta
              </h2>
          </div>
          <Button label="Entre com sua conta Google"
          icon={<FcGoogle className=""/>}
          styles="w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border border-gray-300"
          onClick={() => googleLogin()}
          />
          <Divider label="Ou entre com seu e-mail"/>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col rounded-md shadow-sm -space-y-px gap-5">
            <InputBox 
            type='email' 
            label='E-mail' 
            placeholer='email@exemplo.com' 
            name='email' 
            vale={data?.email}
            isRequired={true}
            onChange={handleChange}
            />
            <InputBox 
            type='password' 
            label='Senha'
            placeholer='Sua senha' 
            name='password' 
            vale={data?.password}
            isRequired={true}
            onChange={handleChange}
            />
            </div>

            <Button
              label='Entrar'
              type='subimt'
              styles='group relative w-full flex justify-center py-2.5 2xl:py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-black dark:bg-blue-600 hover:bg-rose-700 focus,outline-none focus-ring-2 focus:ring-offset-2 focus:ring-rose-500 mt-8'/>
          </form>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
            <p>
              Ainda não tem conta? {" "}
              <Link to='/sign-up' className='text-blue-600 font-medium'>
                Inscreva-se!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
};

export default LoginPage;
