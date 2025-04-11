import DocFoldOut from "./assets/DocFoldout/DocFoldOut";
import IntroText from "./assets/DocFoldout/IntroText";
import Navbar from "./assets/Nav/Navbar"

export default function APIdocPage(){
    return (
        <div>
            <Navbar/>
            <IntroText/>
            <DocFoldOut info="GET_links" title="/links..."/>
            <DocFoldOut info="GET_headings" title="/headings..."/>
            <DocFoldOut info="GET_paragraphs" title="/paragraphs..."/>
        </div>
    );
}