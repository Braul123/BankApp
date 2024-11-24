import React, {createContext, useState, useContext, ReactNode} from 'react';
import {ProductContextProps} from '../types/interfaces';
import {ProductType} from '../types/types';

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined,
);

export const ProductProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [product, setProduct] = useState<ProductType | undefined>(undefined);

  const saveProduct = (product: ProductType) => setProduct(product);
  const deleteProduct = () => setProduct(undefined);

  return (
    <ProductContext.Provider value={{product, saveProduct, deleteProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextProps => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('No se puede usar el contexto sin un proveedor');
  }
  return context;
};
