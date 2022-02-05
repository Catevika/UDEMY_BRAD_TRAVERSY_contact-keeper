const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const colors = require('colors');

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(db, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			userFindAndModify: false,
// 			useUnifiedTopology: true
// 		});
// 		console.log('MongoDB Connected ...');
// 	} catch (err) {
// 		console.error(err.message);
// 		process.exit(1);
// 	}
// };

// module.exports = connectDB;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(db);

		console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(`Error: ${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

module.exports = connectDB;
