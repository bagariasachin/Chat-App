import React from 'react';
import { Badge ,Whisper,IconButton, Tooltip ,Icon } from 'rsuite';

const ConditionalBadge = ({condition,children}) => {

    return condition ?  <Badge>{children}</Badge> : children
}

const IconBtnControl = ({isVisible,
    iconName,
    tooltip,
    onClick,
    badgeContent,
    ...props
}) => {
    return (
        <div   className='ml-2' style={{visibility: isVisible ? 'visible' : 'hidden'}} >

            <ConditionalBadge  condition={badgeContent} >
                <Whisper placement='top' delay={0} delayHide={0} 
                delayShow={0} trigger='hover' speaker={<Tooltip>{tooltip}</Tooltip>} >

                    <IconButton {...props} 
                    onClick={onClick}
                    circle 
                    size='xs'
                    icon={<Icon icon={iconName} />} 
                    />
                </Whisper>
                </ConditionalBadge> 
        </div>
    )
}

export default IconBtnControl
