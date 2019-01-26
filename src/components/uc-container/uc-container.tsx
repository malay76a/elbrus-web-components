import { Component } from '@stencil/core';

@Component({
    tag: 'uc-container',
    shadow: true,
    styleUrl: './uc-container.scss'
})
export class UcContainer {
    render() {
        return <slot />;
    }
}