import checkNumInputs from './checkNumInputs';

const forms = (state) => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone]')

    // Сообщения для работы с пользователем
    const message = {
        loading: "Загрузка",
        success: "Спасибо, скоро мы с вами свяжемся",
        failure: "Что-то пошло не так"
    };
    // Функция для отправки данных на сервер
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text()

    };
    // Очистка полей
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = "";
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            // Создание блока статуса
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            // Сбор данных с форм
            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === "end") {
                for(let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData("assets/server.php", formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;