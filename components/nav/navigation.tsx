"use client";

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { use } from 'react'

type Props = {
    label: string;
    icon: IconDefinition;
    href: string;
    active: boolean;
}

const Navigation = ({ label, icon, href, active }: Props) => {
    const pathName = usePathname()
    const ismy = pathName === href


    return (
        <Link href={''} className={`flex items-center gap-6 py-3 
    ${active || ismy ? 'opacity-100' : 'opacity-70'}
     hover:opacity-100 `}>
            <FontAwesomeIcon icon={icon} className='size-6' />
            <div className='text-lg'>{label}</div>
        </Link>
    )
}

export default Navigation