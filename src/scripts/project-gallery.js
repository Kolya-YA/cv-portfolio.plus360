document.addEventListener("DOMContentLoaded", () => {
	const gallery = document.querySelector(".project-gallery");
	if (gallery) {
		const items = gallery.querySelectorAll("li");
		const dialog = document.querySelector(".project-gallery__dialog");
        const closeBtn = dialog.querySelector(".project-gallery__dialog__close");

		let curIndex = 0;

        closeBtn.addEventListener("click", () => {
            dialog.close();
        });

		items.forEach((item, index) => {
			item.addEventListener("click", () => {
				curIndex = index;
				const picData = {
					fullSrc: item.dataset.fullSrc || '',
					alt: item.dataset.alt || ''
				};
				openDialog({ index: curIndex, pic: picData, dialog });
			});
		});
	}
});

function openDialog(data) {
	const fullImage = data.dialog.querySelector(".project-gallery__dialog img");
	fullImage.src = data.pic.fullSrc;
	fullImage.alt = data.pic.alt;
	data.dialog.showModal();
}
