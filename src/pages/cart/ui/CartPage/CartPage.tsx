import React from "react";
import { useAppSelector } from "@/app/store/store";
import { Container, Htag } from "@/shared/ui";
import { formatPrice } from "@/shared/utils";
import { Title, CartItem } from "@/entities";
import { FormForSend } from "@/features";
import styles from "./CartPage.module.css";

const CartPage = (): React.JSX.Element => {
  const cart = useAppSelector((state) => state.cart);
  const getTotalPrice = cart.reduce(
    (acc, item) => (acc += item.quantity * item.product.price),
    0
  );

  return (
    <section className={styles.cart}>
      <Container>
        <Title tag="h1" title="Shopping cart" link={"/products"} />

        <div className={styles.wraper}>
          <ul className={styles.list}>
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </ul>

          <div className={styles.cartForm}>
            <Htag className={styles.mb} tag="h2" size="small" color="black">
              Order details
            </Htag>
            <div className={styles.totalInfo}>
              <p className={styles.item}>
                {cart.length}
                {cart.length === 1 ? " item" : " items"}
              </p>
              <p className={styles.total}>Total</p>
              <p className={styles.price}>
                {formatPrice(getTotalPrice, "USD")}
              </p>
            </div>
            <FormForSend
              backgroundInput="white"
              borderInput="grey"
              inputColor="black"
              colorPlaceholder="grey"
              bgButton="green"
              colorButton="white"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CartPage;
