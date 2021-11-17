import './Login.css';
import CloseBtn from './close-btn/CloseBtn';
import LoginInput from './login-input/LoginInput';
import { pathLinks } from '../../consts';
import { useState } from 'react';

const Login = () => {
    let [login,setLogin] = useState();
    let [password,setPassword] = useState();

    const onChangeInputLogin = (e) => {
        setLogin(login = e.target.value);
    };
    const onChangeInputPassword = (e) => {
        setPassword(password = e.target.value);
    }; 

    const onSubmitForm = (evt) =>{
        evt.preventDefault();

        const formData = {
            login: login,
            password: password,
        };

    }; 
    return (
        <div className="login">
            <div className="login__inner">
                <CloseBtn closePath={pathLinks.home}/>
                <form className="login__form" action="" onSubmit = {onSubmitForm}>
                    <LoginInput name = "Логин" value = {login} onChangeInputValue = {onChangeInputLogin}/>
                    <LoginInput name = "Пароль" value = {password} onChangeInputValue = {onChangeInputPassword}/>
                    <button className="button login__button" type="submit">Войти</button>
                </form>
            </div> 
        </div>
    );
    
};

export default Login;