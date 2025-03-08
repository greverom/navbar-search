import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/layout"
import { CartProvider } from "./context/cart/cartProvider"
import { ToastProvider } from "./context/Toast/toastProvider"


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
