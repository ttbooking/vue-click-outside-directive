export default {
	bind(el, binding, vnode) {
		el.clickOutsideEvent = function (event) {

			let isThisElement = el === event.target;
			let isChildElement = event.composedPath().includes(el);
			let isClickedScrollY = event.offsetX > (event.target.offsetWidth || Infinity);
			let isClickedScrollX = event.offsetY > (event.target.offsetHeight || Infinity);

			if (!(isThisElement || isChildElement || isClickedScrollY || isClickedScrollX)) {
				vnode.context[binding.expression](event);
			}
		};
		document.body.addEventListener('mousedown', el.clickOutsideEvent)
	},
	unbind(el) {
		document.body.removeEventListener('mousedown', el.clickOutsideEvent)
	},
};