import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
    return (
        <div>
            <SignUp path='/sign-up' />
        </div>
    )
}

export default SignUpPage
