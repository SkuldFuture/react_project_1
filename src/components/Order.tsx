import React from 'react'
import { IOrder } from '../models'

interface OrderProps {
    order: IOrder
}

function Order({order}: OrderProps) {
    console.log(order)
    return (
        <div className='order_card'>
            <div className='header_order_card'>
                <p><span>Заявка№{order.order_id}</span> </p>
                <p><span>{order.my_firm}</span></p>
                <p><span>Статус заявки</span> {order.status}</p>
            </div>
            <div className='body_order_card'>
                <ul className='client_order_card'>
                    <h3>Клиент</h3>
                    <li className="left_field"><span>Фирма клиента</span>{order.client_firm_name}</li>
                    <li className="left_field"><span>Номер клиента</span>{order.client_contact}</li>
                    <li className="left_field"><span>Направление</span>{order.direction}</li>
                    <li className="left_field"><span>Вид оплаты клиента</span>{order.client_payment_type}</li>
                    <li className="left_field"><span>Реквизиты клиента</span>{order.client_card}</li>
                    <li className="left_field"><span>Сумма оплаты клиента</span>{order.client_sum}</li>
                    <li className="left_field"><span>Вес, объем</span>{order.weight}</li>
                    <li className="left_field"><span>Штраф</span>{order.driver_forfeit}</li>
                </ul>
                <ul className='driver_order card'>
                    <h3>Водитель</h3>
                    <li className="right_field"><span>ФИО водителя</span>{order.driver_name}</li>
                    <li className="right_field"><span>ИИН водителя</span>{order.driver_IIN}</li>
                    <li className="right_field"><span>Рег.номер водителя</span>{order.driver_reg_num}</li>
                    <li className="right_field"><span>Сумма оплаты водителю</span>{order.driver_payment_sum}</li>
                    <li className="right_field"><span>Предоплата водителю</span>{order.driver_prepayment}</li>
                    <li className="right_field"><span>Номер водителя</span>{order.driver_number}</li>
                    <li className="right_field"><span>Дата погрузки</span>{order.shipment_date}</li>
                    <li className="right_field"><span>Дата выгрузки</span>{order.unloading_date}</li>
                </ul>
            </div>
            <div className='footer_order_card'>
                <span>Редактировать заявку</span>
                <span>Удалить заявку</span>
            </div>
        </div>
    )
}

export { Order }