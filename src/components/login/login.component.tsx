import { JSX } from 'react';
import * as C from './login.styles';
import { Button } from '../common/Button.style';
import Api from '../../services/firebase.service';
import { UserCredential } from 'firebase/auth';

import GoogleIcon from '@mui/icons-material/Google';

type Props = {
    onLogin: (credential: UserCredential) => void;
}

export const Login = ({ onLogin }: Props): JSX.Element => {
    const handleLogin = async (): Promise<void> => {
        try {
            const result: UserCredential = await Api.loginPopup();

            if (!result.user) {
                console.error('No user information found after login.');
                return;
            }

            onLogin(result);

        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <C.LoginArea>
            <C.Text>Faça login com sua conta do Google para continuar</C.Text>
            <Button onClick={handleLogin}>
                <GoogleIcon style={{ color: '#00BFA5' }}/>
            </Button>
        </C.LoginArea>
    );
}