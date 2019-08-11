import React, { useState, Fragment } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <Fragment>
            <input 
                data-testid="email-input"
                value={emailValue}
                type='text'
                onChange={e => setEmailValue(e.target.value)}
            />
            <input 
                data-testid='password-input' 
                value={passValue}
                type='password'
                onChange={e => setPassValue(e.target.value)}
            />

            <button 
                data-testid='submit'
                onClick={()=>{
                    if (emailValue.length && passValue.length) {
                        setMsg('Вы вошли')
                    }
                }}
            >
                Click
            </button>

            
            <p data-testid={msg.length ? 'success-message' : '' }>{msg}</p> 
        </Fragment>
    )
};
