export default {
	bind(el, binding, vnode) {
		el.clickOutsideEvent = function (event) {

			let isThisElement = el === event.target;
			let isChildElement = event.path.includes(el);
			let isClickedScrollY = event.offsetX > event.target.clientWidth;
			let isClickedScrollX = event.offsetY > event.target.clientHeight;

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