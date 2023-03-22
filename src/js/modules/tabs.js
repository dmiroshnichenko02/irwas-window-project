const tabs = (headersSelector, tabSelector, contentSelector, activeClass, display = "block") => {
    // Получаем все элементы
    const header = document.querySelector(headersSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
    // Скрываем все табы
    function hidetabContent() {
        content.forEach(item => {
            item.style.display = "none";
        });

        tab.forEach(item => {
            item.classList.remove(activeClass); 
        });
    };
    // Показываем нужный таб, если не указан показываем первый
    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    };
    // Сбрасывавем все табы и показываем первый
    hidetabContent();
    showTabContent();
    // Вешаем дилигирование событий на родительский элемент табов
    header.addEventListener('click', (e) => {
        const target = e.target;
        // Проверяем на нажатие в нужный элемент
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                // Скрываем все и показываем нужный
            tab.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hidetabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;