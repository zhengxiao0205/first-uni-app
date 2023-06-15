const baseUri = 'http://192.168.31.95:3000/api'

const commonFetch = (url, data, method) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			data,
			method: method || 'get',
			success: (response) => {
				if (response.statusCode !== 200) {
					reject()
				}
				const data = response.data.data
				resolve(data)
			},
		})
	})
}

export const fetchIndexData = () => {
	return commonFetch(`${baseUri}/index_list/0/data/1`)
}

export const fetchSportsData = () => {
	return commonFetch(`${baseUri}/index_list/1/data/1`)

}

export const fetchClothData = () => {
	return commonFetch(`${baseUri}/index_list/2/data/1`)
}

export const fetchIndexPageData = (page) => {
	return commonFetch(`${baseUri}/index_list/0/data/${page}`)
}

export const fetchSportsPageData = (page) => {
	return commonFetch(`${baseUri}/index_list/1/data/${page}`)
}

export const fetchClothPageData = (page) => {
	return commonFetch(`${baseUri}/index_list/2/data/${page}`)
}

export const fetchSearchData = (searchText, sortField, sortOrder) => {
	return commonFetch(
		`${baseUri}/search_list/data?searchText=${searchText}&sortField=${sortField}&sortOrder=${sortOrder}`, {
			searchText,
			sortField,
			sortOrder
		})
}

export const fetchGoodsList = () => {
	return commonFetch(`${baseUri}/goods_list/data`)
}

export const fetchGoodsDetail = (id) => {
	return commonFetch(`${baseUri}/goods_list/data/detail?id=${id}`)
}

export const login = (username, password) => {
	return commonFetch(`${baseUri}/login`, { username, password }, 'post')
}

export const sendCodeRequest = () => {
	return commonFetch(`${baseUri}/sendCode`)
}