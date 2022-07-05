import React, { Children } from "react";
import styles from './icon.scss';
import classNames from "classnames";
import { CommentIcon } from "./CommentIcon";
import { ComplainIcon } from "./ComplainIcon";
import { HiddenIcon } from "./HiddenIcon";
import { MenuIcon } from "./MenuIcon";
import { SaveIcon } from "./SaveIcon";
import { ShareIcon } from "./ShareIcon";
import { IconAnon } from "./IconAnon";

export enum EIcons {
    comment = 'comment',
    comPlain = 'comPlain',
    hidden = 'hidden',
    menu = 'menu',
    save = 'save',
    share = 'share',
    anon = 'anon'
}

type TSizes =  18 | 16 | 14 | 12 | 10;

interface IIconProps {
    As?: 'div' | 'span';
    children?: React.ReactNode;
    name: EIcons,
    size?: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
}

export function Icons({As = 'span', children, name, size, mobileSize, tabletSize, desktopSize}: IIconProps) {

    switch(name) {
        case EIcons.comment:
            children = <CommentIcon />;
            break;
        case EIcons.comPlain:
            children = <ComplainIcon />;
            break;
        case EIcons.hidden:
            children = <HiddenIcon />;
            break;
        case EIcons.menu:
            children = <MenuIcon />;
            break;
        case EIcons.save:
            children = <SaveIcon />;
            break;
        case EIcons.share:
            children = <ShareIcon />;
            break;
        case EIcons.anon:
            children = <IconAnon />;
            break;
    }

    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
    );

    return (
        <As className={classes}>
            { children }
        </As>
    )
}