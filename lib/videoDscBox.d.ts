import React from 'react';
import PropTypes from 'prop-types';

export interface VideoDscBoxProps {
    data: {
        url?: string,  // link href
        name: string,  // view name
        coverUrl: string, // cover img url
        resUrl: string, // preview dir url
        author?: React.ReactNode, //optinal author node
        D1?: React.ReactNode, // optional detail node
        D2?: React.ReactNode,// optional detail node
        D3?: React.ReactNode,// optional detail node
    },
    suffix?: string, // preview file suffix
    className?: string,
    customInfo?: () => React.ReactNode,
    previewCount?: number, // preview count use filename:<num>.(jpg)
    style?: object,
    prefix: React.ReactNode,
    infoType?: 'in' | 'bottom' | 'right' , //infobox position
    display: object,
    onMouseOver?: (e: React.SyntheticEvent) => void,
    onMouseEnter?: (e: React.SyntheticEvent) => void,
    onMouseLeave?: (e: React.SyntheticEvent) => void,
    infoOpenWhenPreview: boolean,
    displayImage: boolean,
    preview: boolean,
    previewCount: number,
}

export default class VideoDscBox extends React.Component<VideoDscBoxProps, any> {
    static proptypes : {
        data: PropTypes.object.isRequired,
        prefix: PropTypes.node,
        infoType: PropTypes.string,
        display: PropTypes.object.isRequired,
        preview: PropTypes.bool.isRequired,
        infoOpenWhenPreview: PropTypes.bool.isRequired,
        onMouseOver: PropTypes.func,
        displayImage: PropTypes.bool,
        animBorder: PropTypes.bool,
        previewCount: PropTypes.number,
        suffix: PropTypes.string,
    }
    state: {
        previewOn: false,
        percent: 0,
        index: 0,
    }

}
