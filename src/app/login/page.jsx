import React from 'react';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-[900px] bg-white rounded-sm shadow-2xl p-6 md:p-10 z-10 font-sans text-[#111111]">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-full p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-100 pb-4">Login</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <input type="text" placeholder="Username or Email address*" className="w-full px-4 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none" required />
            </div>
            <div>
              <input type="password" placeholder="Password*" className="w-full px-4 py-3 bg-[#EEEEEE] text-gray-800 rounded-sm text-sm focus:outline-none" required />
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
            <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-sm py-2.5 px-4 hover:bg-gray-50 text-gray-700 font-medium transition-colors">
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