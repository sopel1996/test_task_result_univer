interface TotalPriceOptions {
    price: number;
    discount?: number;
    isInstallment?: boolean;
    months?: number;
  }
  
  const totalPrice = ({
    price,
    discount = 0,
    isInstallment,
    months = 12,
  }: TotalPriceOptions): number => {
    if (discount > 1) {
      discount = discount / 100;
    }
  
    const discountedPrice = price - price * discount;
    const result = isInstallment ? discountedPrice / months: discountedPrice;
  
    return Math.round(result);
  };
  
  const total = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }); // 6250
  console.log(total);