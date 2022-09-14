const toHijri = (date) => {
    return new Date(date).toLocaleDateString(
      'ar-SA-u-ca-islamic-umalqura',
      { timeZone: 'Asia/Riyadh', month: 'numeric', weekday: 'long', day: 'numeric', year: 'numeric' }
    )
}
export default toHijri;