export default {
	state: {
		list: [],
	},
	getters: {

	},
	mutations: {
		handleAddAddress(state, address) {
			if (address.isDefault) {
				state.list.forEach(item => item.isDefault = false)
				state.list.unshift(address)
			} else {
				if (state.list.length === 0) {
					address.isDefault = true
				} 
				state.list.push(address)
			}
		},
		handleEditAddress(state, { address, index }) {
			if (address.isDefault) {
				state.list.forEach(item => item.isDefault = false)
				state.list = state.list.filter(item => item.name !== address.name)
				state.list.unshift({ ...address, isDefault: true })
			} else {
				state.list[index] = address
			}
		}
	}
}