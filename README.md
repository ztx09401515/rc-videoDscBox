rc-videodscbox
==========
### [online demo](https://ztx09401515.github.io/rc-videoDscBox/demo.html)
## Usage
```jsx harmony
class Page extends React.Component {
    state = {
        infoType: 'in',
        infoOpenWhenPreview: false,
    }
    render() {
        // use <num>.(image/*) as filename
        var data1 = {
            coverUrl: './resource/res1/cover.jpg',
            resUrl: './resource/res1',
            name: '视频1',
            author: <a href="">作者1</a>,
            D1: '简介：简介简介简介简介简介简介简介'
        }, data2 = {
            coverUrl: './resource/res2/cover.jpg',
            resUrl: './resource/res2',
            name: '视频2',
            author: <a href="">作者2</a>,
            D1: '简介：简介简介简介简介简介简介简介'
        }, state = this.state, props = this.props, dscStyle = {
            float: 'left', margin: '0px 10px 5px 0px'
        };
        return <div style={{padding:'10px 0px'}}>
            <div key={'video'} style={{width: 360, margin: '0px auto'}} className={'clearfix'}>
                <VideoDscBox infoOpenWhenPreview={state.infoOpenWhenPreview} style={dscStyle}
                             infoType={state.infoType}
                             data={data1}></VideoDscBox>
                <VideoDscBox infoOpenWhenPreview={state.infoOpenWhenPreview} style={dscStyle} infoType={state.infoType}
                             data={data2}></VideoDscBox></div>
            <div key={'select'}>
                <label>infoType:</label>
                <Select style={{width:200}} defaultValue={'in'} onChange={(value) => {
                    var infoOpen = !(value == 'in');
                    this.setState({infoType: value, infoOpenWhenPreview: infoOpen})
                }}>
                    <Option value={'in'}>in</Option>
                    <Option value={'bottom'}>bottom</Option>
                    <Option value={'right'}>rightSm</Option>

                </Select>
            </div>
        </div>
    }
}
```
## prop
### data
##### type:
    {url?: string,  // link href
    name: string,  // view name
    coverUrl: string, // cover img url
    resUrl: string, // preview dir url
    author?: React.ReactNode, //optinal author node
    D1?: React.ReactNode, // optional detail node
    D2?: React.ReactNode,// optional detail node
    D3?: React.ReactNode,// optional detail node
    },
### suffix
type?: string, // preview file suffix
### className
type?: string,
### customInfo
type?: () => React.ReactNode,
### previewCount
type?: number, // preview count use filename:<num>.(jpg)
### style
type?: object,
### prefix
type: React.ReactNode,
### infoType
type:?: 'in' | 'bottom' | 'right' ,
### display
type: object,//infobox position
### onMouseOver
type?: (e: React.SyntheticEvent) => void,
### onMouseEnter
type?: (e: React.SyntheticEvent) => void,
### onMouseLeave
type?: (e: React.SyntheticEvent) => void,
### infoOpenWhenPreview
type: boolean,
### displayImage
type: boolean,
### preview
type: boolean,
### previewCount
type: number,