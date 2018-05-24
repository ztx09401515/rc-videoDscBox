import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/styles/hljs';

window.addEventListener('load', function () {
    const codeString="import React from 'react';\n" +
        "import ReactDOM from 'react-dom';\n" +
        "import VideoDscBox from '../src/videoDscBox.tsx';\n" +
        "import {Select} from 'antd';\n" +
        "const Option = Select.Option;\n" +
        "\n" +
        "class Page extends React.Component {\n" +
        "    state = {\n" +
        "        infoType: 'in',\n" +
        "        infoOpenWhenPreview: false,\n" +
        "    }\n" +
        "\n" +
        "    render() {\n" +
        "        var data1 = {\n" +
        "            coverUrl: './resource/res1/cover.jpg',\n" +
        "            resUrl: './resource/res1',\n" +
        "            name: '视频1',\n" +
        "            author: <a href=\"\">作者1</a>,\n" +
        "            D1: '简介：简介简介简介简介简介简介简介'\n" +
        "        }, data2 = {\n" +
        "            coverUrl: './resource/res2/cover.jpg',\n" +
        "            resUrl: './resource/res2',\n" +
        "            name: '视频2',\n" +
        "            author: <a href=\"\">作者2</a>,\n" +
        "            D1: '简介：简介简介简介简介简介简介简介'\n" +
        "        }, state = this.state, props = this.props, dscStyle = {\n" +
        "            float: 'left', margin: '0px 10px 5px 0px'\n" +
        "        };\n" +
        "        return <div style={{padding:'10px 0px'}}>\n" +
        "            <div key={'video'} style={{width: 360, margin: '0px auto'}} className={'clearfix'}>\n" +
        "                <VideoDscBox infoOpenWhenPreview={state.infoOpenWhenPreview} style={dscStyle}\n" +
        "                             infoType={state.infoType}\n" +
        "                             data={data1}></VideoDscBox>\n" +
        "                <VideoDscBox infoOpenWhenPreview={state.infoOpenWhenPreview} style={dscStyle} infoType={state.infoType}\n" +
        "                             data={data2}></VideoDscBox></div>\n" +
        "            <div key={'select'}>\n" +
        "                <label>infoType:</label>\n" +
        "                <Select style={{width:200}} defaultValue={'in'} onChange={(value) => {\n" +
        "                    var infoOpen = !(value == 'in');\n" +
        "                    this.setState({infoType: value, infoOpenWhenPreview: infoOpen})\n" +
        "                }}>\n" +
        "                    <Option value={'in'}>in</Option>\n" +
        "                    <Option value={'bottom'}>bottom</Option>\n" +
        "                    <Option value={'right'}>rightSm</Option>\n" +
        "\n" +
        "                </Select>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "window.addEventListener('load', function () {\n" +
        "    ReactDOM.render(<Page></Page>, window.document.getElementById(\"approot\"))\n" +
        "})"
    ReactDOM.render(<SyntaxHighlighter language='javascript'
                                       style={docco}>{codeString}</SyntaxHighlighter>, window.document.getElementById("code"))
})