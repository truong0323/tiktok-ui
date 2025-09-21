import React from 'react';
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import {Link } from 'react-router-dom'

const cx = classNames.bind(styles)
function Button({ 
        to, 
        href ,
        primary= false, 
        outline = false,
        small = false, 
        large=false, 
        text = false,
        disable=false,
        rounded=false,
        children, 
        onClick,
        leftIcon,
        rightIcon,
        className,
        ...passProps 
    }) {
    let Comp = 'button'
    const props ={
        onClick,
        ...passProps
    }
    if(disable) {
        // delete props.onClick
        // xóa toàn bộ event
        Object.keys(props).forEach((key) => {
            if( key.startsWith('on')&& typeof props[key]==='function') {
                delete props[key];
            }
        })
    }
    if( to) {
        props.to = to
        Comp = Link
    }
    else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className] : className,
        primary,
        outline,
        small,
        rounded,
        large,
        text,
        disable
    })
    return (
        <Comp className = {classes} {...props} >
            {leftIcon && <span className ={ cx('icon')}> {leftIcon} </span>}
            <span className= {cx('title')}> {children} </span>
            {rightIcon && <span className ={ cx('icon')}> {rightIcon} </span>}

        </Comp>
    );
}

export default Button;