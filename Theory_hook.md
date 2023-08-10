# react-21-22

- [Документація-стара] (https://ua.reactjs.org/docs/hooks-intro.html)
- [Документація-нова-En] (https://react.dev/)
- useState
  - одне значення = один useState
- useEffect
  - Counter
  - Кожен рендер - без [], з [] - запуститься один раз і більше ніколи
  - Кожен рендер при зміні якогось стейту чи пропсу
    useEffect(callback, deps) приймає два аргументи:

callback - функція, усередині якої виконується вся логіка ефекту. Наприклад, запити на сервер, завдання обробників подій на документ і т.п.
залежності - масив змінних, при зміні будь-якого з яких, буде запускатися ефект і виконуватися callback. Це може бути стан, пропси або будь-яке локальне значення всередині компонента.

- SignUpForm
  - localStorage
  - lazy state initialization
  - Кастомний хук useLocalStorage
- useRef
  - Clock
    - Перший рендер
    - Останній рендер
- useContext
  - UserMenu
- Покемони

## Бібліотеки

- [React Hook Form](https://react-hook-form.com/)
- [Хуки для HTTP-запитів](https://github.com/tannerlinsley/react-query)
- [Кастомні хуки](https://github.com/streamich/react-use)
