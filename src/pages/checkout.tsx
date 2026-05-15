import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/utils/helpers';
import Link from 'next/link';

const Checkout: NextPage = () => {
  const { items, total, clearCart } = useCartStore();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const shipping = total >= 100 ? 0 : total >= 50 ? 5 : 10;
  const tax = Math.round(total * 0.1 * 100) / 100;
  const grandTotal = total + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      clearCart();
      setStep('confirmation');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 font-display">
            Your cart is empty
          </h1>
          <Link href="/shop">
            <Button size="lg" className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  if (step === 'confirmation') {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-6xl mb-4">✓</div>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 font-display">
              Order Confirmed!
            </h1>
          </motion.div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8">
            Thank you for your purchase! We've sent a confirmation email to {formData.email}.
          </p>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-lg mb-8">
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">Order Number</p>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              #STW{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">Estimated Delivery</p>
            <p className="text-lg text-neutral-900 dark:text-white">3-5 business days</p>
          </div>
          <Link href="/">
            <Button size="lg" className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
              Back to Home
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="flex justify-center gap-4 mb-12">
          {(['shipping', 'payment'] as const).map((s, index) => (
            <div key={s} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === s || (step === 'payment' && s === 'shipping')
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                    : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {index + 1}
              </div>
              <span className="font-medium text-neutral-900 dark:text-white">
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </span>
              {index < 1 && <div className="w-12 h-0.5 bg-neutral-200 dark:bg-neutral-700 mx-4" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 'shipping' && (
              <motion.form
                key="shipping"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleShippingSubmit}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Street Address"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" size="lg" fullWidth className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                  Continue to Payment
                </Button>
              </motion.form>
            )}

            {step === 'payment' && (
              <motion.form
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handlePaymentSubmit}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">Payment Method</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Credit Card', 'Debit Card', 'PayPal', 'Apple Pay', 'Google Pay'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      className="p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-900 dark:hover:border-white transition-colors text-center"
                    >
                      {method}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <Input
                    label="Cardholder Name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    placeholder="MM/YY"
                    required
                  />
                  <Input
                    label="CVV"
                    placeholder="123"
                    type="password"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('shipping')}
                    className="flex-1 py-3 border-2 border-neutral-900 dark:border-white rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Back
                  </button>
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    isLoading={isProcessing}
                    className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  >
                    {isProcessing ? 'Processing...' : `Pay ${formatPrice(grandTotal)}`}
                  </Button>
                </div>
              </motion.form>
            )}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg h-fit sticky top-24"
          >
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 font-display">Order Summary</h3>
            <div className="space-y-3 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-700 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div>
                    <p className="text-neutral-900 dark:text-white font-medium">{item.product.name}</p>
                    <p className="text-neutral-500 text-xs">x{item.quantity}</p>
                  </div>
                  <p className="text-neutral-900 dark:text-white font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-bold text-neutral-900 dark:text-white pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
