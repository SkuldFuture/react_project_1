import { Inputform } from "../components/UI/Inputform";
import { Buttonsubmit } from "../components/UI/Buttonsubmit";

export const Login = () => {
    return (
        <div className='login'>
            <form action="">
                <p className="login_tittle">Сервис хранения и создания заявок</p>
                <label htmlFor="login">
                <Inputform name='login' text='Введите логин' type='login' id='login'/>
                </label>
                <label htmlFor="password">
                <Inputform name='password' text='Введите пароль' type='password' id='password'/>
                </label>
                <Buttonsubmit className='login_button' text='Войти' />
            </form>
        </div>
    );
}

export {}