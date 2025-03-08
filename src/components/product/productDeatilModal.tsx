import Modal from "react-modal";
import { ProductDetailModalProps } from "../../interface/products";
import { ModalContent, ImageContainer, ProductImage,
         DetailsContainer, ProductTitle, ProductPrice, ProductDescription,
         ProductOptions, CloseButton, ModalStyles
        } from "../../styles/productDetailModal";
import { useAddToCart } from "../../hooks/Cart/useCart";

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product, style = ModalStyles }) => {
  const { handleAddToCart } = useAddToCart();

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={style}>

      <ModalContent>
        <CloseButton onClick={onClose}>✕</CloseButton> 
    
        <ImageContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ImageContainer>
    
        <DetailsContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
    
          <ProductOptions>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </ProductOptions>
        </DetailsContainer>

      </ModalContent>

    </Modal>
  );
};

export default ProductDetailModal;