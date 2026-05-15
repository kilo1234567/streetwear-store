import { ProductFilters } from '@/types';
import { getQueryString } from '@/utils/helpers';

export const buildProductQuery = (filters: ProductFilters): string => {
  const params: Record<string, any> = {};

  if (filters.category && filters.category.length > 0) {
    params.category = filters.category.join(',');
  }
  if (filters.sizes && filters.sizes.length > 0) {
    params.sizes = filters.sizes.join(',');
  }
  if (filters.colors && filters.colors.length > 0) {
    params.colors = filters.colors.join(',');
  }
  if (filters.priceRange) {
    params.minPrice = filters.priceRange[0];
    params.maxPrice = filters.priceRange[1];
  }
  if (filters.rating) {
    params.rating = filters.rating;
  }
  if (filters.sortBy) {
    params.sortBy = filters.sortBy;
  }
  if (filters.searchQuery) {
    params.search = filters.searchQuery;
  }

  return getQueryString(params);
};

export const calculateShipping = (total: number): number => {
  if (total === 0) return 0;
  if (total >= 100) return 0; // Free shipping
  if (total >= 50) return 5;
  return 10;
};

export const calculateTax = (subtotal: number, taxRate: number = 0.1): number => {
  return Math.round(subtotal * taxRate * 100) / 100;
};

export const calculateOrderTotal = (
  subtotal: number,
  shippingCost: number,
  discountAmount: number = 0
): number => {
  const tax = calculateTax(subtotal);
  return Math.round((subtotal + shippingCost + tax - discountAmount) * 100) / 100;
};
