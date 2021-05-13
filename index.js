export default {
	bind(el, binding, vnode) {
		el.clickOutsideEvent = function (event) {
			if (!(el === event.target || event.path.includes(el))) {
				vnode.context[binding.expression](event);
			}
		};
		document.body.addEventListener('mousedown', el.clickOutsideEvent)
	},
	unbind(el) {
		document.body.removeEventListener('mousedown', el.clickOutsideEvent)
	},
};