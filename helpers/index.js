
export const dateFormat = date => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('en-EN', options)
}

export const moneyFormat = ( money ) => {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}