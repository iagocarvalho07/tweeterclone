'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    placeholder: string
    value?: string
    onChange?: (newValue: string) => void
    filled?: boolean
    password?: boolean
    icon?: IconProp
    onEnter?: () => void
}

const MyInput = ({ placeholder, password, icon, filled, value, onChange, onEnter }: Props) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code.toLowerCase() === 'enter' && onEnter) {
            onEnter();
        }
    }

    return (
        <div className={`'has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2  border-gray-700' ${filled && 'border-gray-700'}`}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <input
                onKeyUp={handleKeyUp}
                className='flex-1 outline-none bg-transparent h-full px-4'
                type={password && !showPassword ? 'password' : 'text'}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)} />
            {password && <FontAwesomeIcon
                className='cursor-pointer mr-4 size-6 text-gray-400'
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? faEye : faEyeSlash} />}

        </div>
    )
}

export default MyInput