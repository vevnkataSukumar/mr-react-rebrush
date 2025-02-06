import React, { useState, useRef, useEffect, useContext } from 'react';
import "../components/Singin.css";
import { ThemeContext } from '../contexts/themeContext';

const MyHooks = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, sePassword] = useState('');
    const [otp, seOtp] = useState('');
    const otpInputRef = useRef(null);
    const theme = useContext(ThemeContext);
    const isDark = theme.theme === 'dark';

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Successfully Validated the Number ${mobileNumber}`);
    };

    const getOtp = () => {
        if (!mobileNumber) {
            alert('Please Enter Mobile Number to get Code');
            return;
        }
        const dummyOTP = '123456';
        alert(`Your OTP is: ${dummyOTP}`);
        otpInputRef.current.focus();
    }

    function checkPasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        switch (strength) {
            case 0: case 1: case 2: return '😱 Weak';
            case 3: return '😐 Moderate';
            case 4: return '😊 Strong';
            case 5: return '💪 Very Strong';
        }
    }

    console.log('Hooks Page');

    return (
        <div className={isDark ? "theme-container": "container"}>
            <div className={isDark ? 'theme-card': 'card'}>
                <h2>Hooks</h2>
                <div>
                    <input
                        className="input"
                        type="number"
                        placeholder='Enter mobile Number'
                        name='mobileNumber'
                        value={mobileNumber}
                        onChange={e => setMobileNumber(e.target.value)}
                    />
                    <p
                        className={mobileNumber ? 'get-otp' : 'get-otp-disabled'}
                        onClick={getOtp}>
                        Get Code
                    </p>
                </div>
                <div>
                    <input
                        className="input"
                        type="password"
                        placeholder='Enter Password'
                        name='password'
                        value={password}
                        onChange={e => sePassword(e.target.value)}
                    />
                    {password && password?.length && <p className='pass-strength'>{checkPasswordStrength(password)}</p>}
                </div>
                <input
                    ref={otpInputRef}
                    className="input"
                    type='text'
                    placeholder='Enter OTP'
                    name='otp'
                    value={otp}
                    onChange={e => seOtp(e.target.value)}
                />
                {/* <p onClick={() => console.log(otpInputRef.current?.value)}>getRefVal</p> */}
                <button className="button" type="submit" disabled={!otp || otp.length <= 0} onClick={handleSubmit}>Submit</button>
                <div className='check-section'>
                    <div style={{display: "flex", marginRight: 10}}>
                        <input type='checkbox' name='dark' value='dark' checked={theme.theme === 'dark'} onChange={() => theme.toggleTheme()} />
                        <label for="vehicle1"> Dark</label>
                    </div>
                    <div style={{display: "flex"}}>
                        <input type='checkbox' name='light' value='light' checked={theme.theme === 'light'} onChange={() => theme.toggleTheme()} />
                        <label for="vehicle1"> Light</label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyHooks;