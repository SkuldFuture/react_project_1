import { Inputform } from "../components/UI/Inputform";
import { Buttonsubmit } from "../components/UI/Buttonsubmit";

// Тут надо Ебануть гриды
const Createorder = () => {
  return (
    <div className="create_order">
      <div className="create_order_tittle">Создание заявки</div>
      <Inputform name="my_firm" text="Наименование ИП" />
      <div className="create_order_inputs">
        <ul className="create_order_client_field">
          <Inputform name="client_firm_name" text="Фирма клиента" />
          <Inputform name="client_contact" text="Номер клиента" />
          <Inputform name="direction" text="Направление" />
          <Inputform name="client_payment_type" text="Вид оплаты клиента" />
          <Inputform name="client_card" text="Реквизиты клиента" />
          <Inputform name="client_sum" text="Сумма оплаты клиента" />
          <Inputform name="weight" text="Вес, объем" />
          <Inputform name="driver_forfeit" text="Штраф" />
        </ul>
        <ul className="create_order_driver_field">
          <Inputform name="driver_name" text="ФИО водителя" />
          <Inputform name="driver_IIN" text="ИИН водителя" />
          <Inputform name="driver_reg_num" text="Рег. номер водителя" />
          <Inputform name="driver_payment_sum" text="Сумма оплаты водителю" />
          <Inputform name="driver_prepayment" text="Предоплата водителю" />
          <Inputform name="shipment_date" text="Дата погрузки" />
          <Inputform name="unloading_date" text="Дата выгрузки" />
        </ul>
      </div>
      <div className="button_center">
        <Buttonsubmit className="create_order_button" text="Сохранить заявку" />
      </div>
    </div>
  );
};

export { Createorder };
