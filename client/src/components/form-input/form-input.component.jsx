import { forwardRef } from 'react'

import './form-input.styles.scss'

const FormInput = forwardRef(({ label, ...otherProps }, ref) => {
    return (
        <div className='group'>
            <input 
                className='form-input' 
                ref={ref}
                {...otherProps}
            />
            {
                label ? 
                // <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> :
                <label className={`shrink form-input-label`}>{label}</label> :
                null
            }
        </div>
    )
})

export default FormInput