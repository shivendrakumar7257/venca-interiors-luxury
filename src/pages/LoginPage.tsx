import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, User, Shield, Lock, Mail, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type LoginMode = 'user' | 'admin';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMode, setLoginMode] = useState<LoginMode>('user');

  const isAdmin = loginMode === 'admin';

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-10 font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider">Back to Home</span>
          </Link>

          {/* Role Toggle */}
          <div className="relative flex bg-secondary rounded-xl p-1 mb-10">
            <motion.div
              className="absolute top-1 bottom-1 rounded-lg bg-primary"
              initial={false}
              animate={{
                left: isAdmin ? '50%' : '0.25rem',
                right: isAdmin ? '0.25rem' : '50%',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
            <button
              onClick={() => setLoginMode('user')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-body tracking-wide transition-colors duration-300 ${
                !isAdmin ? 'text-primary-foreground' : 'text-muted-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              User Login
            </button>
            <button
              onClick={() => setLoginMode('admin')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-body tracking-wide transition-colors duration-300 ${
                isAdmin ? 'text-primary-foreground' : 'text-muted-foreground'
              }`}
            >
              <Shield className="w-4 h-4" />
              Admin Login
            </button>
          </div>

          {/* Header */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${loginMode}-${isLogin}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="mb-8"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body tracking-widest uppercase mb-4 ${
                isAdmin
                  ? 'bg-accent/10 text-accent'
                  : 'bg-primary/10 text-primary'
              }`}>
                {isAdmin ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
                {isAdmin ? 'Administrator' : 'Customer'}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl text-foreground tracking-wide mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-muted-foreground font-body text-sm">
                {isLogin
                  ? isAdmin
                    ? 'Access the management dashboard'
                    : 'Sign in to your account'
                  : 'Join us for an exclusive experience'}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Form */}
          <motion.form
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {!isLogin && !isAdmin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block text-muted-foreground text-xs mb-2 font-body tracking-wide uppercase">
                  Full Name
                </label>
                <div className="relative">
                  <UserCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="pl-10 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary rounded-xl transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                  />
                </div>
              </motion.div>
            )}

            <div>
              <label className="block text-muted-foreground text-xs mb-2 font-body tracking-wide uppercase">
                {isAdmin ? 'Admin Email' : 'Email Address'}
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder={isAdmin ? 'admin@vancainterio.com' : 'Enter your email'}
                  className="pl-10 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary rounded-xl transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-muted-foreground text-xs mb-2 font-body tracking-wide uppercase">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="pl-10 pr-12 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary rounded-xl transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-primary/70 hover:text-primary text-sm font-body transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <Button
              variant={isAdmin ? 'default' : 'luxury'}
              size="lg"
              className={`w-full h-12 rounded-xl text-sm ${
                isAdmin
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90 tracking-[0.1em] uppercase font-body'
                  : ''
              }`}
            >
              {isAdmin && <Shield className="w-4 h-4 mr-1" />}
              {isLogin
                ? isAdmin
                  ? 'Access Dashboard'
                  : 'Sign In'
                : 'Create Account'}
            </Button>
          </motion.form>

          {/* Toggle login/signup (user only) */}
          {!isAdmin && (
            <div className="mt-8 text-center">
              <span className="text-muted-foreground font-body text-sm">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline font-body text-sm"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          )}

          {/* Trust badge */}
          <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground/50">
            <Lock className="w-3 h-3" />
            <span className="text-xs font-body tracking-wide">Secured with 256-bit encryption</span>
          </div>
        </motion.div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/50" />
        <AnimatePresence mode="wait">
          <motion.div
            key={loginMode}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center ${
                  isAdmin ? 'bg-accent/10' : 'bg-primary/10'
                }`}>
                  {isAdmin ? (
                    <Shield className="w-10 h-10 text-accent" />
                  ) : (
                    <User className="w-10 h-10 text-primary" />
                  )}
                </div>
                <h2 className="font-brand text-3xl xl:text-4xl text-foreground/20 tracking-[0.15em] font-medium mb-4">
                  Vanca
                  <br />
                  Interio
                </h2>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm font-body max-w-xs mx-auto leading-relaxed">
                  {isAdmin
                    ? 'Manage products, projects, and customer inquiries from your control center.'
                    : 'Discover curated luxury furniture and bespoke interiors crafted for refined living.'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginPage;
