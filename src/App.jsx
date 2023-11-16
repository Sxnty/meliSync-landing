import { ChakraProvider } from '@chakra-ui/react';
import RouterConfig from './routes/RouterConfig';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
