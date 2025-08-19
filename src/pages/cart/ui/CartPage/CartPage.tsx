import React from "react";
import styles from "./CartPage.module.css";
import { Container } from "@/shared/ui";
import CartItem from "@/entities/cart/ui/CartItem/CartItem";
import { Title } from "@/entities";
import { useAppSelector } from "@/app/store/store";

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <section className={styles.cart}>
      <Container>
        <Title title="Shopping cart" link={"/products"} />
        <ul className={styles.list}>
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CartPage;
