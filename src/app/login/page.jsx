"use client";

import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CarIcon = () => (
  <svg className="w-6 h-6 text-[#EF3737] flex-shrink-0 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 5h-16l1-5zm2 9a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (!isOpen) return null;

  const handleLoginSubmit = async (data) => {
    console.log("Login Data:", data); 

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, 
      password: data.password, 
      rememberMe: true,
      callbackURL: "/",
    });

    console.log("Login Response:", res, "Login Error:", error);

    if (error) {
      toast.error(error.message || "Login failed. Please try again.", {
        position: "top-center",
        icon: <CarIcon /> 
      });
    } else {
      toast.success("Login successful! Welcome back.", {
        position: "top-center",
        icon: <CarIcon /> 
      });
      onClose(); 
    }
  };

  const handleGoogleSignin = async () => {
    const { data: res, error } = await authClient.signIn.social({ // 👈 ডিস্ট্রাকচার এবং রেসপন্স হ্যান্ডেল করা হলো
      provider: "google",
      callbackURL: "/",
    });
    
    if (error) {
      toast.error(error.message || "Google sign-in failed.");
    } else {
      console.log("Google Sign-In Response:", res);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-225 bg-white rounded-sm shadow-2xl p-6 md:p-10 z-10 font-sans text-[#111111]">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-full p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-100 pb-4">Login</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-6">
          
          <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-4">
            <div>
              <input 
                type="email" 
                {...register("email", { required: "Email is required" })}
                placeholder="Username or Email address*" 
                className="w-full px-4 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email.message}</p>}
            </div>

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                {...register("password", { required: "Password is required" })}
                placeholder="Password*" 
                className="w-full px-4 pr-12 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none" 
              />
              
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.822 7.822L21 21m-2.228-2.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1 font-semibold">
                  {errors.password.message || "Password is required"}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="rememberMe" className="w-4 h-4 rounded-sm border-gray-300 text-[#EF3737] focus:ring-[#EF3737] cursor-pointer" />
              <label htmlFor="rememberMe" className="text-gray-600 text-sm font-medium cursor-pointer select-none">Remember Me</label>
            </div>
            <button type="submit" className="w-full md:w-auto px-10 py-3 bg-[#EF3737] text-white font-bold rounded-sm hover:bg-[#d62f2f] uppercase text-sm mt-2">
              Login
            </button>
          </form>

          <div className="flex flex-col space-y-4 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-12">
            <span className="text-gray-400 font-bold text-sm uppercase">Login the Quick Way</span>
            <button onClick={handleGoogleSignin} type="button" className="cursor-pointer flex items-center justify-center gap-3 w-full border border-gray-300 rounded-sm py-2.5 px-4 hover:bg-gray-50 text-gray-700 font-medium transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.642 1.052 14.945 0 12 0 7.354 0 3.373 2.736 1.49 6.72l3.776 3.045z"/>
                <path fill="#4285F4" d="M23.49 12.275c0-.825-.075-1.62-.214-2.385H12v4.51h6.44a5.508 5.508 0 0 1-2.39 3.613l3.714 2.88c2.172-2.001 3.426-4.947 3.426-8.618z"/>
                <path fill="#FBBC05" d="M5.266 14.235L1.49 17.28A11.947 11.947 0 0 0 12 24c3.08 0 5.877-1.021 7.96-2.76l-3.714-2.88a7.114 7.114 0 0 1-4.246 1.191 7.09 7.09 0 0 1-6.734-5.316z"/>
                <path fill="#34A853" d="M12 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.642 1.052 14.945 0 12 0 7.354 0 3.373 2.736 1.49 6.72l3.776 3.045a7.16 7.16 0 0 1 .001 4.47l-3.776-3.045z"/>
              </svg>
              <span>Continue with <strong className="text-black">Google</strong></span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm font-medium space-y-1">
          <div className="text-gray-600">
            Do not have an account?{' '}
            <button onClick={onSwitchToRegister} className="text-[#EF3737] hover:underline font-bold">
              Signup Here
            </button>
          </div>
          <div>
            <button className="text-[#EF3737] hover:underline font-bold">Forgot Password ?</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginModal;