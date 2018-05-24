import React from 'react';
import PropTypes from 'prop-types';
import {Button, Menu, Progress} from 'antd';
import styles from './videoDscBox.css';

export interface VideoDscBoxProps {
    data: {
        url?: string,
        name: string,
        coverUrl: string,
        resUrl: string,

        author?: React.ReactNode,
        D1?: React.ReactNode,
        D2?: React.ReactNode,
        D3?: React.ReactNode,
    },
    suffix?: string,
    className?: string,
    customInfo?: () => React.ReactNode,
    previewCount?: number,
    style?: object,
    prefix: React.ReactNode,
    infoType?: 'in' | 'bottom' | 'right' ,
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
    static proptypes = {
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
    } = {
        previewOn: false,
        percent: 0,
        index: 0,
    }
    static defaultProps = {
        data: null,
        name: null,
        suffix: '.jpg',
        describe: null,
        customInfo: null,//
        author: null,
        visitCount: null,
        danmuCount: null,
        imageLink: true,
        infoType: 'in',//bottom,right
        coverurl: '',
        preview: true,
        infoOpenWhenPreview: false,
        previewCount: 6,
        displayImage: true,
        animBorder: false,
        display: {
            name: true,
            visitCount: true,
        },
    }


    handlerMousemove(pxevent) {
        var event = pxevent.nativeEvent, mousepos = event.offsetX / this.refs.cover.scrollWidth;
        mousepos = mousepos >= 1 ? 0.99 : mousepos;
        var imgindex = Math.floor(mousepos / (1 / this.props.previewCount));
        imgindex = imgindex < 0 ? 0 : imgindex;
        imgindex = imgindex > this.props.previewCount ? 5 : imgindex;
        this.setState({
            previewOn: true,
            percent: mousepos * 100,
            index: imgindex,
        });
    }

    handlerMouseLeave(pxevent) {
        this.setState({
            previewOn: false,
            percent: 0,
            index: 0,
        });
    }

    handlerMouseOver(e) {
        this.props.onMouseOver ? this.props.onMouseOver.call(this, e) : null;
    }

    handlerMouseEnter(e) {
        this.props.onMouseEnter ? this.props.onMouseEnter.call(this, e) : null;
    }

    handlerBoardMouseLeave(e) {
        this.props.onMouseLeave ? this.props.onMouseLeave.call(this, e) : null;
    }

    render() {

        let state = this.state, props = this.props, data = props.data;
        let mStyles = {
            className: styles.videoDscBoxBoard + ' ' + (props.className || ''),
            imgInClassName: styles.videoDscBoxIn,
            imgBotClassName: styles.videoDscBoxBot,
            imgRightSmClassName: styles.videoDscBoxRightSm,
            imgRightMdClassName: styles.videoDscBoxRightMd,
            previewClassName: styles.preview,
            infoInClassName: styles.infoIn,
            infoBotClassName: styles.infoBot,
            infoRightSmClassName: styles.infoRightSm,
            infoNameClassName: styles.infoName,
            infoVisitCountClassName: styles.infoVisitCount,
            infoAuthorClassName: styles.infoAuthor,
            infoD1ClassName: styles.infoD1,
        };
        var infoClassNameTemp;
        var imgClassName;
        switch (props.infoType) {
            case 'in':
                imgClassName = mStyles.imgInClassName;
                infoClassNameTemp = mStyles.infoInClassName;
                break;
            case 'bottom':
                imgClassName = mStyles.imgBotClassName;
                infoClassNameTemp = mStyles.infoBotClassName;
                break;
            case 'right':
                imgClassName = mStyles.imgRightSmClassName;
                infoClassNameTemp = mStyles.infoRightSmClassName;
                break;
            default:
                imgClassName = mStyles.imgInClassName;
                infoClassNameTemp = mStyles.infoInClassName;
                break;

        }
        var infoContent=<div className={infoClassNameTemp}>
            <span className={styles.infoName}>{data.name}</span>
            {data.D1 ? <span className={styles.infoD1}>{data.D1}</span> : null}
            <span className={styles.infoAuthor}>{data.author}</span>
            {data.D2 ? <span className={styles.infoD1}>{data.D1}</span> : null}
            {data.D3 ? <span className={styles.infoD1}>{data.D1}</span> : null}
        </div>

        let result;
        if (this.props.preview) {
            var displayPreview = props.preview && state.previewOn;
            var displayInfo = !(displayPreview && !props.infoOpenWhenPreview);
            var resurldata = (props.data.resUrl || '') + '/' + state.index.toString() + props.suffix;
            var previewmaskTemp = <div className={mStyles.previewClassName}
                                       style={{backgroundImage: 'url(' + encodeURI(resurldata) + ')'}}>
                <Progress className={styles.previewProgresser} showInfo={false} percent={state.percent}></Progress>
            </div>;
            var previewmask = displayPreview ? previewmaskTemp : '';
            var imgContent = <a ref={'cover'} title={props.data.name} href={props.data.url} target={'_blank'}
                                onMouseLeave={this.handlerMouseLeave.bind(this)}
                                onMouseMove={this.handlerMousemove.bind(this)}
                                className={imgClassName}
                                style={{backgroundImage: 'url(' + encodeURI(props.data.coverUrl) + ')'}}>
                {previewmask}
            </a>
            result = <div onMouseEnter={this.handlerMouseEnter.bind(this)}
                          onMouseLeave={this.handlerBoardMouseLeave.bind(this)}
                          onMouseOver={this.handlerMouseOver.bind(this)} className={mStyles.className}
                          style={Object.assign({position: 'relative'}, this.props.style)}>
                {this.props.prefix ? this.props.prefix : undefined}
                {this.props.displayImage ?
                    imgContent : null}
                {!displayInfo ? null : props.customInfo ? props.customInfo.apply(this) :
                   infoContent}
            </div>
        } else {
            var imgContent = <a ref={'cover'} title={props.data.name} href={props.data.url} target={'_blank'}
                                onMouseLeave={this.handlerMouseLeave.bind(this)}
                                onMouseMove={this.handlerMousemove.bind(this)}
                                className={imgClassName} resurl={props.data.resUrl}
                                style={{backgroundImage: 'url(' + encodeURI(props.data.coverUrl) + ')'}}>

            </a>
            result = <div onMouseEnter={this.handlerMouseEnter.bind(this)}
                          onMouseLeave={this.handlerBoardMouseLeave.bind(this)}
                          onMouseOver={this.handlerMouseOver.bind(this)} className={mStyles.className}
                          style={Object.assign({position: 'relative'}, this.props.style)}>
                {this.props.prefix ? this.props.prefix : undefined}
                {this.props.displayImage ? imgContent : null}
                {props.customInfo ? props.customInfo.apply(this) :
                   infoContent}
            </div>
        }
        return result;
    }
}
