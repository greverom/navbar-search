import   Modal from "react-modal";
import { BrowserRouter } from "react-router-dom"
import   Layout from "./components/layout/layout"
import { CartProvider } from "./context/cart/cartProvider"
import { ToastProvider } from "./context/Toast/toastProvider"
import { GlobalStyles } from "./styles/globalStyles";

Modal.setAppElement("#root");

function App() {

  return (
    <>
      <ToastProvider> 
        <CartProvider>
          <BrowserRouter> 
          <GlobalStyles />
            <Layout />
          </BrowserRouter>
        </CartProvider>
      </ToastProvider>
    </>
  )
}

export default App
