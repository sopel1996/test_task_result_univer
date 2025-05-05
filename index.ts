interface PriceOptions {
    price: number;
    discount?: number;
    isInstallment: boolean;
    months?: number;
}

const totalPrice = ({ price, discount = 0, isInstallment, months = 0  } : PriceOptions) : number => {
    let res = price;
    if (discount){
        res *= (1-(discount / 100));
    }
    if (isInstallment && months){
        res /= months
    }

    return res;


};