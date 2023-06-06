const MongoDB = require('./mongoDB')
const url = 'mongodb+srv://ngontolamath:s4hUDVjsNNLlFfsJ@cluster0.tmm8smt.mongodb.net/?retryWrites=true&w=majority' // Ganti dengan URL MongoDB yang sesuai
const options = {} // Opsi tambahan (opsional)
const db = new MongoDB(url, options)
async function connectAndReadData() {
  try {
    await db.connect()
    const data = db.data
    console.log('Data:', data)
    // Lakukan operasi lainnya dengan data di sini
  } catch (error) {
    console.error('Error:', error)
  } finally {
    // Tambahkan kode untuk memutus koneksi dengan MongoDB jika diperlukan
    await mongoose.connection.close()
  }
}
connectAndReadData()
