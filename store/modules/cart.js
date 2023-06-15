export default {
	state: {
		list: [],
		selectedIds: []
	},
	getters: {
		isAllChecked(state) {
			return state.selectedIds.length === state.list.length
		}
	},
	mutations: {
		handleCheckAll(state) {
			if (this.getters.isAllChecked) {
				state.selectedIds = []
			} else {
				state.selectedIds = state.list.map(i => i.id)
			}
		},
		handleCheckItem(state, id) {
			if (state.selectedIds.includes(id)) {
				state.selectedIds = state.selectedIds.filter(i => i !== id)
			} else {
				state.selectedIds.push(id)
			}
		},
		handleChangeItemCount(state, item) {
			const list = [...state.list]
			const itemIndex = list.find(i => i.id === item.id)
			list[itemIndex] = item
			state.list = list
		},
		handleRemoveCart(state) {
			state.list = state.list.filter(item => !state.selectedIds.includes(item.id))
			state.selectedIds = []
		}, 
		handleAddCart(state, item) {
			const findIndex = state.list.findIndex(i => i.id === item.id)
			if (findIndex === -1) {
				state.list.unshift(item)
			} else {
				state.list[findIndex].count += item.count
			}
		}
	}
}