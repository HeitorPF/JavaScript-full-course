export const deliveryOptions = [
  {
    id: '1',
    deliverydays: 7,
    priceCents: 0
  },
  {
    id: '2',
    deliverydays: 3,
    priceCents: 499
  }, 
  {
    id: '3',
    deliverydays: 1,
    priceCents: 999
  }
]

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption

  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId) {
      deliveryOption = option
    }
  })
  return deliveryOption || deliveryOptions[0]
}

export function calculateDeliveryDate(deliveryOption) {

  const today = dayjs()
  let todayNumber = Number(today.format('d'))
  let daysSkipped = 0
  let i = 0

  while(i <= deliveryOption.deliverydays){
    if(todayNumber === 7)
      todayNumber = 0
    if(todayNumber === 0 || todayNumber === 6){//fim de semena
      daysSkipped++
      i--
    }
    todayNumber++
    i++
  }

  const deliverydate = today.add(deliveryOption.deliverydays + daysSkipped, 'days')
  const dateString = deliverydate.format('dddd, MMMM D')

  return dateString
}
