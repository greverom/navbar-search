import   Modal from "react-modal";
import { BrowserRouter } from "react-router-dom"
import   Layout from "./components/layout/layout"
import { CartProvider } from "./context/cart/cartProvider"
import { ToastProvider } from "./context/Toast/toastProvider"

Modal.setAppElement("#root");

function App() {

  return (
    <>
      <ToastProvider> 
        <CartProvider>
          <BrowserRouter>  
            <Layout />
          </BrowserRouter>
        </CartProvider>
      </ToastProvider>
    </>
  )
}

export default App
