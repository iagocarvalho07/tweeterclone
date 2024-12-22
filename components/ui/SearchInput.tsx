'use client';

import React from 'react'
import MyInput from './MyInput'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useRouter } from 'next/navigation';


type Props = {
    defoultValue?: string
    hideOnSearch?: boolean
}

const SearchInput = ({defoultValue, hideOnSearch}:Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [searchInput, setSearchInput] = React.useState(defoultValue ?? '');
    const handleSerarchEnter = ()=>{
        if(searchInput){
            router.push(`/search?q=`+encodeURIComponent(searchInput));
        }
    }

    if(hideOnSearch && pathname === '/search'){
        return null;
    }



    return (
        <MyInput placeholder={'Buscar'}
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={e => setSearchInput(e)}
            onEnter={handleSerarchEnter}
            >
        </MyInput>
    )
}

export default SearchInput