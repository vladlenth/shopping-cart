import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </BrowserRouter>
  );
};
