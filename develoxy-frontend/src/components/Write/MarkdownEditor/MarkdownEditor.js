import React, {Component, PropTypes} from 'react';
import TitleInput from './TitleInput';
import ContentBody from './ContentBody';
import Editor from './Editor';
import Preview from './Preview';

class MarkdownEditor extends Component {

    static propTypes = {
        onChangeTitle: PropTypes.func,
        onChangeMarkdown: PropTypes.func,
        title: PropTypes.string,
        markdown: PropTypes.string
        // ...
    }

    render() {
        const { onChangeTitle, onChangeMarkdown, title, markdown } = this.props;

        return (
            <div className="markdown-editor">
                <TitleInput onChange={onChangeTitle}/>
                <ContentBody>
                    <Editor onChange={onChangeMarkdown}/>
                    <Preview markdown={markdown}/>
                </ContentBody>
            </div>
        );
    }
}


export default MarkdownEditor;