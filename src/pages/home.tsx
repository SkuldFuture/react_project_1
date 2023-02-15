import { OrderSort } from "../components/UI/OrderSort";
import { Order } from "../components/Order";
import { orders } from "../data/orders";
import { Buttonsubmit } from "../components/UI/Buttonsubmit";

export const Home = () => {
  return (
    <div className="App">
      <div className="content-container">
        <article className="order">
          <div className="order-title">Список заявок</div>
          <div>
            {/* <button className="make_order">Создать заявку  <span className="plus">➕</span></button> */}
            <Buttonsubmit className="make_order" text="Создать заявку +" />
          </div>
          {orders.map((order) => (
            <Order order={order} key={order.order_id} />
          ))}
        </article>
        <aside className="filter">
          <div className="filter-title">Сортировать по</div>
          <OrderSort />
        </aside>
      </div>
    </div>
  );
};

export {};
