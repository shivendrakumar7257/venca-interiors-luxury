import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-cream/50 hover:text-champagne transition-colors duration-300 mb-12 font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider">Back to Home</span>
          </Link>

          <div className="mb-10">
            <h1 className="font-display text-4xl text-cream tracking-wide mb-3">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-cream/50 font-body">
              {isLogin 
                ? 'Sign in to access your account' 
                : 'Join us for an exclusive experience'}
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-cream/60 text-sm mb-2 font-body tracking-wide">
                  Full Name
                </label>
                <Input 
                  type="text" 
                  placeholder="Enter your name"
                  className="bg-charcoal border-charcoal-light text-cream placeholder:text-cream/30 focus:border-champagne"
                />
              </div>
            )}

            <div>
              <label className="block text-cream/60 text-sm mb-2 font-body tracking-wide">
                Email Address
              </label>
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-charcoal border-charcoal-light text-cream placeholder:text-cream/30 focus:border-champagne"
              />
            </div>

            <div>
              <label className="block text-cream/60 text-sm mb-2 font-body tracking-wide">
                Password
              </label>
              <div className="relative">
                <Input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="bg-charcoal border-charcoal-light text-cream placeholder:text-cream/30 focus:border-champagne pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/40 hover:text-champagne transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-champagne/70 hover:text-champagne text-sm font-body transition-colors">
                  Forgot Password?
                </button>
              </div>
            )}

            <Button variant="luxury" size="lg" className="w-full">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <span className="text-cream/40 font-body text-sm">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-champagne hover:underline font-body text-sm"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:block w-1/2 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-transparent to-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="font-brand text-5xl text-cream/20 tracking-[0.15em] font-medium">
              Vanca
              <br />
              Interio
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
