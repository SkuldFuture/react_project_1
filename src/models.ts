export interface IOrder {
    order_id: string,
    my_firm: string,
    status: string,
    client_firm_name: string,
    client_contact: string,
    client_card: number,
    client_sum: number,
    client_payment_type: string,
    direction: string,
    shipment_date: string, // посмотри тип данных Date
    unloading_date: string,
    weight: string,
    driver_payment_sum: number,
    driver_prepayment: number,
    driver_forfeit: string | null,
    driver_name: string,
    driver_IIN: string,
    driver_reg_num: string,
    driver_number: string,
}

export {};