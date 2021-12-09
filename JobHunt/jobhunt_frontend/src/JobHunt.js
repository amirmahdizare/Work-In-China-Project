import React, { useEffect } from 'react'
import { ProvideAuth } from './api/authentication';
import Jh_Router from './routes/Jh_Router';
import { ProvideLanguage } from './LanguageProvider/Dev/ProvideLanguage';
import { shareStorage } from './api/initilizeApp';
export const JobHunt = () => {
    useEffect(() => shareStorage())

    return (
        <ProvideLanguage>
            <ProvideAuth>
                <Jh_Router />
            </ProvideAuth>
        </ProvideLanguage>
    )
}
