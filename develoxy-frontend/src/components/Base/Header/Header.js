import React from 'react';

// re-export child components
export { default as BrandLogo } from './BrandLogo';
export { default as SidebarButton } from './SidebarButton';
export { default as AuthButton } from './AuthButton';
export { default as UserButton } from './UserButton';
export { default as UserMenu } from './UserMenu';
class Header extends React.Component {    
    render() {

        const { children, visible } = this.props;

        if(!visible) return null;
        
        return (
            <div>
                <div className="header-wrapper">
                    <div className="header">
                        {children}
                    </div>
                </div>
                <div className="header-spacer">
                </div>
            </div>
        )
    }
}
export default Header;


