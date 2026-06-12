"use client";

import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CarIcon = () => (
  <svg className="w-6 h-6 text-[#EF3737] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 5h-16l1-5zm2 9a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleRegisterSubmit = async (data) => {
    setLoading(true);
    try {
      const { data: ress, error } = await authClient.signUp.email({
        name: data.username, 
        email: data.email, 
        password: data.password, 
        image: data.image || "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png", 
        callbackURL: "/", 
      });

      if (error) {
        toast.error(error.message || "Something went wrong!", {
          icon: <CarIcon />,
          theme: "colored"
        });
        setLoading(false);
        return;
      }
      
      toast.success("Registration Successful! Welcome aboard.", {
        icon: <CarIcon />,
        theme: "light"
      });

      reset(); 
      onClose(); 
      
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("Network error or server is down.", {
        icon: <CarIcon />
      });
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleSignin = async () => {
    try {
      await authClient.signIn.social({ 
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      toast.error("Google sign-in failed.");
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

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-100 pb-4">Register</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-6">
          
          <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-4">
            <div>
              <input 
                type="text" 
                {...register("username", { required: "Username is required" })}
                placeholder="Username or Full Name*" 
                className="w-full px-4 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.username.message}</p>}
            </div>

            <div>
              <input 
                type="url" 
                {...register("image")} 
                placeholder="Profile Photo URL (Optional)" 
                className="w-full px-4 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none"
              />
            </div>

            <div>
              <input 
                type="email" 
                {...register("email", { required: "Email is required" })}
                placeholder="Email address*" 
                className="w-full px-4 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email.message}</p>}
            </div>

            <div>
              <input 
                type="password" 
                {...register("password", { 
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
                placeholder="Password*" 
                className="w-full px-4 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none" 
              />
              {errors.password && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.password.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full md:w-auto px-10 py-3 bg-[#EF3737] text-white font-bold rounded-sm hover:bg-[#d62f2f] uppercase text-sm mt-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Registering..." : "Register"}
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

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm font-medium">
          <div className="text-gray-600">
            Already Have an account?{' '}
            <button type="button" onClick={onSwitchToLogin} className="text-[#EF3737] hover:underline font-bold">
              Login Here
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterModal;