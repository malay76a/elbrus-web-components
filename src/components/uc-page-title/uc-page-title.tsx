import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'uc-page-title',
    shadow: true,
    styleUrl: './uc-page-title.scss'
})
export class UcPageTitle {
    @Prop() counter: string;

    render() {
        return [
            <slot />,
            this.counter ? <span>({this.counter})</span> : ''
        ]
    }
}