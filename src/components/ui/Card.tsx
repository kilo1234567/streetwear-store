import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false, onClick }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={clsx(
        'bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300',
        hover && 'cursor-pointer shadow-md hover:shadow-lg',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  onSale?: boolean;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  originalPrice,
  category,
  rating,
  reviews,
  isNew,
  onSale,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-700 mb-4 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-1 rounded-full text-xs font-bold">
            NEW
          </div>
        )}
        {onSale && (
          <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
            SALE
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-medium">
          {category}
        </p>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-neutral-900 dark:text-white">{rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={clsx(
                    'text-xs',
                    i < Math.round(rating) ? '★' : '☆'
                  )}
                >
                  {i < Math.round(rating) ? '★' : '☆'}
                </span>
              ))}
            </div>
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">({reviews})</span>
        </div>
        <div className="flex items-baseline gap-2 pt-2">
          <span className="text-xl font-bold text-neutral-900 dark:text-white">${price}</span>
          {originalPrice && (
            <span className="text-sm text-neutral-500 dark:text-neutral-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
