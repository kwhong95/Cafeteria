const csvToJson = require("convert-csv-to-json")

const database = {
	cafeInfo: [],
}

Object.keys(database).forEach((key) => {
	database[key] = [
		...database[key],
		...csvToJson.fieldDelimiter(',')
		.getJsonFromCsv(`./src/data-in-csv/${key}.csv`)
	]
	if (database[key].length > 0) {
		const firstItem = database[key][0];
		Object.keys(firstItem).forEach((itemKey) => {
			if (database[key].every((item) => {
				return /^-?\d+$/.test(item[itemKey])
			})) {
				database[key].forEach((item) => {
					item[itemKey] = Number(item[itemKey])
				})
			}
		})
	}
})

module.exports = database;