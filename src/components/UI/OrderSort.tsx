function OrderSort() {
    return (
      <select className='order_sort'>
        <option value="sort_by_date">По дате</option>
        <option value="sort_by_firmname">По фирме клиента</option>
      </select>
    )
}


export { OrderSort }