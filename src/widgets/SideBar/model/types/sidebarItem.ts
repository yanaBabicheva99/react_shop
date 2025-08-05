import React from 'react';

export interface SideBarItemType {
    to: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    text: string;
    authOnly?: boolean;
}
