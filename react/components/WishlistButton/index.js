import React from "react";
import Styles from "./styles.css";

const WishlistButton = ({AddListenBtn}) => {
  
  const handleClick = () => {
    const wishlistButton = document.querySelector(".sideas-sideas-5-x-wishlistButtonContainer .vtex-button")
    wishlistButton && wishlistButton.click()
  }
  
  return (
    <div onClick={handleClick} className={`${Styles.wishlistButtonContainer}`}>
      <AddListenBtn />
      <div className={`${Styles.wishlistButtonText}`}>Agregar a favoritos</div>
    </div>
  )
}

export default WishlistButton