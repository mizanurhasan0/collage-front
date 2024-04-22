"use client"
import CBtn from '@/components/button/CBtn';
import CInput from '@/components/input/CInput';
import logo from '@/assets/imgs/logo.jpeg';
import CImg from '@/components/Image/CImg';

const Register: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="relative hidden md:inline-block rounded-md border-2 border-y-0 border-cpink border-opacity-30 overflow-hidden">
        <div className="absolute z-10 text-cwhite px-20 top-1/2 -translate-y-1/2 space-y-4">
          <h1 className=" text-6xl font-bold">Grow your business with us.</h1>
          <p className="font-medium text-3xl">Reach your business goals in record time.</p>
        </div>
        <CImg />
      </div>
      <div className="flex flex-col justify-center p-10">
        <div className=" mx-auto border-2 border-cpink shadow-lg p-2 overflow-hidden rounded-full">
          <CImg src={logo} className='w-32 h-32' />
        </div>
        <p className="text-2xl font-semibold
        py-5 text-cpink">Sign in</p>
        <div className="w-full space-y-4">
          <CInput onClick={() => alert('email')} label='Email' />
          <CInput label='Password' type='password' />
          <p className="text-right cursor-pointer opacity-60 hover:opacity-100">Forget password</p>
          <CBtn className="shadow-xl" >Login</CBtn>
        </div>
      </div>
    </div>
  )
}
export default Register;